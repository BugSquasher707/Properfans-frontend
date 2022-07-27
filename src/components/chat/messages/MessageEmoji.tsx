import { MessageContentInterface } from "libs/interfaces"
import React from "react"

const MessageEmoji = ({ content, incoming }: { content: MessageContentInterface; incoming: boolean }) => {
  return (
    <>
      <div
        className={`max-w-full py-4 sm:max-w-[285px] ${incoming ? "text-left" : "text-right"} ${
          content.content.match(/./gu).length > 4 ? "text-20 leading-[26px]" : "text-36 leading-[44px]"
        }`}
      >
        {content.content}
      </div>
    </>
  )
}

export default MessageEmoji
