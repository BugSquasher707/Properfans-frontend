import { statusApi } from "api/endpoints/status"
import { chatType } from "api/integration/chat"
import { onMessageChat, onMessageNotification } from "api/integration/notifications"
import { toastSystem } from "api/integration/toaster"
import { useProps } from "contexts/PropsContext"
import { DATE } from "libs/constants"
import { MessageType, TooltipType } from "libs/enums"
import { NotificationToastInterface, TooltipInterface } from "libs/interfaces"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { GoHeart } from "react-icons/go"
import { useParams } from "react-router"
import NavTooltip from "utils/nav/NavTooltip"

type ParamType = {
  id: string
}

const NavTooltips = () => {
  const { socket, token, user } = useProps()

  const { id } = useParams<ParamType>()

  const [messages, setMessages] = useState<TooltipInterface[]>([])
  const [notifications, setNotifications] = useState<TooltipInterface[]>([])
  const [toasts, setToasts] = useState<NotificationToastInterface>()

  const [doneMessages, setDoneMessages] = useState(false)
  const [loadedMessages, setLoadedMessages] = useState(false)
  const [doneNotifications, setDoneNotifications] = useState(false)
  const [loadedNotifications, setLoadedNotifications] = useState(false)

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onIncoming()

    return () => {
      setMounted(false)
    }
  }, [socket])

  useEffect(() => {
    if (toasts) {
      toastSystem(toasts.title, toasts.message, toasts.url)
      setToasts(undefined)
    }
  }, [toasts])

  const onPageChat = async (pageNumber: number) => {
    const newMessages: TooltipInterface[] = []

    setLoadedMessages(true)

    if (newMessages && newMessages.length === 0) {
      setDoneMessages(true)
    } else {
      console.log(pageNumber, newMessages)
    }
  }

  const onPageNotifications = async (pageNumber: number) => {
    console.log(token, pageNumber)

    const result = await statusApi()

    setLoadedNotifications(true)

    if (result && result.length === 0) {
      setDoneNotifications(true)
    }
  }

  const onIncoming = () => {
    if (!socket) {
      return
    }

    if (messages) {
      socket.on("newMessage", (data: any) => {
        if (data.chatid !== id) {
          if (data.type === "text") {
            onIncomingMessage(data)
          } else {
            onIncomingNotification(data)
          }
        }
      })

      socket.off("newMessage", (data: any) => {
        onIncomingMessage(data)
      })
    } else {
      socket.on("newNotification", (data: any) => {
        onIncomingNotification(data)
      })

      socket.off("newNotification", (data: any) => {
        onIncomingNotification(data)
      })
    }
  }

  const onIncomingMessage = (data: any) => {
    if (!mounted) {
      return
    }

    const newType = chatType(data.message, data.type)

    if (user.id === data.userid) {
      return
    }

    const { newContent, newUrl } = onMessageChat(data, newType)

    const newMessage = {
      ...data,
      type: TooltipType.Message,
      typeMessage: newType,
      created: moment(new Date().getTime()).format(DATE.TIME),
      link: data.chatid,
      message: newContent,
      url: newUrl
    }

    if (mounted && newMessage && id !== data.chatid) {
      setToasts({ title: data.userName, message: newContent, url: newUrl })
      setMessages((old: any) => old.concat([newMessage]))
    }
  }

  const onIncomingNotification = (data: any) => {
    if (!mounted) {
      return
    }

    const newType = chatType(data.message, data.type)

    if ((newType === MessageType.Propercoins || newType === MessageType.Properfan) && data.userid === user.id) {
      return
    }

    const { newContent, newContentMessage, newTitle, newUrl } = onMessageNotification(data, newType)

    const newNotification = {
      ...data,
      type: TooltipType.Notification,
      typeMessage: newType,
      icon: <GoHeart className="text-20 text-grey-20 group-hover:text-purple" />,
      created: moment(new Date().getTime()).format(DATE.TIME),
      message: newContent,
      url: newUrl
    }

    if (mounted && newNotification) {
      setToasts({ title: newTitle, message: newContentMessage, url: newUrl })
      setNotifications((old) => old.concat([newNotification]))
    }
  }

  const onMarkAllMessages = () => {
    setMessages([])
  }

  const onMarkAllNotifications = () => {
    setNotifications([])
  }

  const onVisitedMessages = (newId: number) => {
    setMessages(messages.filter((item: TooltipInterface, key: number) => newId !== key))
  }

  const onVisitedNotifications = (newId: number) => {
    setNotifications(notifications.filter((item: TooltipInterface, key: number) => newId !== key))
  }

  return (
    <div className="nav-gap-sm grid grid-cols-[auto,auto] items-center">
      <NavTooltip
        content={messages}
        done={doneMessages}
        handlerAll={onMarkAllMessages}
        handlerPage={onPageChat}
        handlerVisited={onVisitedMessages}
        loaded={loadedMessages}
        type={TooltipType.Message}
      />
      <div className="hidden lg:flex">
        <NavTooltip
          content={notifications}
          done={doneNotifications}
          handlerAll={onMarkAllNotifications}
          handlerPage={onPageNotifications}
          handlerVisited={onVisitedNotifications}
          loaded={loadedNotifications}
          type={TooltipType.Notification}
        />
      </div>
    </div>
  )
}

export default NavTooltips
