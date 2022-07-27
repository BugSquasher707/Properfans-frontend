import { TitleInterface } from "libs/interfaces"
import React from "react"

const InputNumberField = ({
  data,
  value,
  handler,
  onEnter,
  purple
}: {
  data: TitleInterface
  value: number
  handler: (value: any) => void
  onEnter: any
  purple?: boolean
}) => {
  return (
    <>
      <div className="w-full">
        <div className={`mb-12 w-full text-left text-14 ${purple ? "text-white-40 lg:text-grey-40" : "text-grey-40"}`}>
          {data.title}
        </div>
        <input
          className="input h-42 font-semibold shadow-md focus:border-purple dark:shadow-none"
          placeholder={data.title}
          type="number"
          value={isNaN(value) ? "" : value}
          onChange={(e) => handler(parseInt(e.target.value))}
          onKeyUp={(e) => onEnter(e.key)}
        />
      </div>
    </>
  )
}

export default InputNumberField
