import { BooleanInterface } from "libs/interfaces"
import React from "react"

const TermsNavItem = ({ data }: { data: BooleanInterface }) => {
  const classesNormal = "pl-16 w-full text-14 text-left"
  const classesConditional = "group-hover:text-black"

  return (
    <>
      <div className="center group relative mt-8 mb-8 h-34 w-full">
        <div
          className={`absolute top-0 left-0 h-full w-2 ${
            data.active ? "bg-purple" : "bg-grey-10"
          } group-hover:bg-purple`}
        ></div>
        <div className={`${classesNormal} ${data.active ? "text-black" : "text-grey-40"} ${classesConditional}`}>
          {data.title}
        </div>
      </div>
    </>
  )
}

export default TermsNavItem
