import ModalSubscriptionInvoice from "components/modals/subscription/ModalSubscriptionInvoice"
import ModalSubscriptionMethod from "components/modals/subscription/ModalSubscriptionMethod"
import ModalSubscriptionPerks from "components/modals/subscription/ModalSubscriptionPerks"
import { FanManageSubscriptionType } from "libs/enums"
import { SubscriptionManageInterface, TabInterface } from "libs/interfaces"
import React, { useState } from "react"
import Tabs from "utils/tabs/Tabs"

const FanSubscriptionMain = ({ profile }: { profile: SubscriptionManageInterface }) => {
  const [type, setType] = useState(FanManageSubscriptionType.Method)

  const [tabs] = useState<TabInterface[]>([
    {
      title: <>Payment Method</>,
      type: FanManageSubscriptionType.Method,
      action: setType
    },
    {
      title: <>Available Tier Perks</>,
      type: FanManageSubscriptionType.Perks,
      action: setType
    },
    {
      title: <>Download Invoices</>,
      type: FanManageSubscriptionType.Invoices,
      action: setType
    }
  ])

  return (
    <>
      <div className="relative w-full">
        <div className="mb-20 w-full sm:mb-30">
          <Tabs tabs={tabs} type={type} />
        </div>
        {
          {
            [FanManageSubscriptionType.Method]: <ModalSubscriptionMethod profile={profile} />,
            [FanManageSubscriptionType.Perks]: <ModalSubscriptionPerks profile={profile} />,
            [FanManageSubscriptionType.Invoices]: <ModalSubscriptionInvoice profile={profile} />
          }[type]
        }
      </div>
    </>
  )
}

export default FanSubscriptionMain
