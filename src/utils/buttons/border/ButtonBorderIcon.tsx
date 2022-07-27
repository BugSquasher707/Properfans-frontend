import React from "react"

const ButtonBorderIcon = ({ title, icon }: { title: string; icon: JSX.Element }) => {
  return (
    <div
      className={`center h-36 cursor-pointer gap-8 rounded-4 border-1 border-grey-12 bg-white px-26 text-14 font-bold text-black shadow-md active:shadow-none active:ring-3 active:ring-grey-3 hover:bg-grey-5 dark:shadow-none`}
    >
      {icon}
      {title}
    </div>
  )
}

export default ButtonBorderIcon
