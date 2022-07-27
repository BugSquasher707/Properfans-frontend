import Wrapper from "components/wrappers/Wrapper"
import { TitleInterface } from "libs/interfaces"
import React from "react"
import InputTitle from "utils/inputs/InputTitle"

const TextArea = ({
  data,
  value,
  handler,
  grey,
  only
}: {
  data: TitleInterface
  value: string
  handler: any
  grey?: boolean
  only?: boolean
}) => {
  return (
    <>
      <div className="w-full">
        <Wrapper open={!only}>
          <InputTitle data={data} grey={grey} />
        </Wrapper>
        <textarea
          className={`textarea h-120 resize-none font-semibold focus:border-purple dark:shadow-none ${
            grey ? "bg-grey-1" : "shadow-md"
          }`}
          placeholder={data.title}
          value={value ?? ""}
          onChange={(e) => handler(e.target.value)}
        ></textarea>
      </div>
    </>
  )
}

export default TextArea
