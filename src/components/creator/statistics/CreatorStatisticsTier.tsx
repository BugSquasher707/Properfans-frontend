import { parseGain } from "api/integration/functions"
import { ReactComponent as Tier1 } from "assets/img/tier_1.svg"
import { ReactComponent as Tier2 } from "assets/img/tier_2.svg"
import { ReactComponent as Tier3 } from "assets/img/tier_3.svg"
import { ReactComponent as Tier4 } from "assets/img/tier_4.svg"
import CreatorStatisticsGrowth from "components/creator/statistics/elements/CreatorStatisticsGrowth"
import Wrapper from "components/wrappers/Wrapper"
import { SubscriptionTierType } from "libs/enums"
import { TierInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"

const StatisticsTier = ({
  tier,
  index,
  length,
  stats
}: {
  tier: TierInterface
  index: number
  length: number
  stats: any
}) => {
  const [stat, setStat] = useState({ gain: 0, count: 0, total: 0 })

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    if (stats && stats.subscription && stats.subscriptions.sumPerTier && stats.subscriptions.gainPerTier) {
      const newStat = stats.subscriptions.sumPerTier.filter((entry: any) => entry.id === tier.tierLevel)
      const newGain = stats.subscriptions.gainPerTier.filter((entry: any) => entry.id === tier.tierLevel)

      if (newStat && newStat.length > 0 && newGain && newGain.length > 0) {
        setStat({
          gain: newGain[0].gain,
          count: newStat[0].count,
          total: newGain[0].total
        })
      }
    }
  }

  return (
    <div className="group relative -mx-12 flex h-60 cursor-pointer items-center rounded-4 bg-white px-12 hover:bg-grey-6">
      <span className="mr-14 h-26">
        {
          {
            [SubscriptionTierType.Tier0]: "",
            [SubscriptionTierType.Tier1]: <Tier1 />,
            [SubscriptionTierType.Tier2]: <Tier2 />,
            [SubscriptionTierType.Tier3]: <Tier3 />,
            [SubscriptionTierType.Tier4]: <Tier4 className="h-26 w-26" />
          }[tier.tierLevel]
        }
      </span>

      <div className="mr-20 font-bold">
        <div className="mb-2 truncate overflow-ellipsis text-14 leading-4 text-black">{tier.tierName}</div>
        <div className="text-12 leading-normal text-grey-40">Tier {tier.tierLevel}</div>
      </div>
      {stat ? (
        <>
          <CreatorStatisticsGrowth growth={parseGain(stat.gain) ?? 0} />
          <div className="ml-auto text-12 font-bold leading-normal text-grey-40">{stat.count} subscribers</div>
        </>
      ) : (
        ""
      )}
      <Wrapper open={index !== length - 1}>
        <div className="absolute left-10 right-10 bottom-0 border-b-1 border-grey-4 group-hover:border-transparent"></div>
      </Wrapper>
    </div>
  )
}

export default StatisticsTier
