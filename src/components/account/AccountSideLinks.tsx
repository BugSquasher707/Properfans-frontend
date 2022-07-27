import AccountSideMenu from "components/account/AccountSideMenu"
import { URL } from "libs/constants"
import React from "react"
import ButtonBack from "utils/buttons/back/ButtonBack"

const AccountSideLinks = () => {
  return (
    <>
      <div className="relative grid w-[270px] grid-cols-1 items-start">
        <div className="grid w-full grid-cols-1 items-start">
          <div className="grid w-full grid-cols-1 gap-20 md:gap-40">
            <div className="hidden w-full justify-start lg:flex">
              <ButtonBack link={URL.FAN.BASE} title={"Back to Fan Side"} />
            </div>
            <AccountSideMenu />
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountSideLinks
