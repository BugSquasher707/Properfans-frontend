import { useTransition, animated } from "@react-spring/web"
import { spring } from "libs/constants"
import React from "react"

const TooltipShade = ({ open, handler }: { open: boolean; handler: any }) => {
  const transitionShade = useTransition(open, {
    config: spring,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return (
    <>
      {transitionShade((style: any, item: boolean) => {
        return item ? (
          <animated.div
            className="fixed top-0 left-0 right-0 bottom-0 z-30 !m-0 cursor-pointer bg-gradient-to-t from-grey-40 to-transparent transition"
            style={style}
            onClick={() => handler(false)}
          ></animated.div>
        ) : (
          <></>
        )
      })}
    </>
  )
}

export default TooltipShade
