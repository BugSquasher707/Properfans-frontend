import { parseTier } from "api/integration/functions"
import { BooleanInterface, SubscriptionManageInterface } from "libs/interfaces"
import React, { useState } from "react"
import { IoMdBulb, IoMdCheckmark, IoMdClose } from "react-icons/io"

const ModalSubscriptionPerks = ({ profile }: { profile: SubscriptionManageInterface }) => {
  const [perks] = useState([
    {
      active: true,
      title: `Exclusive tier ${parseTier(profile.subscription.tier)} content`
    },
    {
      active: true,
      title: `Exclusive tier ${parseTier(profile.subscription.tier)} stories`
    },
    {
      active: true,
      title: `Tier ${parseTier(profile.subscription.tier)} community chats`
    }
  ])

  return (
    <>
      <div className="w-full">
        <div className="mb-8 w-full text-14 text-grey-40">Available tier perks</div>
        <div className="mb-20 grid w-full grid-cols-1 md:mb-40 md:grid-cols-2">
          {perks.map((perk: BooleanInterface, key: number) => (
            <div
              key={key}
              className="grid w-full grid-cols-[auto,1fr] items-center gap-14 border-b-1 border-grey-6 py-12"
            >
              <div
                className={`flex h-22 w-22 items-center justify-center rounded-full ${
                  perk.active ? "bg-purple" : "bg-grey-20"
                }`}
              >
                {perk.active ? (
                  <IoMdCheckmark className="text-14 text-white" />
                ) : (
                  <IoMdClose className="text-14 text-white" />
                )}
              </div>
              <div className={`w-full text-14 ${perk.active ? "font-bold text-black" : "text-grey-40 line-through"}`}>
                {perk.title}
              </div>
            </div>
          ))}
        </div>
        <div className="w-full rounded-4 bg-purple-10 p-20">
          <div className="mb-10 grid w-full grid-cols-[auto,1fr] items-center gap-10">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-purple">
              <IoMdBulb className="text-16 text-white" />
            </div>
            <div className="text-14 font-bold text-black">What&apos;s that?</div>
          </div>
          <div className="text-14 text-grey-40">
            Each individual subscription tier offers different perks, however, those perks are upgradeable so you can
            have the ones which you want
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalSubscriptionPerks
