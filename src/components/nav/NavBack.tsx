import NavMenu from "components/nav/NavMenu"
import NavSides from "components/nav/NavSides"
import WrapperNav from "components/wrappers/WrapperNav"
import React from "react"
import BackReturn from "utils/buttons/back/BackReturn"
import LineSmall from "utils/elements/LineSmall"
import NavIntercom from "utils/nav/NavIntercom"

const NavBack = () => {
  return (
    <>
      <WrapperNav>
        <div className="flex w-full items-center justify-between">
          <div className="nav-gap flex items-center">
            <NavMenu />
            <div className="flow nav-gap hidden md:grid">
              <LineSmall />
              <BackReturn />
            </div>
          </div>
          <div className="nav-gap flex items-center">
            <NavIntercom />
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

export default NavBack
