import Wrapper from "components/wrappers/Wrapper"
import { TitleInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

const DropdownAny = ({ title, options, handler }: { title: string; options: TitleInterface[]; handler: any }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-full">
      <button
        className="grid h-36 w-full grid-cols-[1fr,auto] items-center gap-12 rounded-4 bg-grey-6 px-12"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full text-left text-14 text-grey-40">{title}</div>
        <div className="flex h-16 w-16 items-center justify-center">
          <MdKeyboardArrowDown className="text-16 text-grey-20" />
        </div>
      </button>
      <Wrapper open={open}>
        <div className="absolute top-40 left-0 z-20 w-full gap-6 rounded-4 border-1 border-grey-12 bg-white p-6 shadow-md">
          {options.map((option: TitleInterface, key: number) => (
            <button
              key={key}
              className="w-full rounded-4 px-10 py-4 text-left text-14 text-grey-40 hover:bg-grey-6 hover:text-black"
              onClick={() => {
                setOpen(!open)
                handler(option.title)
              }}
            >
              {option.title}
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  )
}

export default DropdownAny
