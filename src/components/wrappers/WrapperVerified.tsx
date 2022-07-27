import React from "react"

const WrapperVerified = ({ children }: { children: any }) => {
  return (
    <>
      <div className="absolute top-[50%] right-0 translate-y-[-50%] transform">{children}</div>
    </>
  )
}

export default WrapperVerified
