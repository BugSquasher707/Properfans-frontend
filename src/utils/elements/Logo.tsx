import { ReactComponent as LogoIcon } from "assets/img/properfans.svg"
import { ReactComponent as LogoIconSmall } from "assets/img/properfansIcon.svg"
import React from "react"
import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link className="max-h-50" to="/">
      <LogoIcon className="hidden fill-current text-black sm:flex" />
      <LogoIconSmall className="flex fill-current text-black sm:hidden" />
    </Link>
  )
}

export default Logo
