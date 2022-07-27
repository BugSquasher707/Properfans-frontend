import { DropdownInterface } from "libs/interfaces"
import React from "react"

const InputDropdownItem = ({ data, handler }: { data: DropdownInterface; handler: any }) => {
  return (
    <>
      <button
        className="my-2 flex w-full items-center rounded-4 px-14 py-10 hover:bg-grey-6"
        onClick={() => handler(data.link)}
      >
        {data.icon ? <div className="mr-10 flex w-16 items-center text-grey-20">{data.icon}</div> : ""}
        <div className="text-left text-14 font-bold text-black">{data.title}</div>
      </button>
    </>
  )
}

export default InputDropdownItem
