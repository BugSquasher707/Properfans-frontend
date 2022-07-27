import React from "react"

const ChatTopWrapper = ({ children }: { children: any }) => {
  return (
    <>
      <div className="grid h-42 w-full grid-cols-[1fr,auto] items-center justify-between gap-12">{children}</div>
    </>
  )
}

export default ChatTopWrapper
