import { LinkGroupInterface, LinkInterface } from "libs/interfaces"
import React, { useState } from "react"
import { Link as LinkScroll } from "react-scroll"
import DropdownIcon from "utils/dropdowns/DropdownIcon"
import PopupWrapper from "utils/elements/PopupWrapper"
import NavBannerItem from "utils/nav/NavBannerItem"

const NavBanner = ({ data }: { data: LinkGroupInterface }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="center relative lg:h-100">
      <div className="center group h-full px-10">
        <button className="center h-28 cursor-pointer" onClick={() => setOpen(!open)}>
          <div className={`mr-6 select-none text-14 text-grey-40 group-hover:text-black ${open ? "font-bold" : ""}`}>
            {data.title}
          </div>
          <DropdownIcon open={open} />
        </button>
        <PopupWrapper handler={setOpen} open={open}>
          <div className="fixed top-80 left-0 z-20 w-full">
            <div className="absolute bottom-0 left-0 right-0 h-0 shadow-lg"></div>
            <div className="center relative w-full border-t-1 border-b-1 border-grey-4 bg-white px-20 py-40">
              <div className="grid w-full max-w-screen-xl grid-cols-3 gap-30">
                {data.data.map((element: LinkInterface, key: number) => (
                  <LinkScroll
                    key={key}
                    className="w-full cursor-pointer"
                    offset={-120}
                    to={element.link}
                    onClick={() => setOpen(false)}
                  >
                    <div className={`${key}`}></div>
                    <NavBannerItem data={element} />
                  </LinkScroll>
                ))}
              </div>
            </div>
          </div>
        </PopupWrapper>
      </div>
    </div>
  )
}

export default NavBanner
