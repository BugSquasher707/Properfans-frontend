import FanProfile from "components/fan/FanProfile"
import { useProps } from "contexts/PropsContext"
import React from "react"

const FanDashboard = () => {
  const { user } = useProps()

  return (
    <>
      <FanProfile profile={user} />
    </>
  )
}

export default FanDashboard
