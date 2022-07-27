import WrapperProfile from "components/wrappers/WrapperProfile"
import { URL } from "libs/constants"
import React from "react"
import Avatar from "utils/avatars/Avatar"
import ProfileUserBottom from "utils/profile/ProfileUserBottom"

const ProfileUser = ({
  avatar,
  tag,
  username,
  verified,
  custom
}: {
  avatar: string
  tag: string
  username: string
  verified: boolean
  custom?: boolean
}) => {
  const onUrl = () => {
    return verified ? URL.BRANDS.BASE.replace(":param", tag) : URL.USERS.BASE.replace(":param", tag)
  }

  return (
    <>
      <WrapperProfile custom={custom ? true : false} url={onUrl()}>
        <div className="flex h-72 w-full items-center justify-center">
          {avatar ? (
            <img alt="" className="h-72 w-72 overflow-hidden rounded-full" src={avatar} />
          ) : (
            <Avatar size={72} />
          )}
        </div>
        <ProfileUserBottom small={false} tag={tag} username={username} verified={verified} />
      </WrapperProfile>
    </>
  )
}

export default ProfileUser
