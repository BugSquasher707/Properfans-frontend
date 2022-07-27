import NavSides from "components/nav/NavSides"
import WrapperNav from "components/wrappers/WrapperNav"
import { URL } from "libs/constants"
import React from "react"
import BackLink from "utils/buttons/back/BackLink"
import LineSmall from "utils/elements/LineSmall"
import LogoWhite from "utils/elements/LogoWhite"
import NavIntercom from "utils/nav/NavIntercom"

const NavSubscribe = () => {
  return (
    <>
      <WrapperNav bg={"bg-purple"}>
        <div className="flex w-full items-center justify-between">
          <div className="nav-gap flex items-center">
            <LogoWhite />
            <div className="nav-gap hidden md:flex">
              <LineSmall light={true} />
              <BackLink light={true} link={URL.FAN.BASE} title={"Back to Properfans"} />
            </div>
          </div>
          <div className="nav-gap flex items-center">
            <NavIntercom color="white" />
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

export default NavSubscribe
