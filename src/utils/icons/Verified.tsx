import { ReactComponent as VerifiedIcon } from "assets/img/verified.svg"
import React from "react"

const Verified = ({ size, color }: { size?: number; color?: string }) => {
  const clr = () => {
    return color ? color : "purple"
  }

  return (
    <>
      {size ? (
        <div className={`w-${size} h-${size}`}>
          <VerifiedIcon className={`fill-current text-${clr()} w-${size} h-${size}`} />
        </div>
      ) : (
        <VerifiedIcon className={`fill-current text-${clr()}`} />
      )}
    </>
  )
}

export default Verified
