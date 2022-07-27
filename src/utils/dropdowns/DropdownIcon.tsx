import React from "react"
import { MdKeyboardArrowDown } from "react-icons/md"

const DropdownIcon = ({ open }: { open: boolean }) => {
  return (
    <div className="center w-12">
      <MdKeyboardArrowDown
        className={`transform text-12 text-grey-40 group-hover:text-black ${open ? "rotate-180 " : ""}`}
      />
    </div>
  )
}

export default DropdownIcon
