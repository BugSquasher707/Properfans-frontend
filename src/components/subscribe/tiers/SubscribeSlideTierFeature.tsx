import { SubscriptionTierType } from "libs/enums"
import { SubscriptionFeatureInterface, TierInterface } from "libs/interfaces"
import React from "react"

const SubscribeSlideTierFeature = ({
  tier,
  type,
  feature
}: {
  tier: TierInterface
  type?: SubscriptionTierType
  feature: SubscriptionFeatureInterface
}) => {
  return (
    <>
      {type ? (
        <div className="group grid w-full grid-cols-1 items-start gap-10">
          <div className="flex w-full flex-wrap items-start">
            <div className="mb-10 flex w-full items-center justify-center">
              <div
                className={`flex h-42 w-42 items-center justify-center rounded-full ${
                  type === tier.tierLevel
                    ? "bg-purple-20 odd:fill-current odd:text-purple"
                    : "bg-white-10 odd:fill-current odd:text-white-40"
                }`}
              >
                {feature.icon}
              </div>
            </div>
            <div className={`w-full text-center text-12 ${type === tier.tierLevel ? "text-black" : "text-white"}`}>
              {feature.title} <br /> Tier {tier.tierLevel}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default SubscribeSlideTierFeature
