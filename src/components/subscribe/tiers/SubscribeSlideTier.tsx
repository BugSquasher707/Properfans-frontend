import { parsePrice, parseTier } from "api/integration/functions"
import SubscribeSlideTierFeature from "components/subscribe/tiers/SubscribeSlideTierFeature"
import Wrapper from "components/wrappers/Wrapper"
import { PeriodType, SubscriptionTierType } from "libs/enums"
import { SubscriptionFeatureInterface, TierInterface } from "libs/interfaces"
import React from "react"
import NumberFormat from "react-number-format"

const SubscribeSlideTier = ({
  tier,
  type,
  handler,
  period,
  features,
  used
}: {
  tier: TierInterface
  type?: SubscriptionTierType
  handler: any
  period: PeriodType
  features: SubscriptionFeatureInterface[]
  used: boolean
}) => {
  return (
    <>
      <div
        className={`group relative w-full cursor-pointer rounded-4 border-1 px-20 pt-16 pb-90 ${
          type === tier.tierLevel ? "border-white bg-white" : "border-white-10"
        }`}
        onClick={() => (used ? null : handler(tier))}
      >
        <div className="mb-24 grid w-full grid-cols-[1fr,auto] items-center gap-10">
          <div className="grid w-full grid-cols-1 gap-2">
            <div className={`w-full text-16 font-bold ${type === tier.tierLevel ? "text-black" : "text-white"}`}>
              Tier {parseTier(tier.tierLevel)}
            </div>
            <div className={`w-full text-14 ${type === tier.tierLevel ? "text-grey-40" : "text-white-40"}`}>
              {tier.tierName}
            </div>
          </div>
          <Wrapper open={used}>
            <div
              className={`relative bottom-auto top-auto left-auto z-10 flex h-28 w-full items-center justify-center gap-4 rounded-4 p-12 text-12 font-bold group-hover:absolute group-hover:bottom-0 group-hover:top-0 group-hover:left-0 group-hover:h-auto group-hover:bg-white-80 group-hover:text-16 group-hover:text-purple ${
                type === tier.tierLevel ? "bg-purple-20 text-purple" : "bg-white text-purple"
              }`}
            >
              Current <span className="hidden group-hover:flex">Subscription</span>
            </div>
          </Wrapper>
          <Wrapper open={type === tier.tierLevel}>
            <div className="z-10 flex h-28 items-center justify-center rounded-4 bg-purple p-12 text-12 font-bold text-white">
              Selected
            </div>
          </Wrapper>
        </div>
        <div className="relative w-full">
          <div className="w-full">
            <div className="grid w-full grid-cols-3 gap-14">
              {features.map((perk: SubscriptionFeatureInterface, ke: number) => (
                <SubscribeSlideTierFeature key={ke} feature={perk} tier={tier} type={type} />
              ))}
            </div>
          </div>
        </div>
        <div className="absolute left-0 bottom-0 w-full px-20 py-10">
          <div className="mb-8 w-full rounded-4 bg-grey-6 px-14 py-8">
            <div
              className={`flex w-full items-center justify-center gap-6 text-14 ${
                type === tier.tierLevel ? "text-grey-40" : "text-white-40"
              }`}
            >
              <span className="text-24 font-bold text-black">
                <NumberFormat
                  className={`text-24 ${type === tier.tierLevel ? "text-black" : "text-white"}`}
                  displayType={"text"}
                  prefix={"$"}
                  value={parsePrice(tier.price, period)}
                  thousandSeparator
                />
              </span>{" "}
              / {PeriodType[period]}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubscribeSlideTier
