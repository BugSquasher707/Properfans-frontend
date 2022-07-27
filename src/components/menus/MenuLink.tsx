import { LinkInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"

const MenuLink = ({ link, active }: { link: LinkInterface; active: boolean }) => {
  return (
    <>
      <Link className="group flex h-full w-full items-center justify-center" to={link.link}>
        <div className="grid w-full grid-cols-1 gap-4">
          <div className="flex w-full justify-center">
            <div
              className={`flex first:text-22 group-hover:first:text-purple ${
                active ? "first:text-purple" : "first:text-grey-20"
              }`}
            >
              {link.icon}
            </div>
          </div>
          <div
            className={`w-full text-center text-12 font-bold group-hover:text-black ${
              active ? "text-black" : "text-grey-40"
            }`}
          >
            {link.title}
          </div>
        </div>
      </Link>
    </>
  )
}

export default MenuLink
