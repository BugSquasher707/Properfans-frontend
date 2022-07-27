import { influencers } from "libs/data/influencers"
import { LandingInfluencerInterface } from "libs/interfaces"
import React from "react"
import ButtonInfluencer from "utils/buttons/ButtonInfluencer"

const LandingInfluencers = () => {
  return (
    <>
      <div className="flex w-full justify-start">
        <div className="grid grid-cols-4 gap-18">
          {influencers.map((element: LandingInfluencerInterface, key: number) => (
            <ButtonInfluencer key={key} data={element} />
          ))}
        </div>
      </div>
    </>
  )
}

export default LandingInfluencers
