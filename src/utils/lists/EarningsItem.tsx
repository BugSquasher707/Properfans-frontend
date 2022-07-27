import { EarningsInterface, TitleInterface } from "libs/interfaces"
import React from "react"
import { GoHeart } from "react-icons/go"
import { MdKeyboardArrowDown } from "react-icons/md"
import Avatar from "utils/avatars/Avatar"

const EarningsItem = ({ data }: { data: EarningsInterface }) => {
  return (
    <>
      <div className="group flex cursor-pointer items-center space-x-[12px] rounded-4 border-1 border-1 border-white border-grey-12 bg-white py-14 pl-16 pr-24 hover:border-grey-12">
        <div className="h-30 w-30 overflow-hidden rounded-full">
          {data.icon ? <img alt="" src={data.icon} /> : <Avatar size={30} />}
        </div>
        <div className="block">
          <div className="text-12 font-bold text-black">{data.name}</div>
          <div className="flex items-center space-x-[4px] text-12 text-grey-40">
            {data.text}
            <GoHeart className="text-16 text-purple" />
            <span className="text-12 font-bold text-purple">{data.number}</span>
          </div>
        </div>
        <div className="relative hidden h-30 w-20 items-center justify-center">
          <MdKeyboardArrowDown className="text-20 text-grey-20" />
          <div className="absolute right-0 top-30 z-10 grid grid-cols-1 gap-5 rounded-4 border-1 border-grey-12 bg-white p-6 shadow-sm">
            {data.options.map((option: TitleInterface, key: number) => (
              <button key={key} className="h-34 w-full rounded-4 px-14 text-12 font-bold text-black hover:bg-grey-6">
                {option.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default EarningsItem
