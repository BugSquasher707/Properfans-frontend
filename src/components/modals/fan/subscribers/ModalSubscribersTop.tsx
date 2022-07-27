import { SubscribeInterface } from "libs/interfaces"
import React, { useState } from "react"
import { IoMdTrophy } from "react-icons/io"
import AvatarLeaderboard from "utils/avatars/AvatarLeaderboard"
import AvatarLeaderboardDefault from "utils/avatars/AvatarLeaderboardDefault"

const ModalSubscribersTop = ({ profile, index }: { profile?: SubscribeInterface; index: number }) => {
  const [trophies] = useState([
    <IoMdTrophy key={0} className="text-16 text-black-B0" />,
    <IoMdTrophy key={0} className="text-16 text-purple" />,
    <IoMdTrophy key={0} className="text-16 text-gold" />
  ])

  return (
    <>
      <div className="w-full cursor-pointer">
        <div className={`mb-14 flex w-full items-center justify-center ${index === 1 ? "h-82" : "h-62"}`}>
          {profile && profile.user.avatar ? (
            <AvatarLeaderboard big={index === 1} icon={profile.user.avatar} />
          ) : (
            <AvatarLeaderboardDefault big={index === 1} />
          )}
        </div>
        <div className="mb-2 flex w-full items-center justify-center">
          <div className="grid grid-cols-[auto,1fr] items-center justify-center gap-6 text-14 font-bold text-black">
            <img alt="" className="w-14" src={"/general/subs_big.png"} />
            <span className="truncate overflow-ellipsis">
              {profile && profile.user.userName ? profile.user.userName : "Username"}
            </span>
          </div>
        </div>
        <div className="mb-18 w-full text-center text-12 font-bold text-grey-40">
          @{profile && profile.user.handle ? profile.user.handle : "tag"}
        </div>
        <div className="flex w-full items-center justify-center">{trophies[index]}</div>
      </div>
    </>
  )
}

export default ModalSubscribersTop
