import { TitleInterface } from "libs/interfaces"
import React from "react"

const InputTitle = ({ data, grey, purple }: { data: TitleInterface; grey?: boolean; purple?: boolean }) => {
  return (
    <>
      <div
        className={`mb-12 w-full text-left ${purple ? "text-white-40 lg:text-grey-40" : "text-grey-40"} ${
          grey ? "text-12 font-bold" : "text-14"
        }`}
      >
        {data.title}
      </div>
    </>
  )
}

export default InputTitle
