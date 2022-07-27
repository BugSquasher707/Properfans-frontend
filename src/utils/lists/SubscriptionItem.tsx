import { parseNumber } from "api/integration/functions"
import WrapperVerified from "components/wrappers/WrapperVerified"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { SubscriptionInterface } from "libs/interfaces"
import React, { useState } from "react"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import Verified from "utils/icons/Verified"

const SubscriptionItem = ({ subscription }: { subscription: SubscriptionInterface }) => {
  const { path } = useProps()

  const [size] = useState(subscription.followers ? 32 : 24)
  const [url] = useState(URL.BRANDS.BASE.replace(":param", subscription.profile.handle))

  return (
    <>
      <Link
        className={`group relative grid w-full max-w-full cursor-pointer grid-cols-1 items-center rounded-4 p-10 hover:bg-purple-10 xl:grid-cols-[auto,1fr] ${
          path === url ? "bg-purple-10" : ""
        } ${subscription.followers ? "gap-14" : "gap-10"}`}
        to={url}
      >
        {subscription.profile.avatar ? (
          <div className={`w-${size} h-${size} overflow-hidden rounded-full`}>
            <img alt="" className="w-full" src={subscription.profile.avatar} />
          </div>
        ) : (
          <Avatar size={size} />
        )}
        <div className="relative hidden w-full xl:flex">
          <div className="grid w-full grid-cols-1">
            <div className="flex w-full justify-start">
              <div
                className={`relative select-none overflow-hidden truncate overflow-ellipsis pr-20 text-14 font-bold text-black group-hover:text-purple ${
                  path === url ? "text-purple" : ""
                }`}
              >
                {subscription.profile.userName}
                <WrapperVerified>{subscription.profile.verified ? <Verified size={16} /> : ""}</WrapperVerified>
              </div>
            </div>
            {subscription.followers ? (
              <div className="mt-4 w-full text-12 font-bold text-grey-40">
                {parseNumber(subscription.followers)} fans
              </div>
            ) : (
              ""
            )}{" "}
          </div>
        </div>
      </Link>
    </>
  )
}

export default SubscriptionItem
