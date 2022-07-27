import LandingTeamMember from "components/landing/LandingTeamMember"
import { team } from "libs/data/team.json"
import { TeamInterface } from "libs/interfaces"
import React from "react"

const LandingTeam = () => {
  return (
    <>
      <div className="mb-30 grid w-full grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-24 md:grid-cols-3 lg:mb-50 xl:mb-100 xl:grid-cols-4">
        {team.map((element: TeamInterface, key: number) => (
          <LandingTeamMember key={key} data={element} />
        ))}
      </div>
    </>
  )
}

export default LandingTeam
