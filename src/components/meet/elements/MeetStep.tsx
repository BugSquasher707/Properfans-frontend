import Wrapper from "components/wrappers/Wrapper"
import React from "react"
import { AiFillCaretRight } from "react-icons/ai"

const MeetStep = ({
  index,
  title,
  required,
  text
}: {
  index: number
  title: string
  required: boolean
  text: string
}) => {
  return (
    <>
      <div className="mb-20 grid w-full grid-cols-1 gap-24 sm:mb-40">
        <div className="grid w-full grid-cols-[auto,1fr] gap-16">
          <AiFillCaretRight className="ml-[-8px] text-32 text-grey-6" />
          <div className="grid w-full grid-cols-1 gap-4">
            <div className="w-full text-12 font-bold text-purple">STEP {index}</div>
            <div className="w-full text-14 font-bold text-black">
              {title}{" "}
              <Wrapper open={!required}>
                <span className="text-14 font-bold text-grey-40">(optional)</span>
              </Wrapper>
            </div>
          </div>
        </div>
        <Wrapper open={text}>
          <div className="w-full text-14 text-grey-40">{text}</div>
        </Wrapper>
      </div>
    </>
  )
}

export default MeetStep
