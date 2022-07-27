import { openLink } from "api/integration/functions"
import { LandingInfluencerInterface } from "libs/interfaces"
import React from "react"

const Influencer = ({ data }: { data: LandingInfluencerInterface }) => {
  return (
    <>
      <button className="w-full" onClick={(e) => openLink(e, data.link)}>
        <div className="center mb-20 w-full">
          <img alt="" className="h-100 w-100 rounded-full" src={data.icon} />
        </div>
        <div className="center mb-8 w-full text-center font-bold text-white">{data.title}</div>
        <div className="center mb-24 w-full">
          <div className="flex h-26 cursor-pointer items-center space-x-[8px] rounded-4 bg-black px-10 text-12 font-bold text-white">
            {data.platform} {data.text}
          </div>
        </div>
      </button>
    </>
  )
}

export default Influencer
