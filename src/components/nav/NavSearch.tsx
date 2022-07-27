import { statusApi } from "api/endpoints/status"
import NavMenu from "components/nav/NavMenu"
import NavSides from "components/nav/NavSides"
import WrapperNav from "components/wrappers/WrapperNav"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React, { useState } from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import LineSmall from "utils/elements/LineSmall"
import InputSearch from "utils/inputs/InputSearch"
import NavLink from "utils/nav/NavLink"

const NavSearch = () => {
  const { token } = useProps()

  const [search, setSearch] = useState("")

  const onSubmit = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      // TODO - Search
    }
  }

  return (
    <>
      <WrapperNav>
        <div className="flex w-full items-center justify-between">
          <div className="nav-gap flex items-center">
            <NavMenu />
            <LineSmall />
            <div className="w-200">
              <InputSearch handler={setSearch} handlerSubmit={onSubmit} title="Search..." value={search} />
            </div>
          </div>
          <div className="nav-gap-sm flex items-center">
            <NavLink link={URL.HOME} title={"Sign In"} />
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

export default NavSearch
