import { openLink } from "api/integration/functions"
import { ReactComponent as Logo } from "assets/img/logo_white_full.svg"
import { useProps } from "contexts/PropsContext"
import { URL_EGX } from "ellingsenx/libs/constants"
import { URL } from "libs/constants"
import React from "react"
import { FiLogIn } from "react-icons/fi"
import { Link } from "react-router-dom"
import Wrapper from "utils/elements/Wrapper"

const SignInBar = () => {
  const { authenticated } = useProps()

  return (
    <>
      <Wrapper open={!authenticated}>
        <div className="light-r p-side fixed right-0 bottom-0 left-0 flex h-[76px] w-full items-center justify-center bg-purple">
          <img alt="" className="absolute top-0 right-0 h-[76px]" src={"/gradients/banner.png"} />
          <div className="relative flex w-full max-w-screen-xl items-center justify-between space-x-[10px]">
            <div className="flex items-center space-x-[24px]">
              <Logo className="w-32" />
              <div className="hidden items-center space-x-[20px] md:flex">
                <div className="flex text-14 font-bold text-white">Join the exclusive social media platform</div>
                <div className="hidden h-24 border-r-1 border-white-10 xl:flex"></div>
                <div className="hidden text-12 font-bold text-white-40 xl:flex">
                  To use Properfans without restrictions please sign in/up
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-[10px]">
              <Link
                className="flex h-36 items-center justify-center rounded-4 border-2 border-white-10 px-24 text-14 font-bold text-white active:bg-white active:text-black hover:bg-white-10"
                to={URL.HOME}
              >
                Sign In
              </Link>
              <button
                className="flex h-36 items-center justify-center space-x-[10px] rounded-4 bg-white px-20"
                onClick={(e) => openLink(e, URL_EGX.REGISTER)}
              >
                <div className="text-bold text-14 font-bold text-black">Sign Up</div>
                <FiLogIn className="text-16 text-purple" />
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default SignInBar
