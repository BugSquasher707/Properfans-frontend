import { statusApi } from "api/endpoints/status"
import CreatorSection from "components/creator/CreatorSection"
import CreatorTitleLink from "components/creator/CreatorTitleLink"
import FanSubscriptionMain from "components/fan/subscription/FanSubscriptionMain"
import FanSubscriptionUser from "components/fan/subscription/FanSubscriptionUser"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { SubscriptionManageInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

type ParamType = {
  id: string
}

const AccountSubscription = () => {
  const { token } = useProps()

  const { id } = useParams<ParamType>()

  const [profile, setProfile] = useState<SubscriptionManageInterface>()

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  const onLoad = async () => {
    console.log(token, id)

    const result = await statusApi()

    if (mounted && result) {
      setProfile(result)
    }
  }

  return (
    <>
      <CreatorSection>
        <CreatorTitleLink link={"My subscriptions"} title={"Manage subscription"} url={URL.ACCOUNT.SUBSCRIPTIONS} />
        {profile ? (
          <>
            <FanSubscriptionUser profile={profile} />
            <div className="mt-20 grid w-full grid-cols-1">
              <FanSubscriptionMain profile={profile} />
            </div>
          </>
        ) : (
          ""
        )}
      </CreatorSection>
    </>
  )
}

export default AccountSubscription
