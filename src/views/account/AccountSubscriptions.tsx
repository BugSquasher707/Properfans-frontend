import { statusApi } from "api/endpoints/status"
import { onPlural } from "api/integration/functions"
import CreatorSection from "components/creator/CreatorSection"
import CreatorTitle from "components/creator/CreatorTitle"
import FanSubscriptionsActive from "components/fan/FanSubscriptionsActive"
import { useProps } from "contexts/PropsContext"
import { FanSubscriptionType } from "libs/enums"
import { TabInterface, SubscriptionDetailsInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import Tabs from "utils/tabs/Tabs"

const AccountSubscriptions = () => {
  const { token } = useProps()

  const [type, setType] = useState<FanSubscriptionType>(FanSubscriptionType.Active)
  const [tabs, setTabs] = useState<TabInterface[]>([])
  const [subscriptions, setSubscriptions] = useState<SubscriptionDetailsInterface[]>([])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  const onLoad = async () => {
    console.log(token)

    const result = await statusApi()

    if (mounted) {
      if (result && result.length > 0) {
        setSubscriptions(result)
      }

      setTabs([
        {
          count: result ? result.length : 0,
          title: <>Active Subscription{onPlural(subscriptions.length)}</>,
          type: FanSubscriptionType.Active,
          action: setType
        }
      ])
    }
  }

  return (
    <>
      <CreatorSection>
        <CreatorTitle title={"My subscriptions"} />
        <div className="mb-20 w-full md:mb-30">
          <Tabs tabs={tabs} type={type} />
        </div>
        <div className="w-full">
          <FanSubscriptionsActive subscriptions={subscriptions} />
        </div>
      </CreatorSection>
    </>
  )
}

export default AccountSubscriptions
