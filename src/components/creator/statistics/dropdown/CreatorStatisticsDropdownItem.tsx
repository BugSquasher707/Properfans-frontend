import React from "react"
import { HiOutlineCheck } from "react-icons/hi"
import Verified from "utils/icons/Verified"

const CreatorStatisticsDropdownItem = ({
  checked = false,
  verified = false,
  text,
  subtext = "",
  avatar
}: {
  checked?: boolean
  avatar: string
  verified?: boolean
  text: string
  subtext?: string
}) => {
  return (
    <div className="flex w-full items-center rounded-4 bg-transparent px-12 py-8 text-14 font-bold text-black hover:bg-grey-3">
      <img alt="avatar" className="mr-12 h-32 w-32 rounded-full" src={avatar} />
      <div className="flex-1">
        <span className="flex items-center text-14 font-bold text-black">
          <span className="mr-4">{text}</span>
          {verified && <Verified size={14} />}
        </span>
        {!!subtext && <span className="mt-2 block text-12 leading-normal text-grey-40">{subtext}</span>}
      </div>
      {!!checked && (
        <span className="ml-auto text-20 text-purple">
          <HiOutlineCheck />
        </span>
      )}
    </div>
  )
}

export default CreatorStatisticsDropdownItem
