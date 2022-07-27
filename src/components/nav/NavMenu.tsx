import { parseUrl } from "api/integration/functions"
import AccountMenuWrapper from "components/account/sides/AccountMenuWrapper"
import NavProfile from "components/nav/NavProfile"
import { useProps } from "contexts/PropsContext"
import React, { useEffect, useState } from "react"
import DropdownLogo from "utils/dropdowns/DropdownLogo"

const NavMenu = ({ options }: { options?: boolean }) => {
  const { path } = useProps()

  const [side, setSide] = useState("")

  useEffect(() => {
    setSide(parseUrl(path))
  }, [path])

  return (
    <>
      <div className="w-full lg:w-auto">
        <div className="hidden lg:flex">
          <DropdownLogo />
        </div>
        <div className="flex w-full items-center justify-start lg:hidden">
          {options && side === "account" ? <AccountMenuWrapper /> : <NavProfile />}
        </div>
      </div>
    </>
  )
}

export default NavMenu
