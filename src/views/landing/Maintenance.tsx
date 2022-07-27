import OverlaySocials from "components/landing/OverlaySocials"
import WrapperLanding from "components/wrappers/WrapperLanding"
import React from "react"

const Maintenance = () => {
  return (
    <>
      <WrapperLanding logo>
        <div className="grid w-full grid-cols-1 gap-10">
          <div className="w-full text-center text-[50px] font-bold text-white">Under Maintenance</div>
          <div className="w-full text-center text-[20px] font-bold text-white-80">
            Please check our socials to stay informed!
          </div>
        </div>
        <OverlaySocials />
      </WrapperLanding>
    </>
  )
}

export default Maintenance
