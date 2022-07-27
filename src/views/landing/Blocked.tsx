import OverlaySocials from "components/landing/OverlaySocials"
import WrapperLanding from "components/wrappers/WrapperLanding"
import React from "react"

const Blocked = () => {
  return (
    <>
      <WrapperLanding logo>
        <div className="grid w-full grid-cols-1 gap-10">
          <div className="w-full text-center text-[49px] font-bold text-white">You have been banned</div>
          <div className="w-full text-center text-[20px] font-bold text-white-80">
            Unfortunately, we have decided to remove you from our platform. You will not able to access Properfans any
            longer. If you need further help, please contact support.
          </div>
        </div>
        <OverlaySocials />
      </WrapperLanding>
    </>
  )
}

export default Blocked
