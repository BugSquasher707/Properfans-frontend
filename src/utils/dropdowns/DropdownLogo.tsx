import { parseUrl } from "api/integration/functions"
import { ReactComponent as LogoIcon } from "assets/img/properfans.svg"
import { ReactComponent as LogoIconSmall } from "assets/img/properfansIcon.svg"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import React, { useState } from "react"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"
import DropdownLogoList from "utils/dropdowns/DropdownLogoList"
import TooltipBackground from "utils/modals/TooltipBackground"

const DropdownLogo = () => {
  const { path } = useProps()

  const [open, setOpen] = useState(false)

  return (
    <div className={`relative z-30 ${open ? "4xl:w-[240px] 4xl:h-[76px] h-38" : ""}`}>
      <div
        className={`4xl:py-10 4xl:border-1 grid w-full grid-cols-1 gap-10 rounded-4 ${
          open
            ? "4xl:px-10 4xl:border-grey-12 4xl:absolute 4xl:shadow-md 4xl:shadow-none top-0 left-0"
            : "relative border-white"
        }`}
      >
        <button
          className={`4xl:justify-between 4xl:py-8 group relative z-10 flex w-full items-center justify-start space-x-[14px] ${
            open ? "4xl:pl-4 4xl:pr-10" : ""
          }`}
          onClick={() => setOpen(!open)}
        >
          <div className="flex">
            <LogoIcon className="4xl:flex hidden h-38 w-[164px] fill-current text-black" />
            <LogoIconSmall className="4xl:hidden flex h-38 w-38 fill-current text-black" />
          </div>
          <div className="hidden text-14 font-bold capitalize text-black sm:flex">{parseUrl(path)}</div>
          <div
            className={`flex items-center text-grey-40 group-hover:text-black ${
              open ? "rotate-180 transform text-black" : ""
            }`}
          >
            <MdKeyboardArrowDown />
          </div>
          <Wrapper open={open}>
            <div className="4xl:grid group hidden grid-cols-1 rounded-4 p-2 group-hover:bg-grey-6">
              <MdKeyboardArrowUp className="text-14 text-grey-20 group-hover:text-black" />
              <MdKeyboardArrowDown className="text-14 text-grey-20 group-hover:text-black" />
            </div>
          </Wrapper>
        </button>
        <Wrapper open={open}>
          <TooltipBackground handler={setOpen} />
        </Wrapper>
        <DropdownLogoList open={open} />
      </div>
    </div>
  )
}

export default DropdownLogo
