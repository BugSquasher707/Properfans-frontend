import React from "react"
import { Link } from "react-router-dom"

const WrapperProfile = ({ children, url, custom }: { children: any; url: string; custom: boolean }) => {
  return (
    <>
      {custom ? (
        <div className="grid w-full grid-cols-1 gap-16">{children}</div>
      ) : (
        <Link className="grid w-full grid-cols-1 gap-16" to={url}>
          {children}
        </Link>
      )}
    </>
  )
}

export default WrapperProfile
