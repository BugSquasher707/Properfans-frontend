import { URL } from "libs/constants"
import React from "react"
import RouteNoUser from "router/route/RouteNoUser"
import AuthWelcome from "views/auth/AuthWelcome"

export default [
  {
    component: (
      <RouteNoUser key={"auth"} path={URL.AUTH.BASE} exact>
        <AuthWelcome />
      </RouteNoUser>
    )
  }
]
