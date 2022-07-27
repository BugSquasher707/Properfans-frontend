import { statusApi } from "api/endpoints/status"
import { parseError } from "api/integration/errors"
import { openUrlExtern } from "api/integration/functions"
import { toastError } from "api/integration/toaster"
import axios from "axios"
import ModalProperPay from "components/modals/properpay/ModalProperPay"
import SubscribeButtons from "components/subscribe/SubscribeButtons"
import SubscribeProfile from "components/subscribe/SubscribeProfile"
import SubscribeSlide from "components/subscribe/SubscribeSlide"
import SubscribeSteps from "components/subscribe/SubscribeSteps"
import WrapperSubscription from "components/wrappers/WrapperSubscription"
import { useProps } from "contexts/PropsContext"
import { REQ, URL } from "libs/constants"
import { PeriodType, SubscriptionPaymentType, SubscriptionSlideType } from "libs/enums"
import { ParameterInterface, ProfileBrandInterface, SubscriptionDetailsInterface, TierInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import LoadingData from "utils/elements/LoadingData"

const Subscribe = () => {
  const { param } = useParams<ParameterInterface>()

  const history = useHistory()

  const { authenticated, path, token } = useProps()

  const [period, setPeriod] = useState(PeriodType.Monthly)
  const [tier, setTier] = useState<TierInterface>()
  const [payment, setPayment] = useState(SubscriptionPaymentType.Stripe)
  const [active, setActive] = useState<SubscriptionDetailsInterface>()

  const [openProperpay, setOpenProperpay] = useState(false)

  const [profile, setProfile] = useState<ProfileBrandInterface>()

  const [step, setStep] = useState(1)
  const [count] = useState(3)

  const [slides] = useState([
    {
      title: "Subscription tier",
      text: "How much do you want to support the creator?",
      type: SubscriptionSlideType.Tier
    },
    {
      title: "Paying for subscription",
      text: "The selected subscription tier Starter can be purchased by selecting your preferred payment method",
      type: SubscriptionSlideType.Payment
    },
    {
      title: "Enjoy your subscription to Shroud!",
      text: "You successfully purchased your subscription",
      type: SubscriptionSlideType.Completed
    }
  ])

  const [slide, setSlide] = useState(slides[step - 1])
  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setSlide(slides[step - 1])
  }, [step])

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [path])

  const onLoad = async () => {
    if (param) {
      console.log(authenticated, token)

      const resultSubscription = await statusApi()

      if (mounted && resultSubscription && resultSubscription.subbed && resultSubscription.subscription) {
        setActive(resultSubscription.subscription)
      }

      const resultBrand = await statusApi()

      if (mounted && resultBrand) {
        setProfile(resultBrand)
      }
    }
  }

  const stepUp = () => {
    if (slide.type === SubscriptionSlideType.Tier && !tier) {
      toastError("Select a tier")
      return
    }

    setStep(step + 1)
  }

  const stepDown = () => {
    setStep(step - 1)
  }

  const paymentProcess = () => {
    switch (payment) {
      case SubscriptionPaymentType.Properfans:
        setOpenProperpay(true)
        break
      case SubscriptionPaymentType.Stripe:
        paymentStripe()
        break
      case SubscriptionPaymentType.Vipps:
        break
    }
  }

  const onPayment = () => {
    if (active) {
      onSubscriptionChange()
    } else {
      paymentProcess()
    }
  }

  const paymentStripe = async () => {
    if (!(profile && profile.id && tier && tier.priceId && tier.tierLevel && tier.price)) {
      toastError("Complete the subscription form")
      return
    }

    const result = await statusApi()

    if (result) {
      openUrlExtern(result.url)
    }
  }

  const onSubscriptionChange = async () => {
    if (!(active && tier && tier.tierLevel)) {
      toastError("Complete the subscription form")
      return
    }

    const url = active.tier > tier.tierLevel ? REQ.STATUS : REQ.STATUS

    const result = await axios({
      url: url,
      method: "post",
      data: { id: active.id, tier: tier.tierLevel },
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res: any) => res.data)
      .catch((error) => {
        parseError(error)
      })

    if (result) {
      history.push(URL.SUBSCRIBE.SUCCESS.replace(":param", param))
    }
  }

  return (
    <>
      <WrapperSubscription>
        {profile ? (
          <>
            <div className="w-full">
              <div className="pag buttons flex w-full justify-center">
                <div className="mt-0 flex w-full max-w-screen-xl flex-wrap lg:mt-20">
                  <div className="grid w-full grid-cols-1 gap-20 lg:gap-40 xl:grid-cols-[1fr,auto]">
                    <div className="row-start-2 grid w-full grid-cols-1 items-start gap-40 xl:row-start-1">
                      <div className="flex w-full flex-wrap items-start">
                        <div className="mb-40 w-full">
                          <SubscribeSteps count={count} handler={setStep} step={step} />
                        </div>
                        <SubscribeSlide
                          active={active}
                          handlers={{ setPeriod, setTier, setPayment }}
                          param={param}
                          payment={payment}
                          period={period}
                          slide={slide}
                          tier={tier}
                        />
                      </div>
                    </div>
                    <div className="stick xl row-start-1 w-full xl:w-[350px]">
                      <SubscribeProfile profile={profile} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="buttons p-side fixed bottom-0 left-0 z-20 flex h-[120px] w-full items-center justify-center bg-purple sm:h-80">
                <div className="flex w-full max-w-screen-xl justify-center lg:justify-end">
                  <div className="flex w-full flex-col-reverse flex-wrap gap-10 sm:w-[410px] sm:flex-row sm:flex-nowrap">
                    <SubscribeButtons handlers={{ stepDown, stepUp, onPayment }} type={slide.type} />
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="relative flex h-screen w-full items-center justify-center p-20">
            <LoadingData light={true} title={"Loading brand"} />
          </div>
        )}
      </WrapperSubscription>
      <ModalProperPay handler={setOpenProperpay} open={openProperpay} tier={tier} />
    </>
  )
}

export default Subscribe
