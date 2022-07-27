import { statusApi } from "api/endpoints/status"
import { ReactComponent as Tier1 } from "assets/img/tier_1.svg"
import { ReactComponent as Tier2 } from "assets/img/tier_2.svg"
import { ReactComponent as Tier3 } from "assets/img/tier_3.svg"
import { ReactComponent as Tier4 } from "assets/img/tier_4.svg"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { SubscriptionTierType } from "libs/enums"
import { CreatorFanInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdCheck } from "react-icons/md"
import { useHistory } from "react-router"

const FanCreatorButtons = ({ profile }: { profile: CreatorFanInterface }) => {
  const { authenticated, token } = useProps()

  const history = useHistory()

  const [isFollower, setIsFollower] = useState(profile.follower)

  const onFollow = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      setIsFollower(true)
    }
  }

  const onUnfollow = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      setIsFollower(false)
    }
  }

  const onToggleSubscribe = () => {
    if (profile.subscriber) {
      history.push(URL.ACCOUNT.SUBSCRIPTION.replace(":id", profile.creator.handle))
    } else {
      history.push(URL.SUBSCRIBE.BASE.replace(":param", profile.creator.handle))
    }
  }

  return (
    <>
      <Wrapper open={authenticated}>
        <div className="flex w-full items-center justify-center">
          <div className="grid w-full max-w-full grid-cols-2 items-center gap-12 sm:w-[320px]">
            <button className="group w-full" onClick={() => (isFollower ? onUnfollow() : onFollow())}>
              {isFollower ? (
                <div className="flex w-full items-center justify-center space-x-[8px]">
                  <div className="text-14 font-bold text-black group-hover:text-purple">Following</div>
                  <MdCheck className="text-16 text-purple" />
                </div>
              ) : (
                <div className="w-full text-center text-14 font-bold text-black group-hover:text-purple">Follow</div>
              )}
            </button>
            <button className="group w-full" onClick={() => onToggleSubscribe()}>
              {profile.subscriber ? (
                <div className="flex w-full items-center justify-center space-x-[8px]">
                  {
                    {
                      [SubscriptionTierType.Tier0]: "",
                      [SubscriptionTierType.Tier1]: <Tier1 className="h-16 w-16" />,
                      [SubscriptionTierType.Tier2]: <Tier2 className="h-16 w-16" />,
                      [SubscriptionTierType.Tier3]: <Tier3 className="h-16 w-16" />,
                      [SubscriptionTierType.Tier4]: <Tier4 className="h-16 w-16" />
                    }[profile.tier]
                  }
                  <div className="text-14 font-bold text-black group-hover:text-purple">Subscribed</div>
                </div>
              ) : (
                <div className="w-full text-center text-14 font-bold text-black group-hover:text-purple">Subscribe</div>
              )}
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default FanCreatorButtons
