import React from "react"
import { AiOutlineCaretLeft } from "react-icons/ai"
import { Link } from "react-router-dom"

const BackLink = ({ title, link, light }: { title: string; link: string; light?: boolean }) => {
  return (
    <Link
      className={`center text-14 ${light ? "text-white-40 hover:text-white" : "text-grey-40 hover:text-black"}`}
      to={link}
    >
      <AiOutlineCaretLeft className="mr-8" /> {title}
    </Link>
  )
}

export default BackLink
