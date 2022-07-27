import { statusApi } from "api/endpoints/status"
import MeetOrdered from "components/meet/elements/MeetOrdered"
import MeetOrderCall from "components/meet/order/MeetOrderCall"
import MeetOrderSummary from "components/meet/order/MeetOrderSummary"
import MeetOrderVideoGreeting from "components/meet/order/MeetOrderVideoGreeting"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { MeetProductType, MeetPurposesType, OverlayType } from "libs/enums"
import { MeetPurposesInterface, ProfileBrandInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import BackTo from "utils/buttons/back/BackTo"
import LoadingData from "utils/elements/LoadingData"
import ProfileUser from "utils/profile/ProfileUser"
import MeetBanner from "views/meet/MeetBanner"

interface Params {
  param: string
}

const MeetOrder = ({ type }: { type: MeetProductType }) => {
  const { token, setOverlay } = useProps()

  const { param } = useParams<Params>()

  const [profile, setProfile] = useState<ProfileBrandInterface>()

  const [price, setPrice] = useState(0)
  const [purposes, setPurposes] = useState<MeetPurposesInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    console.log(token, param)

    const result = await statusApi()

    if (result) {
      setProfile(result)

      setPrice(24.99)

      setPurposes([
        { type: MeetPurposesType.Commercial, price: 249.99, selected: false },
        { type: MeetPurposesType.Replay, price: 9.99, selected: false }
      ])
    } else {
      setOverlay(OverlayType.NotFound)
    }
  }

  return (
    <>
      {profile ? (
        <div className="feed meet full grid w-full grid-cols-1 overflow-y-auto">
          <div className="flex w-full justify-center">
            <div className="w-full max-w-full lg:w-[830px]">
              <div className="relative mb-0 w-full px-12 pt-12 sm:mb-30 sm:px-40 sm:pt-60 md:mb-40 md:px-60 lg:px-[96px] lg:pt-[96px]">
                <MeetBanner banner={profile.banner} full />
                <div className="absolute top-0 left-0 z-10 flex w-full items-center  justify-between px-12 pt-12 sm:px-20 sm:pt-20">
                  <BackTo link={URL.MEET.PROFILE.replace(":param", profile.handle)} title={"Profile"} />
                  <div className="flex items-center justify-start space-x-[8px] text-14 font-bold text-grey-40">
                    Ordering <MeetOrdered type={type} />
                  </div>
                </div>
                <div className="relative w-full pt-50 sm:pt-0">
                  <ProfileUser
                    avatar={profile.avatar}
                    tag={profile.handle}
                    username={profile.userName}
                    verified={profile.verified}
                  />
                </div>
              </div>
              <div className="w-full px-12 lg:px-0">
                {
                  {
                    [MeetProductType.AudioCall]: (
                      <MeetOrderCall
                        handlerPurposes={setPurposes}
                        price={price}
                        profile={profile}
                        purposes={purposes}
                        type={MeetProductType.AudioCall}
                      />
                    ),
                    [MeetProductType.VideoCall]: (
                      <MeetOrderCall
                        handlerPurposes={setPurposes}
                        price={price}
                        profile={profile}
                        purposes={purposes}
                        type={MeetProductType.VideoCall}
                      />
                    ),
                    [MeetProductType.VideoGreeting]: (
                      <MeetOrderVideoGreeting handlerPurposes={setPurposes} price={price} purposes={purposes} />
                    )
                  }[type]
                }
              </div>
            </div>
          </div>
          {profile ? <MeetOrderSummary price={price} profile={profile} purposes={purposes} type={type} /> : ""}
        </div>
      ) : (
        <LoadingData title={"Loading brand"} />
      )}
    </>
  )
}

export default MeetOrder
