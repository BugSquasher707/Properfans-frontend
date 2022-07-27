import WrapperFooter from "components/wrappers/WrapperFooter"
import { URL } from "libs/constants"
import React from "react"
import { Redirect } from "react-router-dom"
import RouteDashboard from "router/route/RouteDashboard"
import CreatorApplication from "views/creator/CreatorApplication"
import CreatorApplicationStatus from "views/creator/CreatorApplicationStatus"

export default [
  {
    component: (
      <RouteDashboard key={"application"} path={URL.APPLICATION.BASE} exact twofactor>
        <WrapperFooter>
          <Redirect to={URL.APPLICATION.SETUP} />
        </WrapperFooter>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"application setup"} path={URL.APPLICATION.SETUP} exact twofactor>
        <WrapperFooter>
          <CreatorApplication />
        </WrapperFooter>
      </RouteDashboard>
    )
  },
  {
    component: (
      <RouteDashboard key={"application status"} path={URL.APPLICATION.STATUS} exact twofactor>
        <WrapperFooter>
          <CreatorApplicationStatus />
        </WrapperFooter>
      </RouteDashboard>
    )
  }
]
