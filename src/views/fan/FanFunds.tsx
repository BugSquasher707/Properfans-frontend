import FanAddFunds from "components/fan/FanAddFunds"
import FanBalance from "components/fan/FanBalance"
import React from "react"

const FanFunds = () => {
  return (
    <>
      <div className="relative grid w-full grid-cols-1 items-start gap-20 md:gap-40 xl:grid-cols-[1fr,auto]">
        <FanAddFunds />
        <div className="hidden w-[260px] xl:flex">
          <FanBalance />
        </div>
      </div>
    </>
  )
}

export default FanFunds
