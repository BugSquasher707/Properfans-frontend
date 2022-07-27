import { URL } from "libs/constants"
import React from "react"
import { FiLogIn } from "react-icons/fi"
import { Link } from "react-router-dom"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const FanSignIn = () => {
  return (
    <>
      <div className="flex w-full justify-center py-100">
        <div className="flex w-520 max-w-full flex-wrap">
          <div className="center mb-30 w-full">
            <FiLogIn className="text-40 text-purple" />
          </div>
          <div className="mb-12 w-full text-center text-24 font-bold text-black">You must sign in to continue</div>
          <div className="mb-60 w-full text-center text-14 text-grey-40">
            Before you&apos;re allowed to view the content you have to sign in
          </div>
          <div className="center mb-12 w-full">
            <div className="z-20 -mr-14 h-50 w-50 rounded-full border-4 border-white">
              <img alt="" className="h-42 w-42 rounded-full" src={"/influencers/casey.png"} />
            </div>
            <div className="z-10 -mr-14 h-50 w-50 rounded-full border-4 border-white">
              <img alt="" className="h-42 w-42 rounded-full" src={"/influencers/casey.png"} />
            </div>
            <div className="z-0 h-50 w-50 rounded-full border-4 border-white">
              <img alt="" className="h-42 w-42 rounded-full" src={"/influencers/casey.png"} />
            </div>
          </div>
          <div className="mb-60 w-full text-center text-14 text-grey-40">
            Join those and <span className="font-bold text-purple">10,042 other properfans</span>
          </div>
          <div className="mb-30 w-full">
            <ButtonPurple action={URL.HOME} title={"Sign In"} full />
          </div>
          <div className="mb-60 w-full text-center text-14 text-grey-40">
            You don&apos;t have an account yet?{" "}
            <Link className="font-bold text-purple" to={URL.HOME}>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default FanSignIn
