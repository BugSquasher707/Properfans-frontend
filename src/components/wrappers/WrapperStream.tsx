import NavFan from "components/nav/NavFan"
import React from "react"

const WrapperLive = ({ children }: { children: any }) => {
  return (
    <>
      <div className="min-h-screen flex w-full flex-wrap">
        <NavFan />
        <div className="p-side page flex w-full justify-center">
          <div className="w-full max-w-screen-xl">{children}</div>
        </div>
      </div>
    </>
  )
}

export default WrapperLive
