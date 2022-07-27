import React from "react"
import { AiOutlineCaretLeft } from "react-icons/ai"
import { Link } from "react-router-dom"

const BackTo = ({ title, link }: { title: string; link: string }) => {
  return (
    <Link
      className="flex h-36 items-center justify-center space-x-[8px] rounded-4 border-1 border-grey-12 bg-white px-12 shadow-md dark:shadow-none"
      to={link}
    >
      <AiOutlineCaretLeft className="text-black" />
      <div className="text-14 font-bold text-black">Back to {title}</div>
    </Link>
  )
}

export default BackTo
