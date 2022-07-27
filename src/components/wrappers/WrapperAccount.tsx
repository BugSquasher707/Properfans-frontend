import AccountSideLinks from "components/account/AccountSideLinks"
import MenuFan from "components/menus/MenuFan"
import NavFan from "components/nav/NavFan"
import WrapperSwipe from "components/wrappers/WrapperSwipe"
import { URL } from "libs/constants"
import React from "react"
import { Link } from "react-router-dom"
import { useIntercom } from "react-use-intercom"

const WrapperAccount = ({ children }: { children: any }) => {
  const { boot } = useIntercom()

  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-full bg-grey-2"></div>
      <NavFan bg={"bg-grey-2"} />
      <WrapperSwipe>
        <div className="pag account flex w-full justify-center">
          <div className="w-full max-w-screen-xl">
            <div className="relative grid w-full grid-cols-1 items-start gap-20 md:gap-40 lg:grid-cols-[auto,1fr]">
              <div className="stick hidden w-full lg:flex">
                <AccountSideLinks />
              </div>
              <div className="w-f grid grid-cols-1 gap-12 sm:gap-20 md:gap-30">
                {children}
                <div className="flex w-full items-center justify-center">
                  <div className="flex w-full max-w-screen-xl flex-wrap items-center justify-between space-x-[0px] space-y-[12px] md:flex-nowrap md:space-x-[12px] md:space-y-[0px]">
                    <div className="w-full text-center text-12 font-bold text-grey-40 md:w-auto md:text-left">
                      © {new Date().getFullYear()} Properfans, All rights reserved
                    </div>
                    <div className="flex w-full items-center justify-center space-x-[20px] md:w-auto">
                      <button className="text-12 font-bold text-grey-40 hover:text-black" onClick={() => boot()}>
                        Help center
                      </button>
                      <Link className="text-12 font-bold text-grey-40 hover:text-black" to={URL.POLICIES.TERMS}>
                        Terms
                      </Link>
                      <Link className="text-12 font-bold text-grey-40 hover:text-black" to={URL.POLICIES.PRIVACY}>
                        Privacy policy
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </WrapperSwipe>
      <MenuFan />
    </>
  )
}

export default WrapperAccount
