import React, { useState } from "react"
import { IoMdTrophy } from "react-icons/io"
import { MdGamepad } from "react-icons/md"
import PopupWrapper from "utils/elements/PopupWrapper"

const FanCategories = ({categories, selectedCategory}: {categories : string[] | any, selectedCategory: string}) => {
  const [visible, setVisible] = useState(false)

  return (
    <div className="flex items-center justify-center">
      <div className="rounded-full border-1 border-grey-12 px-10 py-3 flex items-center">
        <div className="text-purple text-14 flex items-center">
          <MdGamepad />
        </div>
        <div className="ml-4 text-12 leading-normal font-bold text-black">{selectedCategory}</div>
      </div>
      {categories.length > 0 && (
        <div className="relative">
          <div
            className="w-26 h-26 rounded-full border-1 border-grey-12 text-grey-40 text-10 leading-[18px] flex items-center justify-center ml-4 cursor-pointer"
            onClick={() => setVisible(true)}
          >
            +{categories.length - 1}
          </div>
          <PopupWrapper handler={setVisible} open={visible}>
            <div className="absolute left-40 transform -translate-y-1/2 bg-white rounded-4 shadow-lg border-1 border-grey-12 p-12 z-30 -top-13">
              <div className="text-12 text-grey-40 leading-[15px] mb-12 font-bold">Categories</div>
              <div className="flex">
                {categories.map((category: string) => (
                  <div
                    key={category}
                    className="flex items-center py-7 pl-12 pr-10 border-1 border-grey-12 rounded-full ml-4 first:ml-0"
                  >
                    <div className="text-purple text-12 flex items-center">
                      <IoMdTrophy />
                    </div>
                    <div className="text-12 leading-[18px] text-black font-bold ml-4">{category}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute left-[33px] w-14 h-14 bg-white transform rotate-45 border-b-1 border-l-1 border-grey-12  -translate-y-1/2 -top-13 z-30"></div>
          </PopupWrapper>
        </div>
      )}
    </div>
  )
}

export default FanCategories
