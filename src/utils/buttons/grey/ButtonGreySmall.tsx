import React from "react"

const ButtonGreySmall = ({ title }: { title: string }) => {
  return (
    <button className="center h-36 w-full select-none rounded-4 border-1 border-grey-12 bg-white px-22 text-14 font-bold text-black shadow-md active:ring-3 active:ring-grey-6 hover:bg-grey-6">
      {title}
    </button>
  )
}

export default ButtonGreySmall
