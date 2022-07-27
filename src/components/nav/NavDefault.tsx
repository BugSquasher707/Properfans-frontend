import NavMenu from "components/nav/NavMenu"
import NavSides from "components/nav/NavSides"
import WrapperNav from "components/wrappers/WrapperNav"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import NavLink from "utils/nav/NavLink"

const NavDefault = () => {
  const { authenticated, user } = useProps()

  return (
    <>
      <WrapperNav>
        <div className="flex w-full items-center justify-between">
          <div className="nav-gap flex items-center">
            <NavMenu />
          </div>
          <div className="nav-gap flex items-center">
            {!authenticated ? (
              <>
                <div className="hidden xs:flex">
                  <NavLink link={URL.HOME} title={"Sign In"} />
                </div>
                <ButtonPurple action={URL.HOME} title={"Get Started"} />
              </>
            ) : (
              <>
                <ButtonPurple
                  action={user.creator ? URL.CREATOR.DASHBOARD.PERSONAL : URL.FAN.BASE}
                  title={"Get Started"}
                />
              </>
            )}
            <div className="nav-gap-sm flex items-center lg:hidden">
              <div className="h-20 border-r-1 border-grey-10"></div>
              <NavSides />
            </div>
          </div>
        </div>
      </WrapperNav>
    </>
  )
}

export default NavDefault
