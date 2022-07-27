import { statusApi } from "api/endpoints/status"
import { chatSideCommunities, chatSideDms, chatSideFriends } from "api/integration/chat"
import { parseTimeAgo } from "api/integration/functions"
import { toastError } from "api/integration/toaster"
import ChatDm from "components/chat/ChatDm"
import SideChatDots from "components/chat/sides/elements/SideChatDots"
import WrapperPaginationMulti from "components/wrappers/WrapperPaginationMulti"
import { useChat } from "contexts/ChatContext"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { ChatType } from "libs/enums"
import { ChatDmInterface, TabInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { AiOutlineCaretLeft } from "react-icons/ai"
import { Link } from "react-router-dom"
import ButtonBack from "utils/buttons/back/ButtonBack"
import InputSearch from "utils/inputs/InputSearch"
import Tabs from "utils/tabs/Tabs"

const SideChat = () => {
  const { type, chatId, setType } = useChat()
  const { socket, token } = useProps()

  const [done, setDone] = useState([false, false, false])
  const [loaded, setLoaded] = useState([false, false, false])

  const [ready, setReady] = useState(false)
  const [search, setSearch] = useState("")
  const [unread] = useState(0)

  const [tabs] = useState<TabInterface[]>([
    { type: ChatType.Dm, title: <>Chats</>, action: setType },
    { type: ChatType.Community, title: <>Clubs</>, action: setType }
  ])

  const [friends, setFriends] = useState<ChatDmInterface[]>([])

  const [dms, setDms] = useState<ChatDmInterface[]>([])
  const [communities, setCommunities] = useState<ChatDmInterface[]>([])
  const [visible, setVisible] = useState<ChatDmInterface[]>([])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    if (!socket) {
      return
    }

    setMounted(true)

    if (!ready) {
      onReady()
    }

    const eventHandler = (data: any) => {
      onIncomingMessage(data)
    }

    socket.on("newMessage", eventHandler)

    return () => {
      socket.off("newMessage", eventHandler)
      setMounted(false)
    }
  }, [chatId, dms, communities])

  useEffect(() => {
    onVisible()
  }, [type, communities, dms, friends])

  const onReady = async () => {
    setReady(true)
    await onLoadChats(1)
    await onLoadCommunity(1)
    setLoaded([true, true, false])
  }

  const onIncomingMessage = (data: any) => {
    if (type === ChatType.Dm && !data.communityChat) {
      const inView = dms.filter((chat: ChatDmInterface) => chat.id === data.chatid).length > 0 ? true : false

      if (inView) {
        const newRoom = dms.filter((chat: ChatDmInterface) => chat.id === data.chatid)[0]

        newRoom.date = parseTimeAgo(new Date().getTime())

        if (!newRoom.group) {
          newRoom.messages = [data]
        }

        setDms([newRoom].concat(dms.filter((chat: ChatDmInterface) => chat.id !== data.chatid)))
      } else {
        onLoadChats(1)
      }
    } else if (type === ChatType.Community && data.communityChat) {
      const inView = communities.filter((chat: ChatDmInterface) => chat.id === data.chatid).length > 0 ? true : false

      if (inView) {
        const newRoom = communities.filter((chat: ChatDmInterface) => chat.id === data.chatid)[0]

        newRoom.date = parseTimeAgo(new Date().getTime())

        if (!newRoom.group) {
          newRoom.messages = [data]
        }

        setCommunities([newRoom].concat(communities.filter((chat: ChatDmInterface) => chat.id !== data.chatid)))
      } else {
        onLoadCommunity(1)
      }
    }
  }

  const onVisible = () => {
    switch (type) {
      case ChatType.Community:
        setVisible(communities)
        break
      case ChatType.Dm:
        setVisible(dms)
        break
      case ChatType.Search:
        setVisible(friends)
        break
    }
  }

  const onLoadChats = async (page: number) => {
    console.log(page, token)

    const result = await statusApi()

    onLoaded(1)

    if (result && result.length === 0) {
      onDone(1)
    } else if (mounted) {
      onSetChats(result)
    }
  }

  const onSetChats = async (result: any) => {
    const newDms = await chatSideDms(result)
    setDms((old) => old.concat(newDms))
  }

  const onLoadCommunity = async (page: number) => {
    console.log(page)

    const result = await statusApi()

    onLoaded(0)

    if (result && result.length === 0) {
      onDone(0)
    } else if (mounted) {
      onSetCommunities(result)
    }
  }

  const onSetCommunities = async (result: any) => {
    const newCommunities = await chatSideCommunities(result)
    setCommunities((old) => old.concat(newCommunities))
  }

  const onSearch = async (page: number) => {
    if (!search) {
      toastError("Enter a search term")
      return
    }

    console.log(page)

    const result = await statusApi()

    if (result) {
      onLoaded(2)

      if (result && result.length === 0) {
        onDone(2)
      } else if (mounted) {
        setType(ChatType.Search)
        onSetFriends(result)
      }
    }
  }

  const onSetFriends = async (res: any) => {
    const newSearch = await chatSideFriends(res)
    setFriends(newSearch)
  }

  const onEnter = (key: string) => {
    if (key === "Enter") {
      onSearch(1)
    }
  }

  const onPage = (pages: number[]) => {
    if (pages[type] > 1) {
      switch (type) {
        case ChatType.Community:
          onLoadCommunity(pages[0])
          break
        case ChatType.Dm:
          onLoadChats(pages[1])
          break
        case ChatType.Search:
          onSearch(pages[2])
          break
      }
    }
  }

  const onDone = (tab: number) => {
    const newDone = [...done]
    newDone[tab] = true
    setDone(newDone)
  }

  const onLoaded = (tab: number) => {
    const newLoaded = [...loaded]
    newLoaded[tab] = true
    setLoaded(newLoaded)
  }

  return (
    <>
      <div className="mb-20 hidden w-full justify-start lg:flex">
        <ButtonBack link={URL.FAN.BASE} title={"Back to Fan Side"} />
      </div>
      <div className="mb-12 flex w-full justify-between">
        <div className="flex items-center space-x-[8px]">
          <div className="flex items-center">
            <Link
              className="group relative mr-8 flex h-26 w-26 cursor-pointer items-center justify-center rounded-4 hover:bg-grey-6 lg:hidden"
              to={URL.FAN.BASE}
            >
              <AiOutlineCaretLeft className="text-grey-40 group-hover:text-black" />
            </Link>
            <div className="text-18 font-bold text-black lg:text-14">Direct messages</div>
          </div>
          {unread > 0 ? (
            <div className="flex h-20 min-w-[20px] items-center justify-center rounded-full bg-purple px-6 text-10 font-bold text-white">
              {unread}
            </div>
          ) : (
            ""
          )}
        </div>
        <SideChatDots />
      </div>
      <div className="mb-20 w-full ">
        <InputSearch handler={setSearch} handlerSubmit={onEnter} title={"Search chats"} value={search} />
      </div>
      <div className="mb-10 w-full">
        <Tabs tabs={tabs} type={type} />
      </div>
      <div className="side-chat absolute left-0 bottom-0 w-full">
        <div className="scroller flex h-full w-full items-start overflow-auto rounded-4">
          {visible && visible.length > 0 ? (
            <div className="grid w-full grid-cols-1 gap-8">
              <WrapperPaginationMulti
                count={visible.length}
                done={done}
                handlerPage={onPage}
                items={"chats"}
                loaded={loaded}
                tab={type}
                tabs={3}
              >
                <>
                  {visible.map((dm: ChatDmInterface, key: number) => (
                    <ChatDm key={key} active={dm.id === chatId} dm={dm} />
                  ))}
                </>
              </WrapperPaginationMulti>
            </div>
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-4 bg-grey-3 text-14 font-semibold text-grey-40">
              No chats found
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default SideChat
