import { MeetCreatorCategoryInterface } from "libs/interfaces"
import React from "react"

const MeetCategory = ({ category, active }: { category: MeetCreatorCategoryInterface; active: boolean }) => {
  return (
    <>
      <button
        className={`h-40 rounded-20 px-22 text-14 font-bold ${
          active ? "bg-purple text-white" : "border-1 border-grey-6 bg-white text-black"
        }`}
      >
        {category.title}
      </button>
    </>
  )
}

export default MeetCategory
