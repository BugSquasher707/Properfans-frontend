import React, { useState } from "react"
import { Link } from "react-router-dom"

const ButtonWrapper = ({
  children,
  action,
  small,
  full,
  square
}: {
  children: any
  action: string | (() => void)
  small?: boolean
  full?: boolean
  square?: boolean
}) => {
  const [width] = useState(square ? (small ? "h-46" : "h-42") : full ? "w-full" : "")

  return (
    <>
      {typeof action === "string" ? (
        <Link className={`${width}`} to={action}>
          {children}
        </Link>
      ) : (
        <button className={`${width}`} onClick={action}>
          {children}
        </button>
      )}
    </>
  )
}

export default ButtonWrapper
