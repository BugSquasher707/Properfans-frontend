import { MessageContentInterface } from "libs/interfaces"
import React from "react"

const MessageText = ({ content, incoming }: { content: MessageContentInterface; incoming: boolean }) => {
  return (
    <>
      <div
        className={`m max-w-full rounded-t-6 px-14 py-10 text-14 font-semibold sm:max-w-[350px] ${
          incoming ? "rounded-br-6 bg-grey-3 text-black" : "rounded-bl-6 bg-purple text-white"
        }`}
      >
        {content.content !== null && typeof content.content === "object" ? "" : content.content}
      </div>
    </>
  )
}

export default MessageText
