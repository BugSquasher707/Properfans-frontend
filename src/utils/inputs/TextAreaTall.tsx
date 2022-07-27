import { TitleInterface } from "libs/interfaces"
import React from "react"
import TextareaAutosize from "react-textarea-autosize"

const TextAreaTall = ({ data, value, handler }: { data: TitleInterface; value: string; handler: any }) => {
  return (
    <>
      <TextareaAutosize
        className="textarea resize-none font-semibold focus:border-purple"
        placeholder={data.title}
        value={value}
        onChange={(e) => handler(e.target.value)}
      ></TextareaAutosize>
    </>
  )
}

export default TextAreaTall
