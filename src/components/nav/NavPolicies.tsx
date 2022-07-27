import NavMenu from "components/nav/NavMenu"
import NavSides from "components/nav/NavSides"
import WrapperNav from "components/wrappers/WrapperNav"
import { URL } from "libs/constants"
import React, { useState } from "react"
import NavDropdown from "utils/nav/NavDropdown"
import NavLink from "utils/nav/NavLink"

const NavPolicies = () => {
  const [policies] = useState([
    {
      link: URL.POLICIES.COOKIES,
      title: "Cookies",
      icon: ""
    },
    {
      link: URL.POLICIES.DISCLAIMER,
      title: "Disclaimer",
      icon: ""
    },
    {
      link: URL.POLICIES.PRIVACY,
      title: "Privacy Policy",
      icon: ""
    },
    {
      link: URL.POLICIES.TERMS,
      title: "Service Terms",
      icon: ""
    }
  ])

  return (
    <>
      <WrapperNav>
        <div className="flex w-full items-center justify-between">
          <div className="nav-gap flex items-center">
            <NavMenu />
          </div>
          <div className="flow nav-gap hidden md:items-center lg:grid">
            <NavLink link={URL.POLICIES.COOKIES} title={"Cookies"} />
            <NavLink link={URL.POLICIES.DISCLAIMER} title={"Disclaimer"} />
            <NavLink link={URL.POLICIES.PRIVACY} title={"Privacy Policy"} />
            <NavLink link={URL.POLICIES.TERMS} title={"Service Terms"} />
          </div>
          <div className="flex lg:hidden">
            <NavDropdown dropdown={{ title: "Terms", data: policies }} right={true} />
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

export default NavPolicies
