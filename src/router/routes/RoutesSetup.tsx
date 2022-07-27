import { URL } from "libs/constants"
import React from "react"
import RouteUser from "router/route/RouteUser"
import Setup from "views/setup/Setup"

export default [
  {
    component: (
      <RouteUser key={"setup"} path={URL.SETUP.BASE} exact>
        <Setup />
      </RouteUser>
    )
  }
]
