import { TitleInterface } from "libs/interfaces"
import React from "react"

const LandingTimeLine = ({ data }: { data: TitleInterface }) => {
  return (
    <>
      <div className="grid w-full gap-18">
        <div className="center relative h-28 w-28">
          <div className="absolute top-0 left-0 h-28 w-28 rounded-full bg-purple opacity-10"></div>
          <div className="h-16 w-16 rounded-full bg-purple"></div>
        </div>
        <div className="grid w-full gap-10">
          <div className="w-full text-14 font-bold text-black">{data.title}</div>
          <div className="w-full text-14 text-grey-40">{data.text}</div>
        </div>
      </div>
    </>
  )
}

export default LandingTimeLine
