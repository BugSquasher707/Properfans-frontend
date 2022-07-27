import { ReactComponent as LoginBg } from "assets/img/animations/bg_login.svg"
import { ReactComponent as LogoInner } from "assets/img/animations/logo_inner.svg"
import { ReactComponent as LogoOuter } from "assets/img/animations/logo_outer.svg"
import { useProps } from "contexts/PropsContext"
import { AnimationType } from "libs/enums"
import React, { useEffect, useState } from "react"
import Wrapper from "utils/elements/Wrapper"

const AnimationLogin = () => {
  const { setAnimation } = useProps()

  const [fade, setFade] = useState(false)
  const [fadeEnd, setFadeEnd] = useState(false)
  const [spin, setSpin] = useState(false)
  const [spinEnd, setSpinEnd] = useState(false)
  const [zoom, setZoom] = useState(false)
  const [zoomEnd, setZoomEnd] = useState(false)

  useEffect(() => {
    if (!zoom) {
      onAnimate()
    }
  }, [zoom])

  const onAnimate = () => {
    setSpin(true)

    setTimeout(() => {
      setSpinEnd(true)
    }, 1700)

    setTimeout(() => {
      setFade(true)
      setZoom(true)
    }, 1800)

    setTimeout(() => {
      setFadeEnd(true)
    }, 2100)

    setTimeout(() => {
      setAnimation(AnimationType.None)
    }, 2500)

    setTimeout(() => {
      setZoomEnd(true)
    }, 2600)
  }

  return (
    <>
      <Wrapper open={open}>
        <div
          className={`fixed top-0 left-0 z-[999] flex h-screen w-screen transform items-center justify-center ease-login ${
            zoomEnd ? "duration-0" : "transition duration-[0.6s]"
          } ${zoom && !zoomEnd ? "scale-[100]" : "scale-[1]"}`}
        >
          <LoginBg className="absolute top-[50%] left-[50%] h-[5000px] w-[5000px] translate-x-[-50%] translate-y-[-50%] transform fill-current text-white" />
          <div
            className={`relative h-300 w-300 ${fadeEnd ? "duration-0 bg-transparent" : "transition duration-[0.2s]"} ${
              fade && !fadeEnd ? "bg-transparent" : "bg-white"
            }`}
          >
            <div
              className={`flex h-full w-full transform items-end ease-in-out ${
                spinEnd ? "duration-0" : "transition duration-[1.6s]"
              } ${spin && !spinEnd ? "rotate-[360deg]" : "rotate-[0deg]"}`}
            >
              <LogoOuter className="h-auto w-300" />
            </div>
            <LogoInner className="absolute top-[calc(50%+1px)] left-[50%] h-[154px] w-[154px] translate-x-[-50%] translate-y-[-50%] transform" />
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default AnimationLogin
