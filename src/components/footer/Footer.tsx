import { useProps } from "contexts/PropsContext"
import { URL_EGX } from "ellingsenx/libs/constants"
import { URL } from "libs/constants"
import { LinkGroupInterface, LinkInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import LinkGroup from "utils/buttons/LinkGroup"
import Logo from "utils/elements/Logo"
import FooterRights from "utils/footer/FooterRights"
import FooterSocials from "utils/footer/FooterSocials"

const Footer = () => {
  const { authenticated, onReset } = useProps()

  const linksCompany: LinkInterface[] = [
    { link: URL.POLICIES.BASE, title: "Policies" },
    { link: URL.GUIDELINES.BASE, title: "Guidelines" }
  ]

  const sectionCompany: LinkGroupInterface = {
    title: "Company",
    data: linksCompany
  }

  const linksLinks: LinkInterface[] = [
    { link: URL_EGX.REGISTER, title: "Forgotten Password" },
    { link: URL.TWOFACTOR.BASE, title: "Two-Factor" }
  ]

  const sectionLinks: LinkGroupInterface = {
    title: "Useful Links",
    data: linksLinks
  }

  const linksAccount: LinkInterface[] = authenticated
    ? [{ link: "", action: onReset, title: "Sign Out" }]
    : [
        { link: URL.HOME, title: "Sign Up" },
        { link: URL.HOME, title: "Sign In" }
      ]

  const sectionAccount: LinkGroupInterface = {
    title: "Account",
    data: linksAccount
  }

  return (
    <>
      <div className="center w-screen min-w-[300px] bg-grey-3 px-20 lg:px-30">
        <div className="between flex w-full max-w-screen-xl flex-wrap">
          <div className="grid w-full grid-cols-1 flex-wrap items-start gap-30 py-30 lg:grid-cols-[410px,1fr] lg:gap-50 lg:py-60">
            <div className="w-full">
              <div className="mb-20 flex w-full justify-center lg:mb-40 lg:justify-start">
                <Logo />
              </div>
              <div className="mb-10 w-full text-center text-32 font-black text-black lg:text-left">
                Become a properfan
              </div>
              <div className="flex w-full justify-center lg:justify-start">
                <div className="mb-20 w-[410px] max-w-full text-center text-16 text-grey-40 md:mb-30 lg:text-left">
                  Support and interact with your favorite creators and enjoy their exclusive content
                </div>
              </div>
              <div className="flex w-full justify-center lg:justify-start">
                <ButtonPurple action={authenticated ? URL.FAN.BASE : URL.HOME} title={"Get Started"} small />
              </div>
            </div>
            <div className="flex w-full items-start justify-center lg:justify-end">
              <div className="lg-flow grid w-full grid-cols-1 justify-between gap-20 md:w-auto md:gap-30 lg:grid-cols-none lg:gap-50 xl:gap-100">
                <div className="flex w-full items-start sm:w-auto">
                  <LinkGroup data={sectionCompany} />
                </div>
                <div className="flex w-full items-start sm:w-auto">
                  <LinkGroup data={sectionLinks} />
                </div>
                <div className="flex w-full items-start sm:w-auto">
                  <LinkGroup data={sectionAccount} />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full border-b-1 border-grey-10"></div>
          <div className="grid w-full grid-cols-1 gap-20 py-30 xl:grid-cols-2">
            <div className="grid w-full grid-cols-1 items-center justify-center gap-20 sm:grid-flow-col-dense sm:grid-cols-none xl:w-auto xl:justify-start">
              <FooterRights />
            </div>
            <div className="grid w-full grid-cols-1 items-center justify-center gap-20 sm:grid-flow-col-dense sm:grid-cols-none xl:w-auto xl:justify-end">
              <div className="sm:auto flex w-full flex-wrap justify-center space-x-0 sm:space-x-[20px] sm:space-y-0">
                <Link
                  className="w-full text-center text-14 text-grey-40 hover:text-black sm:w-auto"
                  to={URL.POLICIES.DISCLAIMER}
                >
                  Disclaimer
                </Link>
                <Link
                  className="w-full text-center text-14 text-grey-40 hover:text-black sm:w-auto"
                  to={URL.POLICIES.PRIVACY}
                >
                  Privacy Policy
                </Link>
                <Link
                  className="w-full text-center text-14 text-grey-40 hover:text-black sm:w-auto"
                  to={URL.POLICIES.TERMS}
                >
                  Service Terms
                </Link>
              </div>
              <FooterSocials />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
