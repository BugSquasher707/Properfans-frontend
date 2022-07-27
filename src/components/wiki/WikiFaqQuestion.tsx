import Wrapper from "components/wrappers/Wrapper"
import { DropdownFaqInterface } from "libs/interfaces"
import React, { useEffect, useRef, useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

const WikiFaqQuestion = ({ data }: { data: DropdownFaqInterface }) => {
  const ref = useRef<HTMLDivElement>(null)

  const [height, setHeight] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (ref.current) {
      setHeight(open ? ref.current.scrollHeight : 0)
    }
  }, [open])

  return (
    <button className="relative grid w-full grid-cols-1 gap-20 p-20" onClick={() => setOpen(!open)}>
      <Wrapper open={open}>
        <div className="absolute top-0 left-0 h-64 w-2 bg-purple"></div>
      </Wrapper>
      <div className="grid w-full grid-cols-[1fr,auto] items-center gap-12">
        <div className="w-full truncate overflow-ellipsis text-left text-20 font-bold text-black">{data.title}</div>
        <div className="flex h-16 w-16 items-center justify-center">
          <MdKeyboardArrowDown className={`text-22 text-purple ${open ? "rotate-180 transform" : ""}`} />
        </div>
      </div>
      <div
        ref={ref}
        className="w-full overflow-hidden border-t-1 border-grey-12 pt-20 text-left text-14 text-grey-40 transition-all duration-300"
        style={{ maxHeight: `${height}px` }}
      >
        {data.content}
      </div>
    </button>
  )
}

export default WikiFaqQuestion
