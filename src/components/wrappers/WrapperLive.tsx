import LiveSide from "components/live/LiveSide"
import NavFan from "components/nav/NavFan"
import WrapperSwipe from "components/wrappers/WrapperSwipe"
import React from "react"

const WrapperLive = ({ children }: { children: any }) => {
  return (
    <>
      <div className="min-h-screen flex w-full flex-wrap">
        <NavFan />
        <WrapperSwipe>
          <div className="pag flex w-full justify-center">
            <div className="w-full max-w-screen-xl">
              <div className="grid w-full grid-cols-1 items-start gap-20 md:gap-40 lg:grid-cols-[auto,1fr]">
                <div className="stick hidden w-44 lg:flex xl:w-[240px]">
                  <LiveSide />
                </div>
                <div className="w-full">{children}</div>
              </div>
            </div>
          </div>
        </WrapperSwipe>
      </div>
    </>
  )
}

export default WrapperLive
