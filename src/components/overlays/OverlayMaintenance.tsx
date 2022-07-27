import { ReactComponent as Icon } from "assets/img/properfansIcon.svg"
import React from "react"

const OverlayMaintenance = () => {
  return (
    <>
      <div className="fixed top-0 left-0 flex h-full w-full items-center justify-center overflow-hidden bg-purple">
        <Icon className="absolute top-20 left-20 h-40 w-auto" />
        <div className="relative text-24 text-white sm:text-48 md:text-64">Maintenance</div>
      </div>
    </>
  )
}

export default OverlayMaintenance
