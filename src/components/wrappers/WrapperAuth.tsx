import { ReactComponent as LogoWhite } from "assets/img/logo_white_full.svg"
import NavMenu from "components/nav/NavMenu"
import React from "react"
import BackReturn from "utils/buttons/back/BackReturn"
import Footer from "utils/footer/Footer"

const WrapperAuth = ({ children }: { children: any }) => {
  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-full bg-purple lg:bg-white"></div>
      <div className="relative w-full">
        <div className="p-side between fixed top-0 left-0 z-30 hidden h-60 w-full bg-white sm:h-80 lg:flex lg:w-1/2">
          <NavMenu />
          <BackReturn />
        </div>
        <div className="w-full">
          <div className="pag auth grid w-full grid-cols-1 items-center justify-center bg-purple lg:items-start lg:bg-white">
            <div className="grid w-full grid-cols-1 justify-center gap-40">
              <div className="flex w-full justify-center lg:hidden">
                <LogoWhite className="w-60" />
              </div>
              <div className="flex w-full justify-center">{children}</div>
            </div>
            <div className="p-side absolute left-0 bottom-0 z-20 hidden w-full bg-white lg:fixed lg:flex lg:w-1/2">
              <Footer purple={true} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WrapperAuth
