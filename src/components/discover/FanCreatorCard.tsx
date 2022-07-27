import { ProfileInterface } from "libs/interfaces"
import React from "react"
import Flag from "react-flagkit"
import Verified from "utils/icons/Verified"

import FanCategories from "./FanCategories"

const FanCreatorCard = ({ creator, selectedCategory }: { creator: ProfileInterface; selectedCategory: string }) => {
  return (
    <div className="relative flex h-220 flex-col items-center rounded-[3px] border-1 border-grey-10 px-18 pb-20 pt-42">
      <div className="absolute top-0 left-0 h-full w-full opacity-[0.28]">
        <img alt="banner" className="h-full w-full object-cover" src={creator.banner} />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-[155px] w-full bg-gradient-to-t from-white to-transparent"></div>
      <div className="absolute top-10 left-10">
        <div className="overflow-hidden rounded-4">
          <Flag country="GB" size={18} />
        </div>
      </div>
      <div className="absolute">
        <div className="flex w-full flex-col items-center">
          <div className="mb-14 h-62 w-62 overflow-hidden rounded-full">
            <img alt="avatar" src={creator.avatar} />
          </div>
          <div className="mb-4 flex w-full items-center justify-center text-14 font-bold text-black">
            <div className="text mr-4 truncate">{creator.userName}</div>
            {creator.verified && <Verified size={16} />}
          </div>
          <div className="mb-16 w-full text-center text-12 leading-normal text-grey-40">@{creator.handle}</div>
          <FanCategories categories={creator.favCategoryList} selectedCategory={selectedCategory} />
        </div>
      </div>
    </div>
  )
}

export default FanCreatorCard
