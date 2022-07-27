import { openLink } from "api/integration/functions"
import { LandingInfluencerInterface } from "libs/interfaces"
import React from "react"

const ButtonInfluencer = ({ data }: { data: LandingInfluencerInterface }) => {
  return (
    <button className="group relative h-42 w-42" onClick={(e) => openLink(e, data.link)}>
      <img alt="" className="w-full rounded-full" src={data.icon} />
      <div className="absolute top-50 left-0 z-10 hidden gap-12 rounded-4 border-1 border-grey-12 bg-white px-16 py-12 shadow-md group-hover:grid dark:shadow-none">
        <div className="w-full text-left text-14 font-bold text-black">{data.title}</div>
        <div className="flex w-full items-center justify-center space-x-[10px]">
          {data.platform}
          <div className="w-max text-14 text-grey-40">{data.text}</div>
        </div>
      </div>
    </button>
  )
}

export default ButtonInfluencer
