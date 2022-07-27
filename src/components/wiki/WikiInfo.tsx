import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import { ReactComponent as Bundle } from "assets/img/propercoins/propercoins_7.svg"
import { URL } from "libs/constants"
import React from "react"
import { HiOutlineArrowNarrowRight } from "react-icons/hi"
import { Link } from "react-router-dom"

const WikiInfo = () => {
  return (
    <>
      <div className="grid  w-full grid-cols-1 items-start gap-30 lg:grid-cols-2 lg:gap-50 xl:gap-100">
        <div className="flow relative grid w-full grid-cols-1 justify-end gap-30 lg:grid">
          <div className="index-0 absolute top-40 left-40 h-260 w-260 rounded-4 bg-purple-10 lg:h-320 lg:w-320 xl:top-50 xl:left-50 xl:h-400 xl:w-400"></div>
          <div className="index-10 relative flex h-260 w-260 items-center justify-center rounded-4 bg-purple lg:h-320 lg:w-320 xl:h-400 xl:w-400">
            <Bundle className="w-[70%]" />
            <Propercoin className="absolute top-30 right-30 h-50 w-50 fill-current text-white" />
          </div>
        </div>
        <div className="grid w-full gap-40">
          <div className="grid w-full gap-10">
            <div className="mt-80 w-full text-32 font-black text-black">What are propercoins?</div>
          </div>
          <div className="w-full text-16 text-grey-40">
            The propercoin is a currency that gets you access to exclusive corners of the creator economy.
          </div>
          <Link className="flex w-full" to={URL.FAN.SHOP}>
            <div className="mr-12 font-bold text-purple">Read More</div>
            <HiOutlineArrowNarrowRight className="text-purple" size="1.2em" />
          </Link>
        </div>
      </div>
    </>
  )
}

export default WikiInfo
