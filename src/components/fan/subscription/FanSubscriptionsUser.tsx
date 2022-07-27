import { roundNumber } from "api/integration/functions"
import WrapperVerified from "components/wrappers/WrapperVerified"
import { URL } from "libs/constants"
import { SubscriptionDetailsInterface } from "libs/interfaces"
import React from "react"
import { MdHourglassEmpty } from "react-icons/md"
import NumberFormat from "react-number-format"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"
import Verified from "utils/icons/Verified"

const FanSubscriptionsUser = ({ sub }: { sub: SubscriptionDetailsInterface }) => {
  return (
    <>
      {sub.profile.banner ? <BannerFilled banner={sub.profile.banner} /> : <Banner />}
      <div className="relative w-full rounded-4 p-10 pt-22">
        <div className="absolute top-10 right-10 flex h-20 items-center space-x-[4px] rounded-4 border-1 border-grey-3 bg-white px-8 text-12 font-bold text-black shadow-sm dark:shadow-none">
          {sub.trial ? (
            <>
              <MdHourglassEmpty className="-mx-3 text-purple" />
              Trial
            </>
          ) : (
            <NumberFormat displayType={"text"} prefix={"$"} value={roundNumber(sub.price)} thousandSeparator />
          )}
        </div>
        <div className="mb-12 flex h-42 w-full items-center justify-center">
          {sub.profile.avatar ? (
            <img alt="" className="h-42 w-42 overflow-hidden rounded-full" src={sub.profile.avatar} />
          ) : (
            <Avatar size={42} />
          )}
        </div>
        <Link
          className="mb-4 flex w-full items-center justify-center space-x-[4px]"
          to={URL.BRANDS.BASE.replace(":param", sub.profile.handle)}
        >
          <div className="relative truncate overflow-ellipsis pr-20 text-14 font-bold text-black">
            {sub.profile.userName}
            <WrapperVerified>{sub.profile.verified ? <Verified size={16} /> : ""}</WrapperVerified>
          </div>
        </Link>
        <div className="w-full max-w-full truncate overflow-ellipsis text-center text-12 font-bold text-grey-40">
          @{sub.profile.handle}
        </div>{" "}
      </div>
    </>
  )
}

export default FanSubscriptionsUser
