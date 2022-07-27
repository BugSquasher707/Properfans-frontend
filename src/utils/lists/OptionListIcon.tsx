import { OptionIconInterface } from "libs/interfaces"
import React from "react"
import CheckBox from "utils/checks/CheckBox"

const OptionListIcon = ({
  data,
  active,
  handler
}: {
  data: OptionIconInterface[]
  active: boolean[]
  handler: (key: number) => void
}) => {
  return (
    <>
      <div className="grid w-full grid-cols-2 gap-10">
        {data.map((element: OptionIconInterface, key: number) => (
          <button
            key={key}
            className={`grid w-full grid-cols-1 gap-10 rounded-4 border-1 p-14 sm:p-22 md:gap-16 ${
              active[key] ? "border-purple shadow-md" : "border-grey-12"
            }`}
            onClick={() => {
              handler(key)
            }}
          >
            <div className="flex w-full items-center justify-start space-x-[14px] text-14 font-bold text-black">
              <CheckBox active={active[key]} />
              {element.icon}
            </div>
            <div className="w-full text-left text-12 text-grey-40">{element.text}</div>
          </button>
        ))}
      </div>
    </>
  )
}

export default OptionListIcon
