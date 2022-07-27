import NavMenu from "components/nav/NavMenu"
import NavSides from "components/nav/NavSides"
import WrapperNav from "components/wrappers/WrapperNav"
import React from "react"
import { GoHeart } from "react-icons/go"
import BackTo from "utils/buttons/back/BackTo"
import LineSmall from "utils/elements/LineSmall"
import NavLinkIcon from "utils/nav/NavLinkIcon"
import Profile from "utils/profile/Profile"

const NavSupport = () => {
  return (
    <>
      <WrapperNav>
        <div className="flex w-full items-center justify-between">
          <div className="nav-gap flex items-center">
            <NavMenu />
            <LineSmall />
            <NavLinkIcon
              data={{
                link: "/",
                title: "Donate",
                icon: <GoHeart className="text-14 text-white" />
              }}
            />
            <LineSmall />
            <BackTo link={"/"} title={"Creator"} />
          </div>
          <div className="nav-gap flex items-center">
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

export default NavSupport
