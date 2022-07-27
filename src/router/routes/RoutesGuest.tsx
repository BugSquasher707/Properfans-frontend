import { URL } from "libs/constants"
import React from "react"
import RouteDashboard from "router/route/RouteDashboard"
import GuestBrand from "views/guest/GuestBrand"
import GuestFeed from "views/guest/GuestFeed"
import GuestMeetDiscover from "views/guest/GuestMeetDiscover"
import GuestMeetProfile from "views/guest/GuestMeetProfile"
import GuestUser from "views/guest/GuestUser"

export default [
  {
    component: (
      <RouteDashboard key={"guest"} path={URL.GUEST.BASE} exact guest>
        <GuestFeed />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"guest brand"} path={URL.GUEST.BRAND} guest>
        <GuestBrand />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"guest meet discover"} path={URL.GUEST.MEET.DISCOVER} exact guest>
        <GuestMeetDiscover />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"guest meet profile"} path={URL.GUEST.MEET.PROFILE} guest>
        <GuestMeetProfile />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"guest user"} path={URL.GUEST.USER} guest>
        <GuestUser />
      </RouteDashboard>
    )
  }
]
