import { DropdownInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"

const NavDropdownItem = ({ data }: { data: DropdownInterface }) => {
  return (
    <Link className="my-2 flex h-36 w-full items-center rounded-4 px-14 hover:bg-grey-6" to={data.link}>
      {data.icon ? <div className="mr-10 flex w-16 items-center text-grey-20">{data.icon}</div> : ""}
      <div className="text-14 font-bold text-black">{data.title}</div>
    </Link>
  )
}

export default NavDropdownItem
