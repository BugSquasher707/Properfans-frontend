import { TitleInterface } from "libs/interfaces"
import React from "react"
import { FiCheck } from "react-icons/fi"
import { RiArrowRightSLine } from "react-icons/ri"

const Step = ({ step, item, index, length }: { step: number; item: TitleInterface; index: number; length: number }) => {
  return (
    <>
      <div className="flex flex-wrap items-center space-y-[10px] md:space-y-0 md:space-x-[10px]">
        <div className="flex w-full justify-center md:w-auto">
          <div
            className={`flex h-24 w-24 items-center justify-center rounded-full text-12 ${
              index + 1 <= step ? "bg-purple text-white" : "border-1 border-grey-10 text-grey-40"
            }`}
          >
            {index + 1 < step ? <FiCheck /> : index + 1}
          </div>
        </div>
        <div
          className={`hidden w-full justify-center text-14 sm:flex md:hidden md:w-auto lg:flex ${
            index + 1 === step ? "font-bold text-purple" : "text-black"
          }`}
        >
          {item.title}
        </div>
      </div>
      {index < length - 1 ? <RiArrowRightSLine className="text-grey-10" /> : ""}
    </>
  )
}

export default Step
