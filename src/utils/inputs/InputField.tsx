import { TitleInterface } from "libs/interfaces"
import React, { useState } from "react"
import InputTitle from "utils/inputs/InputTitle"

const InputField = ({
  data,
  value,
  handler,
  enter,
  grey,
  purple
}: {
  data: TitleInterface
  value?: string
  handler: (value: string) => void
  enter?: any
  grey?: boolean
  purple?: boolean
}) => {
  const [focus, setFocus] = useState(false)

  return (
    <>
      <div className="w-full">
        <InputTitle data={data} grey={grey} purple={purple} />
        <div
          className={`flex h-46 w-full items-center rounded-12 border-2 px-16 ${
            focus ? "ring-6 border-purple ring ring-purple-10" : "border-grey-6"
          }`}
        >
          <input
            className="w-full text-16 font-semibold text-black placeholder-grey-40"
            placeholder={data.title}
            type="text"
            value={value ?? ""}
            onBlur={() => setFocus(false)}
            onChange={(e) => handler(e.target.value)}
            onFocus={() => setFocus(true)}
            onKeyUp={(e) => (enter ? enter(e.key) : "")}
          />
        </div>
      </div>
    </>
  )
}

export default InputField
