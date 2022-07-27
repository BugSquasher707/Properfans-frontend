import { ReactComponent as Tier1 } from "assets/img/tier_1.svg"
import { ReactComponent as Tier2 } from "assets/img/tier_2.svg"
import { ReactComponent as Tier3 } from "assets/img/tier_3.svg"
import { ReactComponent as Tier4 } from "assets/img/tier_4.svg"
import Wrapper from "components/wrappers/Wrapper"
import { SubscriptionTierType } from "libs/enums"
import { TierInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import NumberFormat from "react-number-format"

const CreatorStatisticsEarning = ({
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
      <div className="-26 h-26">
        {
          {
            [SubscriptionTierType.Tier0]: "",
            [SubscriptionTierType.Tier1]: <Tier1 />,
            [SubscriptionTierType.Tier2]: <Tier2 />,
            [SubscriptionTierType.Tier3]: <Tier3 />,
            [SubscriptionTierType.Tier4]: <Tier4 />
          }[tier.tierLevel]
        }
      </div>
      <div className="mx-12 flex-1 font-bold">
        <div className="mb-2 truncate overflow-ellipsis text-14 leading-4 text-black">{tier.tierName}</div>
        <div className="text-12 leading-normal text-grey-40">
          <span>
            <NumberFormat className="text-12 text-grey-40" displayType={"text"} value={stat.count} thousandSeparator />{" "}
            Properfans
          </span>
        </div>
      </div>
      <div className="ml-auto">
        <span className="text-14 font-bold text-black">
          <NumberFormat
            className="text-14 text-black"
            displayType={"text"}
            prefix={"$"}
            value={stat.total / 100}
            thousandSeparator
          />
        </span>
      </div>
      <Wrapper open={index !== length}>
        <div className="absolute left-10 right-10 bottom-0 border-b-1 border-grey-4 group-hover:border-transparent"></div>
      </Wrapper>
    </div>
  )
}

export default CreatorStatisticsEarning
