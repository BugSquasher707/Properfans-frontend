import WrapperLive from "components/wrappers/WrapperLive"
import WrapperStream from "components/wrappers/WrapperStream"
import { URL } from "libs/constants"
import React from "react"
import RouteDashboard from "router/route/RouteDashboard"
import Live from "views/live/Live"
import LiveCategory from "views/live/LiveCategory"
import LiveStream from "views/live/LiveStream"
import LiveStreamers from "views/live/LiveStreamers"

export default [
  {
    component: (
      <RouteDashboard key={"live"} path={URL.LIVE.BASE} exact>
        <WrapperLive>
          <Live />
        </WrapperLive>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"live category"} path={URL.LIVE.CATEGORIES}>
        <WrapperLive>
          <LiveCategory />
        </WrapperLive>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"live stream"} path={URL.LIVE.STREAM}>
        <WrapperStream>
          <LiveStream />
        </WrapperStream>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"live streamers"} path={URL.LIVE.STREAMERS} exact>
        <WrapperLive>
          <LiveStreamers />
        </WrapperLive>
      </RouteDashboard>
    )
  }
]
