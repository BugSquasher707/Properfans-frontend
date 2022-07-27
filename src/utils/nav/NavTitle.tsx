import { LinkInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"

const NavTitle = ({ data }: { data: LinkInterface }) => {
  return (
    <Link className="select-none text-14 font-bold text-black" to={data.link}>
      {data.title}
    </Link>
  )
}

export default NavTitle
