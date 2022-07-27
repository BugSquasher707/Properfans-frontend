import React from "react"

const ButtonBorderIconEnd = ({ title, icon }: { title: string; icon: JSX.Element }) => {
  return (
    <div
      className={`center h-42 cursor-pointer gap-8 rounded-4 border-1 border-grey-12 bg-white px-26 text-14 font-bold text-black shadow-md active:bg-white-40 active:shadow-none active:ring-3 active:ring-grey-3 hover:bg-white-80`}
    >
      {title}
      {icon}
    </div>
  )
}

export default ButtonBorderIconEnd
