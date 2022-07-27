// import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React from "react"
import DropdownLogoLink from "utils/dropdowns/DropdownLogoLink"

const DropdownLogoLinks = () => {
  // const { user } = useProps()

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-10">
        <div className="w-full text-12 font-bold text-grey-40">Platform</div>
        <div className="grid w-full grid-cols-1 gap-4">
          <DropdownLogoLink link={URL.FAN.BASE} title="Feed" />
          <DropdownLogoLink link={URL.CHAT.BASE} title="Chat" />
          <DropdownLogoLink link={URL.MEET.BASE} title="Meet" />
          <DropdownLogoLink link={URL.LIVE.BASE} title="Live" />
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-10">
        <div className="w-full text-12 font-bold text-grey-40">Dashboard</div>
        <div className="grid w-full grid-cols-1 gap-4">
          <DropdownLogoLink link={URL.ACCOUNT.BASE} title="Account" />
          {/* <DropdownLogoLink link={!user.creator ? URL.APPLICATION.SETUP : URL.CREATOR.BASE} title="Creator" /> */}
          <DropdownLogoLink link={URL.CREATOR.BASE} title="Creator" />
        </div>
      </div>
    </>
  )
}

export default DropdownLogoLinks
