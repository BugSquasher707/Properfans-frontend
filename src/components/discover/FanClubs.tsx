import FanClubCard from "components/discover/FanClubCard"
import { URL } from "libs/constants"
import { CreatorFanInterface } from "libs/interfaces"
import React from "react"
import { useHistory } from "react-router-dom"

const FanClubsSection = ({ clubs, value }: { clubs: CreatorFanInterface[], value: string }) => {
  const history = useHistory()

  return (
    <div>
      <h2 className="mt-0 mb-4 text-24 font-black text-black">Clubs</h2>
      <p className="font-14 mt-0 mb-30 text-grey-40">We think you might like</p>
      <div className="mb-20 grid w-full grid-cols-1 gap-12 lg:grid-cols-3">
        {clubs.map((club) => (
          <FanClubCard key={club.id} club={club} selectedCategory={value} />
        ))}
      </div>
      <div
        className="mb-50 w-full cursor-pointer rounded-4 bg-grey-3 py-6 text-center text-12 font-bold leading-normal text-grey-40"
        onClick={() => history.push(URL.FAN.DISCOVER.CLUBS)}
      >
        Show more clubs
      </div>
    </div>
  )
}

export default FanClubsSection
