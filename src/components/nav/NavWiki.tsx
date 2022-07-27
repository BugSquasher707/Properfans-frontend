import WrapperNav from "components/wrappers/WrapperNav"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import DropdownLogo from "utils/dropdowns/DropdownLogo"
import NavLanguage from "utils/nav/NavLanguage"
import NavLink from "utils/nav/NavLink"
import NavTheme from "utils/nav/NavTheme"

const NavWiki = () => {
  const { authenticated, user } = useProps()

  return (
    <WrapperNav bg={"bg-white"} scroll={true}>
      <div className="top-0 left-0 z-40 w-full min-w-[300px] pb-8 sm:pb-0">
        <div className="p-side nav flex w-full items-center justify-center ">
          <div className="flow grid w-full max-w-screen-xl items-center justify-between sm:gap-20">
            <DropdownLogo />
            <div className="flow nav-gap grid items-center">
              <div className="hidden">
                <NavLanguage />
              </div>
              <NavTheme />
              {authenticated ? (
                <ButtonPurple action={user.creator ? URL.CREATOR.BASE : URL.FAN.BASE} title={"Get Started"} />
              ) : (
                <>
                  <div className="hidden xs:flex">
                    <NavLink link={URL.HOME} title={"Sign In"} />
                  </div>
                  <ButtonPurple action={URL.HOME} title={"Get Started"} />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </WrapperNav>
  )
}

export default NavWiki
