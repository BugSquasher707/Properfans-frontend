import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React from "react"
import { Redirect, Route } from "react-router-dom"

const RouteUser = ({ children, ...rest }: any) => {
  const { route, authenticated } = useProps()

  return (
    <>
      <Route {...rest}>{!route && !authenticated ? <Redirect to={URL.HOME} /> : children}</Route>
    </>
  )
}

export default RouteUser
