import Wrapper from "components/wrappers/Wrapper"
import { DropdownFaqsInterface } from "libs/interfaces"
import React, { useState } from "react"
import { IoIosArrowDown } from "react-icons/io"

const ExpansionPanel = ({ data }: { data: DropdownFaqsInterface }) => {
  const [open, setOpen] = useState(false)
  return (
    <div className="relative max-h-content w-full">
      <button
        className={`grid w-full grid-cols-[1fr,auto] items-center gap-12 border-l-2 px-12 py-20 ${
          open ? " border-purple" : "border-transparent"
        }`}
        onClick={() => setOpen(!open)}
      >
        <div className="w-full text-left text-20 font-bold text-black">{data.title}</div>
        <div className="flex h-16 w-16 items-center justify-center">
          <IoIosArrowDown className={`text-22 text-purple ${open ? "rotate-180 transform" : ""}`} />
        </div>
      </button>
      <div className={`${open ? "mx-auto w-11/12 border-b border-grey-10 " : ""}`}></div>
      <Wrapper open={open}>
        <div className="w-full gap-6 bg-white px-12 py-20 text-16 text-grey-40">{data.content}</div>
      </Wrapper>
    </div>
  )
}

export default ExpansionPanel
