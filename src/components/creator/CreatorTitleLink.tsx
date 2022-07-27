import React from "react"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"

const CreatorTitleLink = ({ title, link, url }: { title: string; link: string; url: string }) => {
  return (
    <>
      <div className="flex w-full items-center justify-start space-x-[12px]">
        <Link className="text-14 font-bold text-grey-40 hover:text-black" to={url}>
          {link}
        </Link>
        <MdKeyboardArrowRight className="text-16 text-grey-20" />
        <div className="text-14 font-bold text-black">{title}</div>
      </div>
      <div className="my-12 w-full border-b-1 border-grey-6 sm:my-16"></div>
    </>
  )
}

export default CreatorTitleLink
