import SubscribeSlideTier from "components/subscribe/tiers/SubscribeSlideTier"
import { PeriodType, SubscriptionFeatureType, SubscriptionTierType } from "libs/enums"
import { SubscriptionDetailsInterface, SubscriptionFeatureInterface, TierInterface } from "libs/interfaces"
import React, { useState } from "react"
import { IoMdHeart, IoMdMail } from "react-icons/io"
import { RiFileList3Fill } from "react-icons/ri"

const SubscribeSlideTiers = ({
  period,
  type,
  tiers,
  handler,
  active
}: {
  period: PeriodType
  type?: SubscriptionTierType
  tiers: TierInterface[]
  handler: any
  active?: SubscriptionDetailsInterface
}) => {
  const [features] = useState<SubscriptionFeatureInterface[]>([
    {
      title: "Personal DMs",
      icon: <IoMdMail className="text-18" />,
      type: SubscriptionFeatureType.PersonalDms
    },
    {
      title: "Content",
      icon: <RiFileList3Fill className="text-18" />,
      type: SubscriptionFeatureType.ProperfansContent
    },
    {
      title: "Stories",
      icon: <IoMdHeart className="text-18" />,
      type: SubscriptionFeatureType.SupportCreator
    }
  ])

  return (
    <>
      <div className="relative w-full">
        <div className="w-full rounded-4">
          {tiers && tiers.length > 0 ? (
            <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
              {tiers.map((tier: TierInterface, key: number) => (
                <SubscribeSlideTier
                  key={key}
                  features={features}
                  handler={handler}
                  period={period}
                  tier={tier}
                  type={type}
                  used={active && active.tier === tier.tierLevel ? true : false}
                />
              ))}
            </div>
          ) : (
            <div className="flex h-[150px] w-full items-center justify-center text-center text-14 text-white-40">
              No tiers setup yet on this brand
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default SubscribeSlideTiers
