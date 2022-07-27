import { FanDiscoverCategoryInterface } from "libs/interfaces"
import React from "react"

const FanDiscoverTile = ({ category, active }: { category: FanDiscoverCategoryInterface; active: boolean }) => {
  return (
    <div>
      <div className="w-84 h-84 rounded-full relative group overflow-hidden cursor-pointer hover:shadow-lg">
        <img
          alt="category"
          className="absolute top-0 left-0 w-full h-full z-0 object-cover"
          src={category.media}
        />
        <div className="absolute top-0 left-0 w-84 h-84 bg-purple-40 z-10"></div>
        <div className="hidden relative group-hover:block w-84 h-84 bg-purple z-20"></div>
        <span className="absolute top-0 left-0 z-20 w-full h-full flex items-center justify-center text-white text-32">
          {category.icon}
        </span>
      </div>
      <p className={`text-center m-0 text-12 font-bold mt-8 ${active ? "text-black" : "text-grey-40"}`}>
        {category.category}
      </p>
    </div>
  )
}

export default FanDiscoverTile
