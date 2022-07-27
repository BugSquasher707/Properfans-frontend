import { parseGain } from "api/integration/functions"
import CreatorStatisticsBox from "components/creator/statistics/bottom/CreatorStatisticsBox"
import React from "react"

const CreatorStatisticsBottomFans = ({ stats }: { stats: any }) => {
  return (
    <>
      <CreatorStatisticsBox
        description="During this month"
        gain={parseGain(stats.fans.gain) ?? 0}
        label="New fans"
        prefix={""}
        value={stats.fans.thisMonth ?? 0}
      />
      <CreatorStatisticsBox
        description="During this month"
        gain={parseGain(stats.subscriptions.gain) ?? 0}
        label="New subscriptions"
        prefix={""}
        value={stats.subscriptions.allSubs ?? 0}
      />
      <CreatorStatisticsBox
        description="During this month"
        gain={parseGain(stats.subscriptions.gain) ?? 0}
        label="New subscription earnings"
        prefix={"$"}
        value={stats.subscriptions.thisMonth / 100 ?? 0}
      />
      <CreatorStatisticsBox
        description="During this month"
        gain={parseGain(stats.donations.gain) ?? 0}
        label="New donations"
        prefix={"$"}
        value={stats.donations.thisMonth / 100 ?? 0}
      />
    </>
  )
}

export default CreatorStatisticsBottomFans
