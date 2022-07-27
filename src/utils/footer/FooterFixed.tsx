import { ReactComponent as EllingsenGroup } from "assets/img/ellingsengroup.svg"
import React from "react"
import { Link } from "react-router-dom"

const FooterFixed = () => {
  return (
    <>
      <div className="p-side fixed left-0 bottom-0 z-20 flex h-60 w-full bg-white sm:h-80">
        <div className="center flex h-60 w-full flex-wrap sm:h-80">
          <Link className="flex max-w-full flex-wrap justify-center gap-10 sm:gap-20" to="/">
            <div className="flex w-full justify-center sm:w-auto">
              <EllingsenGroup className="fill-current text-black" />
            </div>
            <div className="hidden h-24 border-r border-grey-10 sm:flex"></div>
            <div className="hidden text-14 text-grey-40 sm:flex">An ellingsengroup platform</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default FooterFixed
