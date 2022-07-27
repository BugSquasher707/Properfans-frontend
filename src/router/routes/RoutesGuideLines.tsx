import { URL } from "libs/constants"
import { GuidelinesCategoryType } from "libs/enums"
import React from "react"
import { Route } from "react-router-dom"
import Guidelines from "views/guidelines/Guidelines"
import GuidelinesCategory from "views/guidelines/GuidelinesCategory"

export default [
  {
    component: (
      <Route key={"guidelines"} path={URL.GUIDELINES.BASE} exact>
        <Guidelines />
      </Route>
    )
  },
  {
    component: (
      <Route key={"guidelines content"} path={URL.GUIDELINES.CONTENT} exact>
        <GuidelinesCategory type={GuidelinesCategoryType.Content} />
      </Route>
    )
  },
  {
    component: (
      <Route key={"guidelines doxing"} path={URL.GUIDELINES.DOXING} exact>
        <GuidelinesCategory type={GuidelinesCategoryType.Doxing} />
      </Route>
    )
  },
  {
    component: (
      <Route key={"guidelines sponsor"} path={URL.GUIDELINES.SPONSOR} exact>
        <GuidelinesCategory type={GuidelinesCategoryType.Sponsor} />
      </Route>
    )
  }
]
