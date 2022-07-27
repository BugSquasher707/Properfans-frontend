import { statusApi } from "api/endpoints/status"
import { parseTier } from "api/integration/functions"
import SubscribeSlideComplete from "components/subscribe/slides/SubscribeSlideComplete"
import WrapperSubscription from "components/wrappers/WrapperSubscription"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { ParameterInterface, ProfileBrandInterface, TierInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import CheckBlack from "utils/elements/CheckBlack"
import LoadingData from "utils/elements/LoadingData"

const SubscribeSuccess = () => {
  const { param } = useParams<ParameterInterface>()

  const { path } = useProps()

  const [tier, setTier] = useState<TierInterface>()
  const [profile, setProfile] = useState<ProfileBrandInterface>()

  const history = useHistory()

  useEffect(() => {
    onLoad()
  }, [path])

  const onLoad = async () => {
    if (param) {
      const result = await statusApi()

      if (!result || !result.subbed) {
        history.push(URL.BRANDS.BASE.replace(":param", param))
      } else {
        const resultBrand = await statusApi()

        if (resultBrand) {
          setProfile(resultBrand)
          setTier(result.subscription)
        }
      }
    }
  }

  return (
    <>
      <WrapperSubscription>
        {profile ? (
          <>
            <div className="pag tall flex w-full items-start justify-center">
              <div className="mt-0 flex w-[600px] max-w-full flex-wrap lg:mt-20">
                <div className="mb-20 flex w-full items-center justify-center md:mb-30">
                  <CheckBlack />
                </div>
                <div className="mb-12 w-full text-center text-24 font-bold text-white md:mb-20 md:text-32">
                  Enjoy your subscription to {profile.userName}!
                </div>
                <div className="center flex w-full">
                  <div className="mb-20 w-520 max-w-full text-center text-14 text-white-40 md:mb-40">
                    You successfully purchased a{" "}
                    <span className="font-bold text-white">Tier {tier ? parseTier(tier.tierLevel) : "1"}</span>{" "}
                    subscription which will be billed monthly
                  </div>
                </div>
                <div className="flex w-full flex-wrap items-start justify-center">
                  <SubscribeSlideComplete profile={profile} />
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
    </>
  )
}

export default SubscribeSuccess
