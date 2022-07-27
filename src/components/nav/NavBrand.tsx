import NavMenu from "components/nav/NavMenu"
import NavSides from "components/nav/NavSides"
import WrapperNav from "components/wrappers/WrapperNav"
import React from "react"
import NavTheme from "utils/nav/NavTheme"

const NavBrand = () => {
  return (
    <>
      <WrapperNav>
        <div className="flex w-full items-center justify-between">
          <div className="nav-gap flex items-center">
            <NavMenu />
          </div>
          <div className="nav-gap flex items-center">
            <NavTheme />
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

export default NavBrand
