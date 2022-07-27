import { ReactComponent as LogoIconSmall } from "assets/img/properfansIcon.svg"
import React from "react"
import { Link } from "react-router-dom"

const DropdownLogoLink = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link
      className="group flex w-full items-center justify-start space-x-[14px] rounded-4 py-10 px-14 hover:bg-grey-6 lg:px-12"
      to={link}
    >
      <LogoIconSmall className="h-30 w-36 fill-current text-black lg:h-24 lg:w-28" />
      <div className="text-16 font-bold text-black lg:text-14">{title}</div>
    </Link>
  )
}

export default DropdownLogoLink
