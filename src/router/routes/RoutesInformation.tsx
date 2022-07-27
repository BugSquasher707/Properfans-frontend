import { URL } from "libs/constants"
import React from "react"
import { Redirect, Route } from "react-router-dom"
import Landing from "views/landing/Landing"

export default [
  {
    component: (
      <Route key={"information"} path={URL.INFORMATION.BASE} exact>
        <Redirect to={URL.INFORMATION.ABOUT} />
      </Route>
    )
  },
  {
    component: (
      <Route key={"information about"} path={URL.INFORMATION.ABOUT} exact>
        <Landing />
      </Route>
    )
  }
]
