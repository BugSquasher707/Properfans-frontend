import React from "react"

const ChatTypingText = ({ typing }: { typing: string[] }) => {
  return (
    <>
      <div className="w-full text-12 font-bold text-grey-40">
        {typing.length === 1 ? `${typing[0]} is typing...` : ""}
        {typing.length === 2 ? `${typing[0]} and ${typing[1]} are typing...` : ""}
        {typing.length === 3 ? `${typing[0]}, ${typing[1]} and ${typing[2]} are typing...` : ""}
        {typing.length > 3 ? `${typing[0]}, ${typing[1]} and ${typing.length - 2} others are typing...` : ""}
      </div>
    </>
  )
}

export default ChatTypingText
