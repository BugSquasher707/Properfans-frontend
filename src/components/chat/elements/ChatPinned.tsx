import React from "react"
import { MdKeyboardArrowUp } from "react-icons/md"
import { RiPushpinFill } from "react-icons/ri"

const ChatPinned = ({ message, handler }: { message: string; handler: any }) => {
  const unPin = () => {
    // TODO - Unpin
  }

  return (
    <>
      <div className="absolute z-10 grid w-full grid-cols-[auto,1fr,auto] items-center gap-4 rounded-4 bg-black-F7 p-4 shadow-sm">
        <button
          className="group flex h-34 w-34 items-center justify-center rounded-4 hover:bg-grey-3"
          name={"Unpin"}
          onClick={() => unPin()}
        >
          <RiPushpinFill className="text-grey-20 group-hover:text-black" />
        </button>
        <div className="relative w-full overflow-hidden truncate overflow-ellipsis text-14 font-bold text-grey-40">
          {message}
          <div className="gradient-to-r absolute top-0 right-0 z-10 h-full w-40 from-black-F70 to-black-F7"></div>
        </div>
        <button
          className="group flex h-34 items-center gap-4 rounded-4 px-8 hover:bg-grey-3"
          name={"Show"}
          onClick={() => handler()}
        >
          <div className="flex h-20 w-20 items-center justify-center">
            <MdKeyboardArrowUp className="text-grey-40 group-hover:text-black" />
          </div>
          <div className="text-14 font-bold text-black-99 group-hover:text-black">Show message</div>
        </button>
      </div>
    </>
  )
}

export default ChatPinned
