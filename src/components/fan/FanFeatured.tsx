import { statusApi } from "api/endpoints/status"
import { useProps } from "contexts/PropsContext"
import { SubscriptionInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import SubscriptionList from "utils/lists/SubscriptionList"

const FanFeatured = () => {
  const { token } = useProps()

  const [subscriptions, setSubscriptions] = useState<SubscriptionInterface[]>([])

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

    if (mounted && result && result.length > 0) {
      console.log(result)

      setSubscriptions(result)
    }
  }

  return (
    <>
      <div className="w-full">
        <div className="mb-20 w-full select-none text-14 font-bold text-grey-40">Featured clubs</div>
        <SubscriptionList subscriptions={subscriptions} />
      </div>
    </>
  )
}

export default FanFeatured
