import { useTransition, animated } from "@react-spring/web"
import { spring } from "libs/constants"
import { SetupSlideSuccessInterface } from "libs/interfaces"
import React from "react"

const SetupSuccessSlide = ({ slide, open }: { slide: SetupSlideSuccessInterface; open: boolean }) => {
  const transition = useTransition(open, {
    config: spring,
    from: { opacity: 0, transform: "translateX(200px)" },
    enter: { opacity: 1, transform: "translateX(0px)" },
    leave: { opacity: 0, transform: "translateX(-200px)" }
  })

  return (
    <>
      {transition((style: any, item: boolean) => {
        return item ? (
          <animated.div className="absolute top-0 left-0 flex h-full w-full items-center justify-center" style={style}>
            <div className="absolute top-[50%] left-[50%] grid w-[360px] max-w-full translate-x-[-50%] translate-y-[-50%] transform grid-cols-1">
              <div className="mb-40 flex h-[380px] w-full justify-center">
                <img alt="" src={slide.image} />
              </div>
              <div className="mb-14 w-full text-center text-30 font-bold text-white">{slide.title}</div>
              <div className="w-full text-center text-14 text-white-40">{slide.text}</div>
            </div>
          </animated.div>
        ) : (
          <></>
        )
      })}
    </>
  )
}

export default SetupSuccessSlide
