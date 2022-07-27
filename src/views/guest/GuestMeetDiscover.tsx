import WrapperGuest from "components/wrappers/WrapperGuest"
import React from "react"
import MeetDiscover from "views/meet/MeetDiscover"

const GuestMeetDiscover = () => {
  return (
    <>
      <WrapperGuest>
        <div className="w-full max-w-screen-xl">
          <MeetDiscover />
        </div>
      </WrapperGuest>
    </>
  )
}

export default GuestMeetDiscover
