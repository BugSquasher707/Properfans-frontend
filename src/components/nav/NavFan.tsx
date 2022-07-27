import NavMenu from "components/nav/NavMenu"
import NavSides from "components/nav/NavSides"
import WrapperNav from "components/wrappers/WrapperNav"
import React from "react"
import LineSmall from "utils/elements/LineSmall"
import SearchBar from "utils/inputs/SearchBar"
import NavCart from "utils/nav/NavCart"
import NavTheme from "utils/nav/NavTheme"
import NavTooltips from "utils/nav/NavTooltips"
import Profile from "utils/profile/Profile"

const NavFan = ({ bg }: { bg?: string }) => {
  return (
    <>
      <WrapperNav bg={bg}>
        <div className="flex w-full items-center justify-between">
          <div className="nav-gap flex w-full items-center justify-start">
            <NavMenu options={true} />
            <div className="flow nav-gap hidden lg:grid lg:items-center">
              <LineSmall />
              <div className="hidden w-[350px] lg:flex xl:w-[450px]">
                <SearchBar />
              </div>
            </div>
          </div>
          <div className="nav-gap-sm flex items-center">
            <NavTheme />
            <NavCart />
            <div className="hidden h-20 border-r-1 border-grey-10 lg:flex"></div>
            <NavTooltips />
            <Profile />
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

export default NavFan
