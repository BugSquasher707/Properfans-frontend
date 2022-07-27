import SignInBar from "components/auth/SignInBar"
import ModalAuthPurple from "components/modals/guest/ModalAuthPurple"
import NavGuest from "components/nav/NavGuest"
import React, { useState } from "react"

const WrapperGuest = ({ children }: { children: any }) => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <NavGuest />
      <div className="w-full">
        <div className="pag flex w-full justify-center">
          <div className="w-full max-w-screen-xl">{children}</div>
        </div>
      </div>
      <SignInBar />
      <ModalAuthPurple handler={setOpen} open={open} />
    </>
  )
}

export default WrapperGuest
