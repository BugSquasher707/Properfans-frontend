import React from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import Wrapper from "utils/elements/Wrapper"

const ChatNew = ({ count, handler }: { count: number; handler: any }) => {
  return (
    <>
      <button
        className="absolute right-8 -bottom-4 flex h-48 w-48 items-center justify-center rounded-full border-4 border-white bg-black-F0"
        name={"Count"}
        onClick={() => handler()}
      >
        <MdKeyboardArrowDown className="text-24 text-black-99" />
        <Wrapper open={count}>
          <div className="absolute -top-13 left-24 flex h-26 min-w-[26px] items-center justify-center rounded-full border-3 border-white bg-purple px-6 text-10 font-bold text-white">
            {count}
          </div>
        </Wrapper>
      </button>
    </>
  )
}

export default ChatNew
