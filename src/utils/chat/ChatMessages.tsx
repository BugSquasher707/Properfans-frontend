import React from "react"
import ChatMessage from "utils/chat/ChatMessage"
import ChatMessageMe from "utils/chat/ChatMessageMe"

const ChatMessages = ({ messages }: { messages: any }) => {
  return (
    <>
      <div className="flex h-[calc(100%-50px)] w-full flex-wrap items-start overflow-y-scroll">
        <div className="flex w-full flex-wrap items-start gap-14">
          {messages.map((message: any, key: number) => (
            <>
              {message.me ? <ChatMessage key={key} message={message} /> : <ChatMessageMe key={key} message={message} />}
            </>
          ))}
        </div>
      </div>
    </>
  )
}

export default ChatMessages
