import { followClub, unFollowClub } from "api/endpoints/clubFollow"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { ProfileBrandInterface } from "libs/interfaces"
import React from "react"
import { useHistory } from "react-router-dom"
import ButtonFollow from "utils/buttons/ButtonFollow"
import ButtonSubscribeManage from "utils/buttons/ButtonSubscribeManage"

const BrandProfileButtons = ({
  profile,
  handlerFollow,
  isFollow
}: {
  profile: ProfileBrandInterface
  handlerFollow: any
  isFollow: boolean
}) => {
  const { authenticated, token, user } = useProps()

  const history = useHistory()

  const onFollow = async () => {
    const data = {
      user: user.id
    }

    const result = await followClub(token, profile.id, data)

    if (result.status) {
      handlerFollow(true)
    }
  }

  const onUnfollow = async () => {
    const data = {
      user: user.id
    }

    const result = await unFollowClub(token, profile.id, data)

    if (result.status) {
      handlerFollow(false)
    }
  }

  const onToggleSubscribe = () => {
    if (profile.subscriber) {
      history.push(URL.ACCOUNT.SUBSCRIPTION.replace(":id", profile.handle))
    } else {
      history.push(URL.SUBSCRIBE.BASE.replace(":param", profile.handle))
    }
  }

  return (
    <>
      <Wrapper open={authenticated}>
        <div className="mb-20 flex w-full items-center justify-center">
          <div className="grid w-full max-w-full grid-cols-2 gap-12 sm:w-[320px]">
            <div className="w-full" onClick={() => (isFollow ? onUnfollow() : onFollow())}>
              <ButtonFollow active={isFollow} />
            </div>
            <div className="w-full" onClick={() => onToggleSubscribe()}>
              <ButtonSubscribeManage active={profile.subscriber} />
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default BrandProfileButtons
