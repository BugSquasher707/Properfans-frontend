import WrapperFriends from "components/wrappers/WrapperFriends"
import { URL } from "libs/constants"
import { FriendTabType } from "libs/enums"
import React from "react"
import RouteDashboard from "router/route/RouteDashboard"
import Friends from "views/friends/Friends"

export default [
  {
    component: (
      <RouteDashboard key={"friends"} path={URL.FRIENDS.BASE} exact friends>
        <WrapperFriends>
          <Friends tab={FriendTabType.All} />
        </WrapperFriends>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"frends blocked"} path={URL.FRIENDS.BLOCKED} exact friends>
        <WrapperFriends>
          <Friends tab={FriendTabType.Blocked} />
        </WrapperFriends>
      </RouteDashboard>
    )
  }
]
