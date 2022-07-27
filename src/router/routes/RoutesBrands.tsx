import { URL } from "libs/constants"
import React from "react"
import RouteDashboard from "router/route/RouteDashboard"
import Brand from "views/brands/Brand"

export default [
  {
    component: (
      <RouteDashboard key={"brands"} path={URL.BRANDS.BASE} brand>
        <Brand />
      </RouteDashboard>
    )
  }
]
