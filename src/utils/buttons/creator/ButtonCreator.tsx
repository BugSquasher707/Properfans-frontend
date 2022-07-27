import React from "react"

const ButtonCreator = ({ title, icon }: { title: string; icon: JSX.Element }) => {
  return (
    <button className="center h-46 w-full select-none rounded-4 border-1 border-grey-10 bg-grey-1 px-22 text-14 font-bold text-black active:ring-3 active:ring-grey-3 hover:bg-white">
      {icon}
      <div className="select-none text-14 font-bold text-grey-40 group-hover:text-black">{title}</div>
    </button>
  )
}

export default ButtonCreator
