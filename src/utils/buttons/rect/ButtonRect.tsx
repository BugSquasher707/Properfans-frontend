import React from "react"

const ButtonRect = ({ title, icon, light }: { title: string; icon: JSX.Element; light: boolean }) => {
  return (
    <div
      className={`center h-42 w-full gap-8 rounded-4 border-1 border-grey-12 shadow-sm active:ring-3 ${
        light ? "bg-white active:ring-white-40" : "bg-black active:ring-grey-40"
      }`}
    >
      {icon}
      <div className={`select-none text-14 font-bold ${light ? "text-black" : "text-white"}`}>{title}</div>
    </div>
  )
}

export default ButtonRect
