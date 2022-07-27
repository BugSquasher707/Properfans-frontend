import { URL } from "libs/constants"
import React from "react"
import { Redirect, Route } from "react-router"
import StreamAlerts from "views/stream/StreamAlerts"

export default [
  {
    component: (
      <Route key={"stream"} path={URL.STREAM.BASE} exact>
        <Redirect to={URL.STREAM.ALERTS} />
      </Route>
    )
  },
  {
    component: (
      <Route key={"stream alerts"} path={URL.STREAM.ALERTS} exact>
        <StreamAlerts />
      </Route>
    )
  }
]
