import { ReactComponent as LinkIcon } from "assets/img/link.svg"
import React from "react"
import { Link } from "react-router-dom"

const Terms = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center">
      <div className="m-4 w-full text-center text-14 text-white-40 md:w-auto lg:text-grey-40">
        By continuing, you agree to the
      </div>
      <Link className="m-4 flex items-center justify-center space-x-[8px]" to="/policies/terms">
        <LinkIcon className="ml-10 mr-5 fill-current text-white lg:text-black" />
        <div className="text-14 font-bold text-white lg:text-purple">Properfans Terms of Service</div>
      </Link>
    </div>
  )
}

export default Terms
