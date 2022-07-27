import { URL } from "libs/constants"
import React from "react"
import { Redirect, Route } from "react-router-dom"
import WikiProperCoins from "views/wiki/WikiProperCoins"
import WikiProperMeet from "views/wiki/WikiProperMeet"

export default [
  {
    component: (
      <Route key={"wiki"} path={URL.WIKI.BASE} exact>
        <Redirect to={URL.WIKI.PROPERCOINS} />
      </Route>
    )
  },
  {
    component: (
      <Route key={"wiki propercoins"} path={URL.WIKI.PROPERCOINS} exact>
        <WikiProperCoins />
      </Route>
    )
  },
  {
    component: (
      <Route key={"wiki meet"} path={URL.WIKI.MEET} exact>
        <WikiProperMeet />
      </Route>
    )
  }
]
