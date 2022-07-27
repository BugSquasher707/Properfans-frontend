import React from "react"

const WrapperAbsolute = ({ children }: { children: any }) => {
  return (
    <>
      <div className="absolute top-[50%] left-0 w-full translate-y-[-50%] transform">{children}</div>
    </>
  )
}

export default WrapperAbsolute
