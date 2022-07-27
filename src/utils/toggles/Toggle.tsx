import React from "react"

const Toggle = ({ value, handler }: { value: boolean; handler: any }) => {
  return (
    <button
      className={`relative h-22 w-40 rounded-[11px] transition ${value ? "bg-purple" : "bg-grey-12"}`}
      onClick={() => handler(!value)}
    >
      <div
        className={`absolute top-3 left-[50%] h-16 w-16 transform rounded-full border-1 border-grey-12 bg-white shadow-md transition ${
          value ? "translate-x-[1px]" : "translate-x-[-17px]"
        }`}
      ></div>
    </button>
  )
}

export default Toggle
