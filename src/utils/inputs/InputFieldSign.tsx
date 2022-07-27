import { TitleInterface } from "libs/interfaces"
import React from "react"

const InputFieldSign = ({
  data,
  value,
  handler,
  sign
}: {
  data: TitleInterface
  value: number
  handler: (value: string) => void
  sign: string
}) => {
  return (
    <>
      <div className="w-full">
        <div className="mb-12 w-full text-left text-14 text-grey-40">{data.title}</div>
        <div className="relative w-full">
          <input
            className="input h-42 !pr-42 font-semibold focus:border-purple"
            placeholder={data.title}
            value={value ? value : ""}
            onChange={(e) => handler(e.target.value)}
          />
          <div className="absolute right-16 top-10 flex h-22 w-40 cursor-pointer items-center justify-center rounded-2 bg-purple-20 text-12 font-bold text-purple">
            {sign}
          </div>
        </div>
      </div>
    </>
  )
}

export default InputFieldSign
