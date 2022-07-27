import { ReactComponent as LogoWhiteIconSmall } from "assets/img/logo_white_full.svg"
import { ReactComponent as LogoWhiteIcon } from "assets/img/properfans_white.svg"
import React from "react"
import { Link } from "react-router-dom"

const LogoWhite = () => {
  return (
    <Link className="max-h-50" to="/">
      <LogoWhiteIcon className="hidden h-38 fill-current text-black xl:flex" />
      <LogoWhiteIconSmall className="flex h-38 w-38 fill-current text-black xl:hidden" />
    </Link>
  )
}

export default LogoWhite
