import { ReactComponent as EllingsenGroup } from "assets/img/ellingsengroup.svg"
import React from "react"

const FooterRights = () => {
  return (
    <>
      <div className="flex h-16 w-full justify-center sm:w-auto">
        <EllingsenGroup className="fill-current text-black" />
      </div>
      <div className="flex w-full justify-center text-14 text-grey-40 sm:w-auto">
        © {new Date().getFullYear()} Properfans, All rights reserved
      </div>
    </>
  )
}

export default FooterRights
