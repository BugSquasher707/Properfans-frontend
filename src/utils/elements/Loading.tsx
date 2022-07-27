import { ReactComponent as Logo } from "assets/img/properfansIcon.svg"
import React from "react"

const Loading = () => {
  return (
    <>
      <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center bg-white p-30">
        <Logo className="h-40 w-40" />
      </div>
    </>
  )
}

export default Loading
