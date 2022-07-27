import { MessageContentInterface } from "libs/interfaces"
import React from "react"

const MessageGif = ({ content, incoming }: { content: MessageContentInterface; incoming: boolean }) => {
  return (
    <>
      <div className="group relative max-w-full cursor-pointer sm:max-w-[285px]">
        <img
          alt=""
          className={`flex w-full rounded-t-6 ${incoming ? "rounded-br-6" : "rounded-bl-6"}`}
          src={content.content.preview}
        />
        <img
          className={`absolute top-0 left-0 hidden w-full rounded-t-6 group-hover:flex ${
            incoming ? "rounded-br-6" : "rounded-bl-6"
          }`}
          alt=""
          src={content.content.gif}
        />
      </div>
    </>
  )
}

export default MessageGif
