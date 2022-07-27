import Wrapper from "components/wrappers/Wrapper"
import { TitleInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

const DropdownLight = ({ title, options, handler }: { title: string; options: TitleInterface[]; handler: any }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-full">
      <button
        className="grid h-46 w-full grid-cols-[1fr,auto] items-center gap-12 rounded-4 border-1 border-grey-12 bg-white px-16"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full text-left text-14 font-bold text-black">{title}</div>
        <div className="flex h-16 w-16 items-center justify-center">
          <MdKeyboardArrowDown className="text-16 text-grey-20" />
        </div>
      </button>
      <Wrapper open={open}>
        <div className="absolute top-52 left-0 z-20 w-full gap-6 rounded-4 border-1 border-grey-12 bg-white p-6">
          {options.map((option: TitleInterface, key: number) => (
            <button
              key={key}
              className="w-full rounded-4 px-10 py-6 text-left text-14 text-grey-40 hover:bg-grey-6 hover:font-bold hover:text-black"
              onClick={() => {
                setOpen(!open)
                handler(option)
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

export default DropdownLight
