import FriendsMain from "components/friends/FriendsMain"
import NavFriends from "components/nav/NavFriends"
import { FriendTabType } from "libs/enums"
import React from "react"

const Friends = ({ tab }: { tab: FriendTabType }) => {
  return (
    <>
      <NavFriends />
      <div className="relative grid w-full grid-cols-1 items-start gap-20 md:gap-40">
        <div className="w-full">
          <FriendsMain tab={tab} />
        </div>
      </div>
    </>
  )
}

export default Friends
