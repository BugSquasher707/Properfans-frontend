import NavMenu from "components/nav/NavMenu"
import NavSides from "components/nav/NavSides"
import WrapperNav from "components/wrappers/WrapperNav"
import { useProps } from "contexts/PropsContext"
import { OverlayType } from "libs/enums"
import React from "react"
import LineSmall from "utils/elements/LineSmall"
import SearchBar from "utils/inputs/SearchBar"
import NavCart from "utils/nav/NavCart"
import NavTheme from "utils/nav/NavTheme"
import NavTooltips from "utils/nav/NavTooltips"
import Profile from "utils/profile/Profile"

const NavFriends = ({ bg }: { bg?: string }) => {
  const { setOverlay } = useProps()

  return (
    <>
      <WrapperNav bg={bg}>
        <div className="flex w-full items-center justify-between">
          <div className="nav-gap flex w-full items-center justify-start">
            <NavMenu />
            <div className="flow nav-gap hidden lg:grid lg:items-center">
              <LineSmall />
              <div className="hidden w-[350px] lg:flex xl:w-[450px]">
                <SearchBar />
              </div>
            </div>
          </div>
          <div className="nav-gap-sm hidden items-center lg:flex">
            <NavTheme />
            <NavCart />
            <div className="h-20 border-r-1 border-grey-10"></div>
            <NavTooltips />
            <Profile />
          </div>
          <div className="nav-gap-sm flex lg:hidden">
            <button
              className="flex h-36 w-100 items-center justify-center rounded-full bg-purple text-12 font-bold text-white sm:w-[150px]"
              onClick={() => setOverlay(OverlayType.Search)}
            >
              Search users
            </button>
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

export default NavFriends
