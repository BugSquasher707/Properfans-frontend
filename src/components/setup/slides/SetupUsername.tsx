import { useProps } from "contexts/PropsContext"
import React, { useEffect } from "react"
import InputFieldModernCheck from "utils/inputs/InputFieldModernCheck"

const SetupUsername = ({ username, handler }: { username: string; handler: any }) => {
  const { user } = useProps()

  useEffect(() => {
    if (user.userName) {
      changeUsername(user.userName)
    }
  }, [user])

  const changeUsername = (value: any) => {
    handler.setUsername(value)
  }

  const stepUp = (key: string) => {
    if (key === "Enter") {
      handler.stepUp()
    }
  }

  return (
    <>
      <InputFieldModernCheck enter={stepUp} handler={changeUsername} placeholder={"Username"} value={username} />
    </>
  )
}

export default SetupUsername
