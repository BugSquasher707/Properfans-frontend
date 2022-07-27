import { getterCookieConsent, setterCookieConsent } from "api/integration/cookies"
import { ReactComponent as Logo } from "assets/img/logo_white_full.svg"
import Wrapper from "components/wrappers/Wrapper"
import React, { useEffect, useState } from "react"
import { useCookies } from "react-cookie"

const CookieBar = () => {
  const [cookies, setCookie] = useCookies(["consent"])

  const [consent, setConsent] = useState(false)

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    const newCookie = getterCookieConsent(cookies.consent)

    setConsent(newCookie ? true : false)
  }

  return (
    <>
      <Wrapper open={!consent}>
        <div className="light-r p-side fixed right-0 bottom-0 left-0 z-10 flex h-[76px] w-full items-center justify-center bg-purple">
          <img alt="" className="absolute top-0 right-0 h-[76px]" src={"/gradients/banner.png"} />
          <div className="relative flex w-full max-w-screen-xl items-center justify-between space-x-[10px]">
            <div className="flex items-center space-x-[30px]">
              <Logo className="w-32" />
              <div className="flex items-center space-x-[20px]">
                <div className="hidden text-14 font-bold text-white md:flex">Cookie Notice</div>
                <div className="hidden h-24 border-r-1 border-white-10 xl:flex"></div>
                <div className="hidden gap-4 text-12 font-bold text-white-40 xl:flex">
                  We use cookies to further understand our traffic. Review our Privacy policy terms{" "}
                  <span className="text-white underline">here</span>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-[10px]">
              <button
                className="flex h-36 items-center justify-center space-x-[10px] space-y-[10x] rounded-4 bg-white px-20"
                onClick={() => {
                  setConsent(true)
                  setterCookieConsent(setCookie, 1)
                }}
              >
                <div className="text-bold text-14 font-bold text-black">Accept Cookies</div>
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default CookieBar
