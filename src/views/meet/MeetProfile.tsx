import { getSingleProperMeetProfile } from "api/endpoints/properMeetProfile"
import MeetStar from "components/meet/elements/MeetStar"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { MeetProductType, OverlayType } from "libs/enums"
import { MeetProductInterface, ProfileBrandInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { IoMdInformationCircle } from "react-icons/io"
import NumberFormat from "react-number-format"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import BackTo from "utils/buttons/back/BackTo"
import ProfileUser from "utils/profile/ProfileUser"
import MeetBanner from "views/meet/MeetBanner"

interface Params {
  param: string
}

const MeetProfile = () => {
  const { authenticated, token, setOverlay } = useProps()

  const { param } = useParams<Params>()

  const [products, setProducts] = useState<MeetProductInterface[]>([])
  const [profile, setProfile] = useState<ProfileBrandInterface>()

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    console.log(authenticated, token)

    const result = await getSingleProperMeetProfile(token, param)

    if (result.status) {
      setProfile(result.data)

      setProducts([
        {
          title: "Make a call with me",
          text: "Description call",
          price: 123.45,
          type: MeetProductType.AudioCall,
          link: URL.MEET.PRODUCT.CALL.replace(":param", param)
        },
        {
          title: "Get a video greeting from me",
          text: "Description greeting",
          price: 567.89,
          type: MeetProductType.VideoGreeting,
          link: URL.MEET.PRODUCT.VIDEO.replace(":param", param)
        }
      ])
    } else {
      setOverlay(OverlayType.NotFound)
    }
  }

  return (
    <>
      {profile ? (
        <div className="feed meet mx-0 flex w-full justify-center overflow-y-auto">
          <div className="w-full max-w-full lg:w-[830px]">
            <div className="relative mb-0 w-full px-12 pt-12 sm:mb-30 sm:px-40 sm:pt-60 md:px-60">
              <MeetBanner banner={profile.banner} full />
              <div className="absolute top-12 left-12 z-10 sm:top-20 sm:left-20">
                <BackTo link={URL.MEET.BASE} title={"Discover"} />
              </div>
              <div className="relative w-full pt-50 sm:pt-0">
                <ProfileUser
                  avatar={profile.avatar}
                  tag={profile.handle}
                  username={profile.userName}
                  verified={profile.verified}
                />
                <div className="mb-20 flex w-full justify-start sm:justify-center">
                  {/* <PopupSubscribers brand={profile} title={"Properfans"} value={profile.subscribers} /> */}
                </div>
                <div className="flex w-full justify-center">
                  <div className="text-semibold w-[550px] max-w-full text-left text-12 text-grey-40 sm:text-center sm:text-14">
                    {profile.biography}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-20 mb-12 w-full border-b-1 border-grey-6 sm:mt-30 sm:mb-40 md:mb-60"></div>
            <div className="grid w-full grid-cols-1 gap-12 px-12 sm:gap-20 sm:px-20 md:grid-cols-2 md:px-40 lg:px-60">
              {products.map((product: MeetProductInterface, key: number) => (
                <Link
                  key={key}
                  className="group relative w-full rounded-6 border-2 border-white bg-grey-3 py-20 px-30 hover:border-grey-12 hover:bg-white"
                  to={product.link}
                >
                  <div className="mb-16 flex w-full justify-center">
                    <MeetStar type={product.type} />
                  </div>
                  <div className="w-full text-center text-14 font-bold text-black">{product.title}</div>
                  <div className="relative my-20 w-full border-b-1 border-dashed border-grey-10">
                    <div className="absolute top-0 left-[-32px] h-20 w-10 translate-y-[-50%] transform overflow-hidden">
                      <div className="absolute right-0 top-0 h-20 w-20 rounded-full border-2 border-white bg-white group-hover:border-grey-12"></div>
                    </div>
                    <div className="absolute top-0 right-[-32px] h-20 w-10 translate-y-[-50%] transform overflow-hidden">
                      <div className="absolute left-0 top-0 h-20 w-20 rounded-full border-2 border-white bg-white group-hover:border-grey-12"></div>
                    </div>
                  </div>
                  <div className="mb-30 w-full text-center text-14 text-grey-40">{product.text}</div>
                  <div className="mb-12 w-full text-center text-12 text-grey-40">Starting at</div>
                  <div className="mb-40 flex w-full items-center justify-center space-x-[6px]">
                    <div className="text-16 font-bold text-purple">$</div>
                    <div className="text-24 font-bold text-purple">
                      <NumberFormat className="text-24" displayType={"text"} value={product.price} thousandSeparator />
                    </div>
                  </div>
                  <div className="flex w-full justify-center">
                    <div className="flex cursor-pointer items-center justify-center space-x-[6px] rounded-4 p-10 hover:bg-grey-3">
                      <IoMdInformationCircle className="text-16 text-grey-20" />
                      <div className="text-14 font-bold text-grey-40">How does it work?</div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  )
}

export default MeetProfile
