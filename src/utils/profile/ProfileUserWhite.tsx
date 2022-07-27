import WrapperVerified from "components/wrappers/WrapperVerified"
import { ProfileInterface } from "libs/interfaces"
import React from "react"
import Avatar from "utils/avatars/Avatar"
import Verified from "utils/icons/Verified"

const ProfileUserWhite = ({ profile }: { profile: ProfileInterface }) => {
  return (
    <>
      <div className="center mb-22 h-82 w-full">
        {profile.avatar ? (
          <img alt="" className="h-82 w-82 overflow-hidden rounded-full" src={profile.avatar} />
        ) : (
          <Avatar size={82} />
        )}
      </div>
      <div className="mb-4 flex w-full items-center justify-center">
        <div className="relative truncate overflow-ellipsis pr-20 text-14 font-bold text-white">
          {profile.userName}
          <WrapperVerified>{profile.verified ? <Verified color={"black"} size={16} /> : ""}</WrapperVerified>
        </div>
      </div>
      <div className="mb-16 w-full max-w-full truncate overflow-ellipsis text-center text-12 font-bold text-white-40">
        @{profile.handle}
      </div>
    </>
  )
}

export default ProfileUserWhite
