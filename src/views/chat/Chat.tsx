import ChatMain from "components/chat/ChatMain"
import ChatSide from "components/chat/ChatSide"
import ChatEmpty from "components/chat/elements/ChatEmpty"
import MenuFan from "components/menus/MenuFan"
import ChatContentProvider from "contexts/ChatContentContext"
import { useChat } from "contexts/ChatContext"
import { ChatType } from "libs/enums"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

interface Params {
  id: string
}

const Chat = ({ type }: { type: ChatType }) => {
  const { id } = useParams<Params>()

  const { chatId, setCommunityId, setDmId, setType } = useChat()

  const [open, setOpen] = useState(false)

  useEffect(() => {
    setType(type)

    if (id) {
      setOpen(false)

      if (type === ChatType.Community) {
        setCommunityId(id)
      } else {
        setDmId(id)
      }
    } else {
      setOpen(true)
    }
  }, [id])

  useEffect(() => {
    setOpen(chatId ? true : false)
  }, [chatId])

  return (
    <>
      <div className="h-full w-full max-w-screen-xl">
        <div className="relative grid h-full w-full grid-cols-1 items-start gap-20 md:gap-40 lg:grid-cols-[auto,1fr]">
          <div className={`relative h-full w-full flex-col lg:w-[240px] ${open ? "hidden lg:flex" : "flex"}`}>
            <ChatSide />
          </div>
          {open && chatId ? (
            <div className={`h-full ${open ? "" : "hidden lg:flex"}`}>
              <ChatContentProvider>
                <ChatMain />
              </ChatContentProvider>
            </div>
          ) : (
            ""
          )}
          {!chatId ? (
            <div className="hidden h-full lg:flex">
              <ChatEmpty />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className={`${open ? "hidden" : "block lg:hidden"}`}>
        <MenuFan />
      </div>
    </>
  )
}

export default Chat
