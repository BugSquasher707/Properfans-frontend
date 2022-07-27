import { useTransition, animated } from "@react-spring/web"
import { parseUrl } from "api/integration/functions"
import NavMenuProfile from "components/nav/menu/NavMenuProfile"
import { useProps } from "contexts/PropsContext"
import { spring } from "libs/constants"
import React, { useState } from "react"
import { RiMenu2Fill } from "react-icons/ri"

const NavProfile = () => {
  const { path } = useProps()

  const [openMenu, setOpenMenu] = useState(false)

  const transitionMenu = useTransition(openMenu, {
    config: spring,
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%)" }
  })

  return (
    <>
      <button
        className="group flex w-full items-center justify-start space-x-[12px]"
        onClick={() => {
          setOpenMenu(!openMenu)
        }}
      >
        <RiMenu2Fill className="text-24 text-grey-40 group-hover:text-black xl:hidden" />
        <div className="w-full text-left text-20 font-bold capitalize text-black sm:text-22">{parseUrl(path)}</div>
      </button>
      {transitionMenu((style: any, item: boolean) => {
        return item ? (
          <animated.div
            className="fixed bottom-0 top-0 left-0 z-60 !m-0 w-screen transform transition duration-300"
            style={style}
          >
            <NavMenuProfile handlerMenu={setOpenMenu} />
          </animated.div>
        ) : (
          <></>
        )
      })}
    </>
  )
}

export default NavProfile
