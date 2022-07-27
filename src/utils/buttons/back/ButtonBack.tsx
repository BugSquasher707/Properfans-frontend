import React from "react"
import { AiOutlineCaretLeft } from "react-icons/ai"
import { Link } from "react-router-dom"

const ButtonBack = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link
      className="center group flex gap-8 rounded-4 border-1 border-grey-12 bg-white px-8 py-8 shadow-md dark:shadow-none md:px-14"
      to={link}
    >
      <AiOutlineCaretLeft className="flex-none text-grey-40 group-hover:text-black" />
      <div className="hidden flex-grow text-12 font-bold text-black md:flex">{title}</div>
    </Link>
  )
}

export default ButtonBack
