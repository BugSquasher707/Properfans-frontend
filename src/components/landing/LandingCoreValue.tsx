import { LandingCoreInterface } from "libs/interfaces"
import React from "react"

const LandingCoreValue = ({ data }: { data: LandingCoreInterface }) => {
  return (
    <>
      <div className="w-full rounded-4 bg-white py-20 px-20 lg:py-40">
        <div className="center mb-10 h-40 w-full lg:mb-20">{data.icon}</div>
        <div className="mb-15 w-full text-center text-14 font-bold text-black lg:mb-30">{data.title}</div>
        <div className="w-full text-center text-14 text-grey-40">{data.text}</div>
      </div>
    </>
  )
}

export default LandingCoreValue
