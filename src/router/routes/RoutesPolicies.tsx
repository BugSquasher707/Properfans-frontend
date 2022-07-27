import { URL } from "libs/constants"
import { PoliciesType } from "libs/enums"
import React from "react"
import { Redirect, Route } from "react-router-dom"
import Policies from "views/policies/Policies"

export default [
  {
    component: (
      <Route key={"policies"} path={URL.POLICIES.BASE} exact>
        <Redirect to={URL.POLICIES.TERMS} />
      </Route>
    )
  },
  {
    component: (
      <Route key={"policies cookies"} path={URL.POLICIES.COOKIES} exact>
        <Policies type={PoliciesType.Cookies} />
      </Route>
    )
  },
  {
    component: (
      <Route key={"policies disclaimer"} path={URL.POLICIES.DISCLAIMER} exact>
        <Policies type={PoliciesType.Disclaimer} />
      </Route>
    )
  },
  {
    component: (
      <Route key={"policies privacy"} path={URL.POLICIES.PRIVACY} exact>
        <Policies type={PoliciesType.Privacy} />
      </Route>
    )
  },
  {
    component: (
      <Route key={"privacy terms"} path={URL.POLICIES.TERMS} exact>
        <Policies type={PoliciesType.Terms} />
      </Route>
    )
  }
]
