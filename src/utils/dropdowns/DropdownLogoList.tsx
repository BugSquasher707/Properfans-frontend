import { useTransition, animated } from "@react-spring/web"
import { spring } from "libs/constants"
import React from "react"
import DropdownLogoLinks from "utils/dropdowns/DropdownLogoLinks"

const DropdownLogoList = ({ open }: { open: boolean }) => {
  const transition = useTransition(open, {
    config: spring,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return (
    <>
      {transition((style: any, item: boolean) => {
        return item ? (
          <animated.div
            className="absolute top-50 z-30 w-[160px] overflow-hidden rounded-4 border-1 border-grey-6 bg-white transition-all duration-[.3s] ease-in-out sm:w-[230px]"
            style={style}
          >
            <div className="transform-all grid w-full grid-cols-1 gap-10 p-12 duration-[.3s] ease-in-out">
              <div className="4xl:flex hidden w-full border-b-1 border-grey-12"></div>
              <DropdownLogoLinks />
            </div>
          </animated.div>
        ) : (
          <></>
        )
      })}
    </>
  )
}

export default DropdownLogoList
