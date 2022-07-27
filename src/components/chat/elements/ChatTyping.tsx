import ChatTypingText from "components/chat/elements/ChatTypingText"
import { useChat } from "contexts/ChatContext"
import { useProps } from "contexts/PropsContext"
import React, { useEffect, useState } from "react"
import Wrapper from "utils/elements/Wrapper"

const ChatTyping = () => {
  const { chatId } = useChat()
  const { socket, user } = useProps()

  const [typing, setTyping] = useState<string[]>([])

  useEffect(() => {
    setTyping([])

    const eventHandler = (data: any) => {
      onAddUser(data)
    }

    socket.on("typing", eventHandler)

    return () => {
      socket.off("typing", eventHandler)
    }
  }, [chatId])

  const onAddUser = (data: any) => {
    if (data.chatid === chatId && data.userName !== user.userName) {
      setTyping((old) => (old.indexOf(data.userName) === -1 ? [data.userName].concat(old) : old))

      setTimeout(() => {
        setTyping((old) => old.filter((username: string) => username !== data.userName))
      }, 5000)
    }
  }

  return (
    <>
      <div className="grid h-24 w-full grid-cols-[auto,1fr] items-center gap-10 lg:h-30">
        <Wrapper open={typing.length > 0}>
          <div className="flex h-6 items-center justify-center">
            <div className="mr-4 h-7 w-7 animate-pulse animate-bounce rounded-full bg-grey-20"></div>
            <div className="mr-4 h-7 w-7 animate-pulse animate-bounce rounded-full bg-grey-20 animation-delay-150"></div>
            <div className="h-7 w-7 animate-pulse animate-bounce rounded-full bg-grey-20 animation-delay-300"></div>
          </div>
          <ChatTypingText typing={typing} />
        </Wrapper>
      </div>
    </>
  )
}

export default ChatTyping
