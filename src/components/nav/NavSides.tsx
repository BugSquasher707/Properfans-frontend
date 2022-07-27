import { useTransition, animated } from "@react-spring/web"
import NavMenuSides from "components/nav/menu/NavMenuSides"
import { spring } from "libs/constants"
import React, { useState } from "react"
import { IoGrid } from "react-icons/io5"
import TooltipBackground from "utils/modals/TooltipBackground"

const NavSides = ({ full }: { full?: boolean }) => {
  const [openSides, setOpenSides] = useState(false)

  const transitionSides = useTransition(openSides, {
    config: spring,
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%)" }
  })

  return (
    <>
      <button className="group flex items-center justify-center" onClick={() => setOpenSides(true)}>
        <IoGrid className="text-24 text-grey-40 group-hover:text-black" />
      </button>
      {transitionSides((style: any, item: boolean) => {
        return item ? (
          <animated.div
            className={`fixed left-0 top-0 bottom-0 z-60 !m-0 flex h-full w-screen transform items-end pt-60 transition duration-300 ${
              full ? "" : "pb-0"
            }`}
            style={style}
          >
            <TooltipBackground grad={true} handler={setOpenSides} />
            <div className="relative z-40 max-h-full w-full overflow-auto">
              <NavMenuSides handlerSides={setOpenSides} />
            </div>
          </animated.div>
        ) : (
          <></>
        )
      })}
    </>
  )
}

export default NavSides
