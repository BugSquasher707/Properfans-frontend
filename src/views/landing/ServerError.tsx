import WrapperLanding from "components/wrappers/WrapperLanding"
import { URL } from "libs/constants"
import React from "react"
import ButtonWhite from "utils/buttons/colors/ButtonWhite"

const ServerError = () => {
  return (
    <>
      <WrapperLanding>
        <div className="grid w-full grid-cols-1">
          <div className="w-full text-center text-[160px] font-bold leading-[160px] text-white">500</div>
          <div className="w-full text-center text-[52px] font-bold leading-[52px] text-white-60">Server error</div>
        </div>
        <div className="flex w-full justify-center">
          <ButtonWhite action={URL.FAN.FEED} title={"Return home"} small />
        </div>
      </WrapperLanding>
    </>
  )
}

export default ServerError
