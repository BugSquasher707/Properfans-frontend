import GuestBox from "components/guest/GuestBox"
import UserContent from "components/users/UserContent"
import WrapperGuest from "components/wrappers/WrapperGuest"
import React from "react"

const GuestUser = () => {
  return (
    <>
      <WrapperGuest>
        <div className="relative grid w-full grid-cols-1 items-start gap-20 md:gap-40 lg:grid-cols-[auto,1fr]">
          <div className="stick w-[240px] items-start lg:flex">
            <GuestBox />
          </div>
          <div className="w-full">
            <UserContent />
          </div>
        </div>
      </WrapperGuest>
    </>
  )
}

export default GuestUser
