import { statusApi } from "api/endpoints/status"
import MeetAvatar from "components/meet/elements/MeetAvatar"
import MeetStats from "components/meet/elements/MeetStats"
import MeetPages from "components/meet/product/MeetPages"
import MeetProductDetails from "components/meet/product/MeetProductDetails"
import MeetReviews from "components/meet/product/MeetReviews"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { MeetProductType, OverlayType } from "libs/enums"
import { ProfileBrandInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"
import BackTo from "utils/buttons/back/BackTo"
import MeetBanner from "views/meet/MeetBanner"

interface Params {
  param: string
}

const MeetProduct = ({ type }: { type: MeetProductType }) => {
  const { authenticated, token, setOverlay } = useProps()

  const { param } = useParams<Params>()

  const [profile, setProfile] = useState<ProfileBrandInterface>()

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    console.log(param, token, authenticated)

    const result = await statusApi()

    if (result) {
      setProfile(result)
    } else {
      setOverlay(OverlayType.NotFound)
    }
  }

  return (
    <>
      {profile ? (
        <div className="feed meet flex w-full justify-center overflow-y-auto">
          <div className="w-full max-w-full lg:w-[830px]">
            <div className="relative mb-40 w-full px-[96px] pt-[96px]">
              <MeetBanner banner={profile.banner} full />
              <div className="absolute top-0 left-0 flex w-full items-center justify-between px-20 pt-20">
                <BackTo link={URL.MEET.PROFILE.replace(":param", profile.handle)} title={"Profile"} />
                <MeetPages profile={profile} type={type} />
              </div>
              <MeetAvatar icon={profile.avatar} />
            </div>
            <div className="mb-20 w-full px-12 sm:mb-40 lg:px-0">
              <MeetStats />
            </div>
            <div className="mb-20 w-full px-12 sm:mb-30 md:mb-40 lg:mb-90 lg:px-0">
              {
                {
                  [MeetProductType.AudioCall]: (
                    <div className="w-full">
                      <MeetProductDetails profile={profile} type={MeetProductType.AudioCall} />
                      <div className="my-30 w-full border-b-1 border-grey-6 sm:my-40 md:my-50 lg:mt-50 lg:mb-100"></div>
                      <MeetProductDetails profile={profile} type={MeetProductType.VideoCall} />
                    </div>
                  ),
                  [MeetProductType.VideoCall]: "",
                  [MeetProductType.VideoGreeting]: (
                    <MeetProductDetails profile={profile} type={MeetProductType.VideoGreeting} />
                  )
                }[type]
              }
            </div>
            <MeetReviews />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default MeetProduct
