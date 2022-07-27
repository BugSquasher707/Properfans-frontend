import { statusApi } from "api/endpoints/status"
import { ReactComponent as LogoIconWhite } from "assets/img/logo_white_full.svg"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { influencers } from "libs/data/influencers"
import { LandingInfluencerInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FiLogIn } from "react-icons/fi"
import NumberFormat from "react-number-format"
import { Link } from "react-router-dom"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalAuthPurple = ({ open, handler }: { open: boolean; handler: any }) => {
  const { token } = useProps()

  const [count, setCount] = useState(500)

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      setCount(result)
    }
  }

  return (
    <>
      <ModalWrapper handler={handler} open={open} full>
        <div className="light-r relative z-20 grid w-full max-w-full grid-cols-1 overflow-hidden rounded-t-4 bg-purple p-40 shadow-sm sm:w-full sm:rounded-4 sm:p-30 md:p-40 lg:w-450">
          <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-br from-transparent to-blue"></div>
          <div className="relative w-full">
            <div className="mb-24 flex w-full justify-center">
              <LogoIconWhite className="w-50" />
            </div>
            <div className="mb-4 w-full text-center text-12 text-white-40">To continue this action, you must</div>
            <div className="mb-40 w-full text-center text-24 font-bold text-white">
              Join the exclusive social media platform
            </div>
            <div className="mb-10 flex w-full justify-center">
              {influencers.map((influencer: LandingInfluencerInterface, key: number) => (
                <div
                  key={key}
                  className="mr-[-10px] flex h-50 w-50 items-center justify-center rounded-full bg-gradient-to-b from-purple to-green"
                >
                  <img alt="" className="h-42 w-42 rounded-full" src={influencer.icon} />
                </div>
              ))}
            </div>
            <div className="mb-4 w-full text-center text-14 font-bold text-white">
              <NumberFormat displayType={"text"} suffix={"+"} value={count} thousandSeparator /> Current Users
            </div>
            <div className="mb-40 w-full text-center text-12 text-white-40">Live count</div>
            <div className="grid w-full grid-cols-2 gap-10">
              <Link
                className="flex h-36 w-full items-center justify-center rounded-4 border-2 border-white-10 text-14 font-bold text-white"
                to={URL.HOME}
              >
                Sign In
              </Link>
              <Link className="flex w-full items-center justify-center space-x-[10px] rounded-4 bg-white" to={URL.HOME}>
                <div className="text-14 font-bold text-black">Sign Up</div> <FiLogIn className="text-purple" />
              </Link>
            </div>
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalAuthPurple
