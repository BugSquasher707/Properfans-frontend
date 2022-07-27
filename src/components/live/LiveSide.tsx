import LiveSideMenu from "components/live/LiveSideMenu"
import React from "react"

const LiveSide = () => {
  return (
    <>
      <div className="w-full">
        <LiveSideMenu />
        <div className="my-14 flex w-full border-b-1 border-grey-6 xl:my-30"></div>
        <div className="w-full"></div>
        <div className="my-14 flex w-full border-b-1 border-grey-6 xl:my-30"></div>
        <div className="w-full"></div>
      </div>
    </>
  )
}

export default LiveSide
