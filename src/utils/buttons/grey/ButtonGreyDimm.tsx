import React from "react"

const ButtonGreyDimm = ({ title }: { title: string }) => {
  return (
    <div className="center h-32 w-full cursor-pointer select-none rounded-4 bg-grey-6 px-22 text-12 font-bold text-grey-40 hover:bg-grey-6 hover:text-black">
      {title}
    </div>
  )
}

export default ButtonGreyDimm
