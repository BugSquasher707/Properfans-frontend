import { SubscriptionInterface } from "libs/interfaces"
import React from "react"
import SubscriptionItem from "utils/lists/SubscriptionItem"

const SubscriptionList = ({ subscriptions }: { subscriptions: SubscriptionInterface[] }) => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-6">
        {subscriptions
          .filter((subscription: SubscriptionInterface, key: number) => key < 4)
          .map((subscription: SubscriptionInterface, key: number) => (
            <SubscriptionItem key={key} subscription={subscription} />
          ))}
      </div>
    </>
  )
}

export default SubscriptionList
