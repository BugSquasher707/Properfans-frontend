import { TitleTextInterface } from "libs/interfaces"
import React from "react"
import { BiWorld } from "react-icons/bi"

const NavLanguageItem = ({ data }: { data: TitleTextInterface }) => {
  return (
    <div className="my-2 flex h-36 w-full cursor-pointer items-center rounded-4 px-14 hover:bg-grey-6">
      <div className="mr-10 flex w-16 items-center text-grey-20">
        <BiWorld />
      </div>
      <div className="text-14 font-bold text-black">{data.title}</div>
    </div>
  )
}

export default NavLanguageItem
