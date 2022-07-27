import CreatorStatisticsTier from "components/creator/statistics/CreatorStatisticsTier"
import { TierInterface } from "libs/interfaces"
import React from "react"

const StatisticsTiersOverview = ({ stats, tiers }: { stats: any; tiers: TierInterface[] }) => {
  return (
    <>
      {tiers && tiers.length > 0 ? (
        <div className="-my-12">
          {tiers.map((tier: TierInterface, key: number) => (
            <CreatorStatisticsTier key={key} index={key} length={tiers.length} stats={stats} tier={tier} />
          ))}
        </div>
      ) : (
        <div className="w-full text-14 text-grey-40">No tiers created yet</div>
      )}
    </>
  )
}

export default StatisticsTiersOverview
