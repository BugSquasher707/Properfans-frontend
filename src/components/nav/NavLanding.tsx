import CookieBar from "components/cookie/CookieBar"
import NavMenu from "components/nav/NavMenu"
import NavSides from "components/nav/NavSides"
import WrapperNav from "components/wrappers/WrapperNav"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import LineSmall from "utils/elements/LineSmall"
import NavBanner from "utils/nav/NavBanner"
import NavLanguage from "utils/nav/NavLanguage"
import NavLink from "utils/nav/NavLink"
import NavTheme from "utils/nav/NavTheme"

const NavLanding = () => {
  const { authenticated, user } = useProps()

  const contentAbout = [
    {
      title: "Introduction",
      text: "Learn more about Properfans, monetize your content",
      link: "introduction"
    },
    {
      title: "Our Mission",
      text: "What we are trying to achieve and how",
      link: "mission"
    },
    {
      title: "Core Values",
      text: "Our core values define and guide us",
      link: "values"
    },
    {
      title: "Team",
      text: "List of staff members, the dream team",
      link: "team"
    },
    {
      title: "Other Products",
      text: "Other creator products, made by Ellingsen Group",
      link: "products"
    },
    {
      title: "Mission Accomplishments",
      text: "What we have already achieved on the journey",
      link: "accomplishments"
    }
  ]

  return (
    <>
      <WrapperNav>
        <div className="grid w-full grid-cols-[1fr,auto] items-center justify-between gap-12">
          <div className="nav-gap flex items-center">
            <NavMenu />
            <div className="nav-gap hidden items-center md:flex">
              <LineSmall />
              <NavBanner data={{ title: "About Us", data: contentAbout }} />
            </div>
          </div>
          <div className="nav-gap flex items-center">
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
            <div className="nav-gap-sm flex items-center lg:hidden">
              <div className="h-20 border-r-1 border-grey-10"></div>
              <NavSides />
            </div>
          </div>
        </div>
      </WrapperNav>
      <CookieBar />
    </>
  )
}

export default NavLanding
