import FanBalance from "components/fan/FanBalance"
import FanPropercoins from "components/fan/FanPropercoins"
import React from "react"

const FanShop = () => {
  return (
    <>
      <div className="relative grid w-full grid-cols-1 items-start gap-20 md:gap-40 xl:grid-cols-[1fr,auto]">
        <div className="w-full">
          <FanPropercoins />
        </div>
        <div className="stick hidden w-[260px] xl:flex">
          <FanBalance />
        </div>
      </div>
    </>
  )
}

export default FanShop
