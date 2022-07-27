import FanSubscriptionProfile from "components/fan/FanSubscriptionProfile"
import { SubscriptionDetailsInterface } from "libs/interfaces"
import React from "react"

const FanSubscriptionsActive = ({ subscriptions }: { subscriptions: SubscriptionDetailsInterface[] }) => {
  return (
    <>
      {subscriptions && subscriptions.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-12 xs:gap-20 sm:grid-cols-2 xl:grid-cols-3">
          {subscriptions.map((sub: SubscriptionDetailsInterface, key: number) => (
            <FanSubscriptionProfile key={key} sub={sub} />
          ))}
        </div>
      ) : (
        <div className="w-full text-14 text-grey-40">No active subscriptions</div>
      )}
    </>
  )
}

export default FanSubscriptionsActive
