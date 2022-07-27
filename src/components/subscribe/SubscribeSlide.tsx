import { statusApi } from "api/endpoints/status"
import SubscribeSlidePayment from "components/subscribe/slides/SubscribeSlidePayment"
import SubscribeSlideTiers from "components/subscribe/slides/SubscribeSlideTiers"
import { useProps } from "contexts/PropsContext"
import { PeriodType, SubscriptionPaymentType, SubscriptionSlideType } from "libs/enums"
import { SubscriptionDetailsInterface, SubscriptionSlideInterface, TierInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"

const SubscribeSlide = ({
  param,
  slide,
  period,
  payment,
  tier,
  active,
  handlers
}: {
  param: string
  slide: SubscriptionSlideInterface
  period: PeriodType
  payment: SubscriptionPaymentType
  tier?: TierInterface
  active?: SubscriptionDetailsInterface
  handlers: any
}) => {
  const { token } = useProps()

  const [tiers, setTiers] = useState<TierInterface[]>([])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  useEffect(() => {
    const tiersAvailable = active ? tiers.filter((entry: TierInterface) => entry.tierLevel !== active.tier) : tiers

    if (tiersAvailable && tiersAvailable.length > 0) {
      handlers.setTier(tiersAvailable[0])
    }
  }, [tiers])

  const onLoad = async () => {
    console.log(param, token)

    const result = await statusApi()

    if (mounted) {
      setTiers(result && result.length > 0 ? result : [])
    }
  }

  return (
    <>
      <div className="flex w-full flex-wrap">
        <div className="mb-12 w-full text-center text-24 font-bold text-white md:mb-20 md:text-32">{slide.title}</div>
        <div className="center flex w-full">
          <div className="mb-20 w-520 max-w-full text-center text-14 text-white-40 md:mb-40">{slide.text}</div>
        </div>
        <div className="flex w-full flex-wrap items-start justify-center">
          {
            {
              [SubscriptionSlideType.Tier]: (
                <SubscribeSlideTiers
                  active={active}
                  handler={handlers.setTier}
                  period={period}
                  tiers={tiers}
                  type={tier ? tier.tierLevel : undefined}
                />
              ),
              [SubscriptionSlideType.Payment]: (
                <>
                  {tier ? (
                    <SubscribeSlidePayment handler={handlers.setPayment} period={period} tier={tier} value={payment} />
                  ) : (
                    ""
                  )}
                </>
              ),
              [SubscriptionSlideType.Completed]: ""
            }[slide.type]
          }
        </div>
      </div>
    </>
  )
}

export default SubscribeSlide
