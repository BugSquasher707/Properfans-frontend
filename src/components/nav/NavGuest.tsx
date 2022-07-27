import NavMenu from "components/nav/NavMenu"
import NavSides from "components/nav/NavSides"
import WrapperNav from "components/wrappers/WrapperNav"
import { URL } from "libs/constants"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import LineSmall from "utils/elements/LineSmall"
import SearchBar from "utils/inputs/SearchBar"
import NavLink from "utils/nav/NavLink"

const NavGuest = () => {
  return (
    <>
      <WrapperNav>
        <div className="flex w-full items-center justify-between">
          <div className="nav-gap flex items-center">
            <NavMenu />
            <div className="flow nav-gap hidden lg:grid lg:items-center">
              <LineSmall />
              <div className="hidden w-[350px] lg:flex xl:w-[450px]">
                <SearchBar />
              </div>
            </div>
          </div>
          <div className="nav-gap flex items-center">
            <div className="hidden xs:flex">
              <NavLink link={URL.HOME} title={"Sign In"} />
            </div>
            <ButtonPurple action={URL.HOME} title={"Get Started"} />
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

export default NavGuest
