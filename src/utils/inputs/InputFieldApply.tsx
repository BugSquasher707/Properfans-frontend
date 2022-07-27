import { TitleInterface } from "libs/interfaces"
import React from "react"

const InputFieldApply = ({
  data,
  value,
  applied,
  handler,
  button,
  remove
}: {
  data: TitleInterface
  value: string
  applied: boolean
  handler: (value: string) => void
  button: () => void
  remove: () => void
}) => {
  const applyCoupon = (key: string) => {
    if (key === "Enter") {
      button()
    }
  }

  return (
    <>
      <div className="relative w-full">
        <input
          className="input h-42 font-semibold placeholder:!pr-[66px] focus:border-purple"
          placeholder={data.title}
          value={value}
          onChange={(e) => handler(e.target.value)}
          onKeyUp={(e) => applyCoupon(e.key)}
        />
        {applied ? (
          <button
            className="center absolute right-0 top-0 h-42 px-14 text-14 font-bold text-grey-40 hover:text-black"
            onClick={remove}
          >
            Remove
          </button>
        ) : (
          <button className="center absolute right-0 top-0 h-42 px-14 text-14 font-bold text-purple" onClick={button}>
            Apply
          </button>
        )}
      </div>
    </>
  )
}

export default InputFieldApply
