import React from "react"
import { MdKeyboardReturn } from "react-icons/md"

const ChatEmpty = () => {
  return (
    <>
      <div className="flex h-full w-full items-center text-center text-14 text-grey-40">
        <div className="flex w-full justify-center">
          <div className="grid w-[300px] grid-cols-1">
            <div className="mb-30 w-full text-22 font-bold text-black">
              Open a chat to start having proper conversations!
            </div>
            <div className="mb-40 flex w-full justify-center">
              <img alt="" className="h-80 w-80" src={"/emojis/emoji_alert.png"} />
            </div>
            <div className="flex w-full justify-center">
              <MdKeyboardReturn className="text-40 text-grey-40" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatEmpty
