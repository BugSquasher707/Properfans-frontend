import React from "react"

const ButtonGreyLightSmall = ({ title }: { title: string }) => {
  return (
    <button className="center h-36 w-full select-none rounded-4 bg-grey-6 px-22 text-14 font-bold text-grey-40 active:ring-3 active:ring-grey-3 hover:bg-grey-6 hover:text-black">
      {title}
    </button>
  )
}

export default ButtonGreyLightSmall
