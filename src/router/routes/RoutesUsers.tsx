import WrapperBrands from "components/wrappers/WrapperBrands"
import { URL } from "libs/constants"
import React from "react"
import RouteDashboard from "router/route/RouteDashboard"
import User from "views/users/User"

export default [
  {
    component: (
      <RouteDashboard key={"users"} path={URL.USERS.BASE} brands>
        <WrapperBrands>
          <User />
        </WrapperBrands>
      </RouteDashboard>
    )
  }
]
