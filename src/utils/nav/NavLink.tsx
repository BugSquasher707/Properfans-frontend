import React from "react"
import { Link } from "react-router-dom"

const NavLink = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link className="center h-28 cursor-pointer last:m-0" to={link}>
      <div
        className={`text-14 ${
          window.location.pathname === link ? "font-bold text-black" : "text-grey-40"
        } select-none hover:text-black`}
      >
        {title}
      </div>
    </Link>
  )
}

export default NavLink
