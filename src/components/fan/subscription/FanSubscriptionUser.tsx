import { statusApi } from "api/endpoints/status"
import { roundNumber } from "api/integration/functions"
import { toastSuccess } from "api/integration/toaster"
import WrapperVerified from "components/wrappers/WrapperVerified"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { SubscriptionManageInterface } from "libs/interfaces"
import React from "react"
import NumberFormat from "react-number-format"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import Verified from "utils/icons/Verified"

const FanSubscriptionUser = ({ profile }: { profile: SubscriptionManageInterface }) => {
  const { token } = useProps()

  const onCancel = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      toastSuccess("Successfully cancelled subscription")
    }
  }

  return (
    <>
      <div className="relative w-full">
        {profile.banner ? <BannerFilled banner={profile.banner} /> : <Banner />}
        <div className="relative mb-24 w-full rounded-4 p-10 pt-32">
          <div className="absolute top-10 right-10 flex h-20 items-center space-x-[4px] rounded-4 border-1 border-grey-3 bg-white px-8 text-12 font-bold text-black shadow-sm dark:shadow-none">
            <NumberFormat
              displayType={"text"}
              prefix={"$"}
              value={roundNumber(profile.subscription.price)}
              thousandSeparator
            />
          </div>
          <div className="mb-12 flex h-72 w-full items-center justify-center">
            {profile.avatar ? (
              <img alt="" className="h-72 w-72 overflow-hidden rounded-full" src={profile.avatar} />
            ) : (
              <Avatar size={72} />
            )}
          </div>
          <Link
            className="mb-4 flex w-full items-center justify-center space-x-[4px]"
            to={URL.BRANDS.BASE.replace(":param", profile.handle)}
          >
            <div className="relative truncate overflow-ellipsis pr-20 text-14 font-bold text-black">
              {profile.userName}
              <WrapperVerified>{profile.verified ? <Verified size={16} /> : ""}</WrapperVerified>
            </div>
          </Link>
          <div className="w-full max-w-full truncate overflow-ellipsis text-center text-12 font-bold text-grey-40">
            @{profile.handle}
          </div>
        </div>
        <div className="mb-10 w-full">
          <ButtonPurple action={URL.SUBSCRIBE.BASE.replace(":param", profile.handle)} title={"Change tier"} small />
        </div>
        <button
          className="flex h-36 w-full items-center justify-center text-14 font-bold text-grey-40 hover:text-black"
          onClick={() => onCancel()}
        >
          Cancel subscription
        </button>
      </div>
    </>
  )
}

export default FanSubscriptionUser
