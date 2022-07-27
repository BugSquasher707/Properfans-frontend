import { TitleInterface } from "libs/interfaces"
import React, { useState } from "react"
import { FaEye } from "react-icons/fa"

const InputPasswordField = ({
  data,
  value,
  handler,
  onEnter,
  purple
}: {
  data: TitleInterface
  value: string
  handler: (value: string) => void
  onEnter: any
  purple?: boolean
}) => {
  const [type, setType] = useState(0)

  const toggleType = () => {
    setType(type === 0 ? 1 : 0)
  }

  return (
    <>
      <div className="w-full">
        <div className={`mb-12 w-full text-left text-14 ${purple ? "text-white-40 lg:text-grey-40" : "text-grey-40"}`}>
          {data.title}
        </div>
        <div className="relative w-full rounded-4 shadow-md dark:shadow-none">
          <input
            className="input h-42 placeholder:pr-42 focus:border-purple "
            placeholder={data.title}
            type={type === 0 ? "password" : "text"}
            value={value}
            onChange={(e) => handler(e.target.value.replace(" ", ""))}
            onKeyUp={(e) => (onEnter ? onEnter(e.key) : null)}
          />
          <div className="group absolute right-0 top-0 flex h-42 w-42 items-center justify-center">
            <button
              className="center h-36 w-36 rounded-4 opacity-20  group-hover:opacity-100 hover:bg-grey-4"
              onClick={toggleType}
            >
              <FaEye className="text-black" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default InputPasswordField
