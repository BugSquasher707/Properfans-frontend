import { openLink } from "api/integration/functions"
import { ReactComponent as EllingsenTechGrey } from "assets/img/ellingsentech.svg"
import { ReactComponent as EllingsenXIcon } from "assets/img/ellingsenxIcon.svg"
import { ReactComponent as Logo } from "assets/img/properfansIcon.svg"
import EgxLogin from "ellingsenx/EgxLogin"
import { URL_EGX } from "ellingsenx/libs/constants"
import { URL } from "libs/constants"
import React from "react"
import { IoMdHeartEmpty } from "react-icons/io"
import { Link } from "react-router-dom"
import ButtonGradient from "utils/buttons/colors/ButtonGradient"

const AuthWelcome = () => {
  return (
    <>
      <div className="grid h-screen w-full grid-cols-2 gap-40 p-40">
        <div className="flex h-full w-full justify-center overflow-y-scroll">
          <div className="flex min-h-full w-[500px] max-w-full flex-col">
            <div className="flex w-full flex-grow items-start">
              <div className="grid w-full grid-cols-1 gap-40 sm:gap-60 md:gap-80">
                <div className="flex w-full justify-center">
                  <Logo className="h-52 w-auto" />
                </div>
                <div className="font-momentum-black w-full text-center text-24 leading-[140%] text-black sm:text-28 md:text-30">
                  Creators and their communities
                </div>
                <div className="grid w-full grid-cols-1 gap-20 sm:gap-30 md:gap-40">
                  <EgxLogin>
                    <ButtonGradient
                      action={() => null}
                      from={"from-[#0064FF]"}
                      gradient={"bg-gradient-to-r"}
                      icon={<EllingsenXIcon />}
                      title="Sign In via EllingsenX"
                      to={"to-[#00D0FF]"}
                      full
                    />
                  </EgxLogin>
                  <div className="w-full text-center text-16 text-grey-20">
                    Don&apos;t have account yet?{" "}
                    <button
                      className="tr text-16 font-bold text-grey-40 underline hover:text-black"
                      onClick={(e) => openLink(e, URL_EGX.REGISTER)}
                    >
                      Sign Up
                    </button>
                  </div>
                </div>
                <div className="w-full text-center text-14 leading-[140%] text-grey-20">
                  By using our services, you agree to our{" "}
                  <Link className="tr text-14 font-bold text-grey-40 hover:text-black" to={URL.POLICIES.TERMS}>
                    Terms
                  </Link>
                  . Learn how we use cookies and similar technology in our{" "}
                  <Link className="tr text-14 font-bold text-grey-40 hover:text-black" to={URL.POLICIES.COOKIES}>
                    Cookie Policy
                  </Link>
                  .
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-30">
              <EllingsenTechGrey className="h-26 fill-current text-grey-20" />
              <div className="h-30 border-r-1 border-grey-10"></div>
              <div className="flex items-center gap-6">
                <div className="text-14 text-grey-20">
                  <b>Ellingsen Technologies,</b> made with
                </div>
                <IoMdHeartEmpty className="text-18 text-grey-20" />
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-full rounded-20 bg-grey-4"></div>
      </div>
    </>
  )
}

export default AuthWelcome
