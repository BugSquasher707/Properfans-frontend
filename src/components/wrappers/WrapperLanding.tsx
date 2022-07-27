import { ReactComponent as LogoWhite } from "assets/img/logo_white_full.svg"
import Wrapper from "components/wrappers/Wrapper"
import { URL } from "libs/constants"
import React from "react"
import { Link } from "react-router-dom"

const WrapperLanding = ({ children, logo }: { children: any; logo?: boolean }) => {
  return (
    <>
      <div className="light-r fixed top-0 left-0 z-[60] flex h-screen w-full min-w-[300px] items-center justify-center bg-purple">
        <img
          alt=""
          className="absolute top-[50%] left-[50%] min-h-full min-w-full translate-x-[-50%] translate-y-[-50%] transform"
          src={"/gradients/gradient_bg.png"}
        />
        <div className="relative flex max-h-[100vh] w-full justify-center p-20">
          <div className="relative grid max-h-full w-[630px] max-w-full grid-cols-1 gap-20 overflow-y-auto sm:gap-30 md:gap-40">
            <Wrapper open={logo}>
              <div className="flex w-full justify-center">
                <Link to={URL.HOME}>
                  <LogoWhite className="w-60 sm:w-80 md:w-100" />
                </Link>
              </div>
            </Wrapper>
            {children}
          </div>
        </div>
      </div>
    </>
  )
}

export default WrapperLanding
