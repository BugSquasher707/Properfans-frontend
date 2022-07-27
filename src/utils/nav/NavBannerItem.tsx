import { LinkInterface } from "libs/interfaces"
import React from "react"

const NavBannerItem = ({ data }: { data: LinkInterface }) => {
  return (
    <button className="flex w-full flex-wrap">
      <div className="mb-12 w-full text-left text-14 font-bold text-black">{data.title}</div>
      <div className="w-full text-left text-14 text-grey-40">{data.text}</div>
    </button>
  )
}

export default NavBannerItem
