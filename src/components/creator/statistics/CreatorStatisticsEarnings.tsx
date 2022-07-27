import CreatorStatisticsEarning from "components/creator/statistics/CreatorStatisticsEarning"
import { TierInterface } from "libs/interfaces"
import React from "react"

const CreatorStatisticsEarnings = ({ tiers, stats }: { tiers: TierInterface[]; stats: any }) => {
  return (
    <div className="-my-12">
      {tiers.map((tier: TierInterface, key: number) => (
        <CreatorStatisticsEarning key={key} index={key} length={tiers.length} stats={stats} tier={tier} />
      ))}
    </div>
  )
}

export default CreatorStatisticsEarnings
