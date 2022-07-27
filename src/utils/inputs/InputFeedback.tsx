import { NumberInterface } from "libs/interfaces"
import React from "react"

const InputFeedback = ({ data, purple }: { data: NumberInterface; purple?: boolean }) => {
  const width = data.number > 0 ? `w-${data.number / 20}/5` : "w-0"
  return (
    <>
      <div className="mb-20 flex w-full flex-wrap xl:mb-60">
        <div className="mb-8 h-6 w-full rounded-full bg-grey-6">
          <div className={`${width} h-6 rounded-full bg-green`}></div>
        </div>
        <div className={`w-full text-14 ${purple ? "text-white-40 lg:text-grey-40" : "text-grey-40"}`}>
          <span className={`text-14 font-bold ${purple ? "text-white lg:text-black" : "text-black"}`}>
            Strength - {data.number}%,
          </span>{" "}
          tip: {data.title}
        </div>
      </div>
    </>
  )
}

export default InputFeedback
