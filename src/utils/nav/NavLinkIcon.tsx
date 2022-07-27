import { NavLinkInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"

const NavLinkIcon = ({ data }: { data: NavLinkInterface }) => {
  return (
    <Link className="flex items-center justify-center space-x-[18px]" to={data.link}>
      <div className="w-14">{data.icon}</div>
      <div className="text-14 font-bold text-black">{data.title}</div>
    </Link>
  )
}

export default NavLinkIcon
