import { ReactComponent as ProperfansGrey } from "assets/img/properfans_grey.svg"
import { ReactComponent as Tier1 } from "assets/img/tier_1.svg"
import { ReactComponent as Tier2 } from "assets/img/tier_2.svg"
import { ReactComponent as Tier3 } from "assets/img/tier_3.svg"
import { ReactComponent as Tier4 } from "assets/img/tier_4.svg"
import FanSubscriptionEnds from "components/fan/subscription/FanSubscriptionEnds"
import FanSubscriptionsUser from "components/fan/subscription/FanSubscriptionsUser"
import { URL } from "libs/constants"
import { SubscriptionTierType } from "libs/enums"
import { SubscriptionDetailsInterface } from "libs/interfaces"
import React from "react"
import { MdEdit } from "react-icons/md"
import { Link } from "react-router-dom"

const FanSubscriptionProfile = ({ sub }: { sub: SubscriptionDetailsInterface }) => {
  return (
    <>
      <div className="relative flex w-full flex-wrap overflow-hidden rounded-4 border-1 border-grey-10">
        <FanSubscriptionsUser sub={sub} />
        <div className="relative w-full p-10">
          <div className="mb-20 w-full">
            <FanSubscriptionEnds sub={sub} />
          </div>
          <div className="flex w-full items-center justify-center space-x-[14px]">
            <div className="text-12 text-grey-40">Tier</div>
            <div className="grid h-26 grid-cols-[auto,1fr] items-center gap-6 rounded-full border-1 border-grey-12 bg-grey-2 px-10">
              {
                {
                  [SubscriptionTierType.Tier0]: "",
                  [SubscriptionTierType.Tier1]: <Tier1 className="h-16 w-16" />,
                  [SubscriptionTierType.Tier2]: <Tier2 className="h-16 w-16" />,
                  [SubscriptionTierType.Tier3]: <Tier3 className="h-16 w-16" />,
                  [SubscriptionTierType.Tier4]: <Tier4 className="h-16 w-16" />
                }[sub.tier]
              }
              <div className="text-12 font-bold capitalize text-black">{sub.tierName ? sub.tierName : sub.tier}</div>
            </div>
          </div>
          <div className="mt-20 mb-10 w-full border-b-1 border-grey-10"></div>
          <Link
            className="active:rind-2 group mb-10 flex h-32 w-full items-center justify-center space-x-[8px] rounded-4 active:ring-purple-10 hover:bg-purple"
            to={URL.ACCOUNT.SUBSCRIPTION.replace(":id", sub.profile.handle)}
          >
            <MdEdit className="text-grey-20 group-hover:text-white-20" />
            <div className="text-14 font-bold text-black group-hover:text-white">Manage subscription</div>
          </Link>
          <div className="mb-14 flex w-full justify-center">
            <div className="w-[95px] max-w-full border-b-1 border-grey-6"></div>
          </div>
          <div className="flex w-full items-center justify-center space-x-[4px]">
            <div className="text-12 text-grey-40">Subscribed on</div>
            <ProperfansGrey />
            <div className="text-12 font-bold text-grey-40">Properfans</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FanSubscriptionProfile
