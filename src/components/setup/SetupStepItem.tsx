import Wrapper from "components/wrappers/Wrapper"
import React from "react"
import { FiCheck } from "react-icons/fi"

const SetupStepItem = ({ last, index, step }: { last: boolean; index: number; step: number }) => {
  return (
    <>
      <div className="flex w-full items-center justify-center space-x-[14px] md:justify-start">
        <div
          className={`center h-24 w-24 flex-none rounded-full ${
            index <= step ? "bg-black" : "border-1 border-grey-20"
          }`}
        >
          {step > index ? <FiCheck className="text-14 text-white" /> : ""}
        </div>
        <div className={`text-14 text-white md:flex-grow ${index === step ? "font-bold" : ""}`}>Step {index}</div>
      </div>
      <Wrapper open={last}>
        <div className="hidden w-full justify-start pl-11 lg:flex">
          <div className="h-20 w-2 rounded-1 bg-white opacity-10"></div>
        </div>
      </Wrapper>
    </>
  )
}

export default SetupStepItem
