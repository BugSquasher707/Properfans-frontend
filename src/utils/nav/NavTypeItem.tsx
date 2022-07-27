import React from "react"
import { Link } from "react-router-dom"

const NavTypeItem = ({ type }: { type: string }) => {
  return (
    <Link
      className="flex h-28 w-full select-none items-center justify-center pl-10 pr-10 text-12 font-bold"
      to={`/${type.toLowerCase()}/dashboard`}
    >
      {type}
    </Link>
  )
}

export default NavTypeItem
