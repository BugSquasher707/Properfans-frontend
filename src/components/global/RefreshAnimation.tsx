import Logo from "assets/img/properfansIcon.png"
import React from "react"

const RefreshAnimation = ({ loading }: { loading: any }) => {
  return (
    <>
      <div className="flex h-60 w-full items-center justify-center">
        <img
          alt=""
          className={`h-42 w-42 transform transition-all duration-300 ${loading ? "rotate-[360deg]" : "rotate-[0deg]"}`}
          src={Logo}
        />
      </div>
    </>
  )
}

export default RefreshAnimation
