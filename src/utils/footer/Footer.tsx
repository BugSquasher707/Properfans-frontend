import { ReactComponent as EllingsenGroup } from "assets/img/ellingsengroup.svg"
import { URL } from "libs/constants"
import React from "react"
import { Link } from "react-router-dom"

const Footer = ({ purple }: { purple?: boolean }) => {
  return (
    <>
      <Link
        className={`center flex h-60 w-full flex-wrap lg:h-80 ${purple ? "bg-purple lg:bg-white" : "bg-white"}`}
        to={URL.INFORMATION.BASE}
      >
        <div className="flex w-full flex-wrap justify-center gap-10 sm:gap-20">
          <div className="flex w-full justify-center sm:w-auto">
            <EllingsenGroup className="fill-current text-black" />
          </div>
          <div className="hidden h-24 border-r border-grey-10 sm:flex"></div>
          <div className="hidden text-14 text-grey-40 sm:flex">An ellingsengroup platform</div>
        </div>
      </Link>
    </>
  )
}

export default Footer
