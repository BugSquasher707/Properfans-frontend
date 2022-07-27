import NavSubscribe from "components/nav/NavSubscribe"
import React from "react"

const WrapperSubscription = ({ children }: { children: any }) => {
  return (
    <>
      <div className="light-r fixed bottom-0 top-0 left-0 w-full bg-purple"></div>
      <div className="min-h-screen light-r relative flex w-full">
        <NavSubscribe />
        {children}
      </div>
    </>
  )
}

export default WrapperSubscription
