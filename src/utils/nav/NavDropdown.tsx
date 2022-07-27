import { DropdownGroupInterface, DropdownInterface } from "libs/interfaces"
import React, { useState } from "react"
import DropdownIcon from "utils/dropdowns/DropdownIcon"
import PopupWrapper from "utils/elements/PopupWrapper"
import NavDropdownItem from "utils/nav/NavDropdownItem"

const NavDropdown = ({ dropdown, right }: { dropdown: DropdownGroupInterface; right?: boolean }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="center group relative h-28 items-start px-10">
      <button className="center h-28 cursor-pointer" onClick={() => setOpen(!open)}>
        <div className="mr-6 select-none text-14 text-grey-40 group-hover:font-bold group-hover:text-black">
          {dropdown.title}
        </div>
        <DropdownIcon open={open} />
      </button>
      <PopupWrapper handler={setOpen} open={open}>
        <div className={`absolute top-32 z-30 ${right ? "right-0" : "-left-10"}`}>
          <div className="mt-10 w-[200px] min-w-[200px] cursor-pointer rounded-4 border-1 border-grey-12 bg-white px-6 py-4 shadow-md md:w-auto">
            {dropdown.data.map((element: DropdownInterface, key: number) => (
              <NavDropdownItem key={key} data={element} />
            ))}
          </div>
        </div>
      </PopupWrapper>
    </div>
  )
}

export default NavDropdown
