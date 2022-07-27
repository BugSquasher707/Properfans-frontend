import { URL } from "libs/constants"
import React from "react"
import RouteDashboard from "router/route/RouteDashboard"
import Subscribe from "views/subscribe/Subscribe"
import SubscribeSuccess from "views/subscribe/SubscribeSuccess"

export default [
  {
    component: (
      <RouteDashboard key={"subscribe"} path={URL.SUBSCRIBE.BASE} exact>
        <Subscribe />
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"subscribe success"} path={URL.SUBSCRIBE.SUCCESS} exact>
        <SubscribeSuccess />
      </RouteDashboard>
    )
  }
]
