import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React, { useEffect } from "react"
import { useHistory } from "react-router-dom"

const Home = () => {
  const { authenticated, user } = useProps()

  const history = useHistory()

  useEffect(() => {
    if (authenticated && user.userId) {
      history.push(URL.FAN.FEED)
    }
    else if(!authenticated) {
      history.push(URL.AUTH.BASE)
    }
    else {
      history.push(URL.SETUP.BASE)
    }

  }, [authenticated, user])

  return <></>
}

export default Home
