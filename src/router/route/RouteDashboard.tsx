import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React from "react"
import { Redirect, Route } from "react-router-dom"

const RouteDashboard = ({ children, brand, creator, guest, ...rest }: any) => {
  const { path, route, authenticated, user } = useProps()

  console.log(authenticated, path, user)

  return (
    <>
      <Route {...rest}>
        {!route ? (
          !authenticated || !(user.isEmailVerified && user.acceptedTerms && user.isProfileComplete) ? (
            path === URL.MEET.DISCOVER || brand ? (
              <Redirect to={URL.GUEST.BASE + path} />
            ) : guest ? (
              <Redirect to={path.replace(URL.GUEST.BASE, "")} />
            ) : (
              <Redirect to={URL.HOME} />
            )
          ) : !user ? (
            <Redirect to={URL.SETUP.BASE} />
          ) : creator && !user.creator ? (
            <Redirect to={URL.APPLICATION.BASE} />
          ) : (
            children
          )
        ) : (
          children
        )}
      </Route>
    </>
  )
}

export default RouteDashboard
