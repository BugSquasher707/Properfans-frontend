import { statusApi } from "api/endpoints/status"
import { bundleChat } from "api/integration/chat"
import ChatContent from "components/chat/elements/ChatContent"
import ChatSend from "components/chat/elements/ChatSend"
import ChatTyping from "components/chat/elements/ChatTyping"
import ChatTop from "components/chat/top/ChatTop"
import ChatTopGroup from "components/chat/top/ChatTopGroup"
import { useChatContent } from "contexts/ChatContentContext"
import { useChat } from "contexts/ChatContext"
import { useProps } from "contexts/PropsContext"
import { ChatType } from "libs/enums"
import { MessageBundleInterface, MessageInterface, MessageRoomInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { AiOutlineCaretLeft } from "react-icons/ai"
import Wrapper from "utils/elements/Wrapper"

const ChatMain = () => {
  const { chatId, type, setCommunityId, setDmId, setChatId } = useChat()
  const { setHeight, setLoading, setPage, setScrolling } = useChatContent()
  const { socket, token } = useProps()

  const [done, setDone] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const [online, setOnline] = useState(0)
  const [brand, setBrand] = useState(false)
  const [group, setGroup] = useState(false)
  const [info, setInfo] = useState<MessageRoomInterface>()

  const [messages, setMessages] = useState<MessageInterface[]>([])
  const [bundles, setBundles] = useState<MessageBundleInterface[]>([])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)

    setBrand(false)
    setGroup(false)
    setInfo(undefined)

    setHeight(0)
    setLoading(true)
    setPage(1)

    socket.emit("viewChat", chatId, (res: any) => {
      console.log(res)
    })

    setMessages([])

    const eventHandlerMessage = (data: any) => {
      onIncoming(data, chatId)
    }

    const eventHandlerOnline = (data: any) => {
      setOnline(data && data.online ? data.online : 0)
    }

    socket.on("newMessage", eventHandlerMessage)
    socket.on("onlineChats", eventHandlerOnline)

    onLoad()

    return () => {
      socket.off("newMessage", eventHandlerMessage)
      socket.off("onlineChats", eventHandlerOnline)

      setMounted(false)
    }
  }, [chatId, socket])

  useEffect(() => {
    setBundles(bundleChat(messages))
  }, [messages])

  const onIncoming = (data: any, id: string) => {
    if (data.chatid === id) {
      const newMessage: MessageInterface = {
        ...data,
        created: new Date().getTime(),
        log: false,
        system: false
      }

      setScrolling(true)
      setMessages((old) => old.filter((message: any) => message.type !== "friendRequest").concat([newMessage]))
    }
  }

  const onLoad = async () => {
    if (!chatId) {
      return
    }

    const community = type === ChatType.Community

    console.log(token)

    const result = await statusApi()

    if (result && mounted) {
      setBrand(result.brand ? result.brand : false)
      setGroup(result.group ? result.group : false)

      if (community) {
        setInfo(result)
      } else {
        setInfo({
          ...result,
          avatars: result.avatars.filter((avatar: string) => avatar)
        })
      }
    }
  }

  const onPage = async (newPage: number) => {
    if (!chatId) {
      return
    }

    setLoading(true)

    console.log(newPage)

    const result = await statusApi()

    if (result) {
      setLoaded(true)

      if (result && result.length === 0) {
        setDone(true)
      } else {
        setMessages((old) => result.concat(old))
      }
    }
  }

  const onBack = () => {
    if (type === ChatType.Community) {
      setCommunityId("")
    } else {
      setDmId("")
    }

    setChatId("")
  }

  return (
    <>
      <div className="flex h-full w-full flex-col flex-wrap items-start">
        <div className="mb-20 grid h-42 w-full grid-cols-[auto,1fr] items-center gap-8 lg:grid-cols-1">
          <button
            className="group flex h-36 w-36 cursor-pointer items-center justify-center rounded-4 hover:bg-grey-3 lg:hidden"
            onClick={() => onBack()}
          >
            <AiOutlineCaretLeft className="text-18 text-grey-20 group-hover:text-black" />
          </button>
          {info ? (
            <>
              <Wrapper open={brand || (!brand && group)}>
                <ChatTopGroup brand={brand} online={online} room={info} />
              </Wrapper>
              <Wrapper open={!brand && !group}>
                <ChatTop online={online} room={info} />
              </Wrapper>
            </>
          ) : (
            <></>
          )}
        </div>
        <div className="mb-12 hidden w-full border-b-1 border-grey-10 lg:mb-30 lg:flex"></div>
        <div className="relative w-full">
          <ChatContent count={messages.length} done={done} handlerPage={onPage} loaded={loaded} messages={bundles} />
        </div>
        <ChatTyping />
        <ChatSend />
      </div>
    </>
  )
}

export default ChatMain
