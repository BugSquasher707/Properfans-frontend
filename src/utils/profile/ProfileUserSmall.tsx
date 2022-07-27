import React from "react"
import Avatar from "utils/avatars/Avatar"
import ProfileUserBottom from "utils/profile/ProfileUserBottom"

const ProfileUserSmall = ({
  avatar,
  tag,
  username,
  verified
}: {
  avatar: string
  tag: string
  username: string
  verified: boolean
}) => {
  return (
    <>
      <div className="center mb-12 h-42 w-full">
        {avatar ? <img alt="" className="h-42 w-42 overflow-hidden rounded-full" src={avatar} /> : <Avatar size={42} />}
      </div>
      <ProfileUserBottom small={true} tag={tag} username={username} verified={verified} />
    </>
  )
}

export default ProfileUserSmall
