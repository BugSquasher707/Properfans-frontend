import AnimationLogin from "components/animations/AnimationLogin"
import { useProps } from "contexts/PropsContext"
import { AnimationType } from "libs/enums"
import React from "react"

const Animations = () => {
  const { animation } = useProps()

  return (
    <>
      {
        {
          [AnimationType.None]: <></>,
          [AnimationType.Login]: <AnimationLogin />
        }[animation]
      }
    </>
  )
}

export default Animations
