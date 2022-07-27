import { MessageContentInterface } from "libs/interfaces"
import React from "react"

const MessageImage = ({ content, incoming }: { content: MessageContentInterface; incoming: boolean }) => {
  return (
    <>
      <div className="max-w-full sm:max-w-[285px]">
        <img
          alt=""
          className={`w-full rounded-t-6 ${incoming ? "rounded-br-6" : "rounded-bl-6"}`}
          src={content.content}
        />
      </div>
    </>
  )
}

export default MessageImage
