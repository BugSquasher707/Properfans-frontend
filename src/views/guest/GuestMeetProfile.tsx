import WrapperGuest from "components/wrappers/WrapperGuest"
import React from "react"
import MeetProfile from "views/meet/MeetProfile"

const GuestMeetProfile = () => {
  return (
    <>
      <WrapperGuest>
        <div className="w-full max-w-screen-xl">
          <MeetProfile />
        </div>
      </WrapperGuest>
    </>
  )
}

export default GuestMeetProfile
