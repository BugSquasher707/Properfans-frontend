import React from "react"

const ButtonBorderSmall = ({ title }: { title: string }) => {
  return (
    <button className="center h-36 w-full select-none rounded-4 border-1 border-white-40 px-14 text-14 font-bold text-white shadow-md active:ring-3 active:ring-grey-3 dark:shadow-none">
      {title}
    </button>
  )
}

export default ButtonBorderSmall
