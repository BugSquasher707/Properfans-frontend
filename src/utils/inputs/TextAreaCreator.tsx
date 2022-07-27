import React from "react"
import TextareaAutosize from "react-textarea-autosize"

const TextAreaCreator = ({
  max,
  title,
  value,
  handler
}: {
  max: number
  title: string
  value: string
  handler: any
}) => {
  return (
    <>
      <div className="relative grid w-full grid-cols-1 items-center rounded-4 border-1 border-grey-10 bg-grey-1 p-16">
        <TextareaAutosize
          className="placeholder-grey-40::placeholder h-42 max-h-[250px] min-h-[100px] min-w-full max-w-full pr-16 text-14 font-bold text-black"
          placeholder={title}
          value={value ?? ""}
          onChange={(e) => handler(e.target.value.slice(0, max))}
        ></TextareaAutosize>
      </div>
    </>
  )
}

export default TextAreaCreator
