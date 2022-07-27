import { openLink } from "api/integration/functions"
import { LinkIconInterface } from "libs/interfaces"
import React from "react"
import { BsArrowRight } from "react-icons/bs"

const LandingProduct = ({ data }: { data: LinkIconInterface }) => {
  return (
    <>
      <button
        className="relative flex w-full cursor-pointer flex-wrap content-between rounded-4 p-30 hover:shadow-md"
        onClick={(e) => openLink(e, data.link)}
      >
        <div className="absolute top-30 left-0 h-52 w-2 bg-purple"></div>
        <div className="mb-40 flex w-full flex-wrap">
          <div className="mb-30 flex h-52 w-full items-center">{data.icon}</div>
          <div className="mb-20 w-full text-left text-14 font-bold text-black">{data.title}</div>
          <div className="w-full text-left text-14 text-grey-40">{data.text}</div>
        </div>
        <div className="flex w-full items-center gap-10 text-14 font-bold text-purple">
          Learn More
          <BsArrowRight className="text-20 text-purple" />
        </div>
      </button>
    </>
  )
}

export default LandingProduct
