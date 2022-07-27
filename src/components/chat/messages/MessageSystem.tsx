import React from "react"

const MessageSystem = ({ message }: { message: JSX.Element }) => {
  return (
    <>
      <div className="w-full py-10 text-center text-12 font-bold text-grey-20 lg:py-14">{message}</div>
    </>
  )
}

export default MessageSystem
