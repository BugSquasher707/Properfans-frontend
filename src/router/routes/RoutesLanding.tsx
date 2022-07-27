import { URL } from "libs/constants"
import React from "react"
import { Route } from "react-router"
import Home from "views/landing/Home"
import NotFound from "views/landing/NotFound"

export default [
  {
    component: (
      <Route key={"home"} path={URL.HOME} exact>
        <Home />
      </Route>
    )
  },
  {
    component: (
      <Route key={"not found"}>
        <NotFound />
      </Route>
    )
  }
]
