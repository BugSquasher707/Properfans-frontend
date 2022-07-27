import FanProfile from "components/fan/FanProfile"
import { ProfileInterface } from "libs/interfaces"
import React, { useState } from "react"

const FanInvite = () => {
  const [profile] = useState<ProfileInterface>({
    id: "",
    avatar: "",
    banner: "",
    biography: "",
    userName: "Maestro",
    verified: true,
    handle: "@maestro"
  })

  return (
    <>
      <FanProfile profile={profile} />
    </>
  )
}

export default FanInvite
