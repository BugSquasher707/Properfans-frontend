import { onPlural, parseNumber } from "api/integration/functions"
import ModalSubscribers from "components/modals/fan/ModalSubscribers"
import Wrapper from "components/wrappers/Wrapper"
import { ProfileInterface } from "libs/interfaces"
import React, { useState } from "react"

const PopupSubscribers = ({ brand, title, value }: { brand: ProfileInterface; title: string; value: number }) => {
  const [openSubscribers, setOpenSubscribers] = useState(false)

  return (
    <>
      <button className="flex items-center space-x-[8px]" onClick={() => setOpenSubscribers(true)}>
        <img alt="" className="h-14 w-14" src={"/general/subs.png"} />
        <span className="flex items-center space-x-[4px] text-12 text-grey-40">
          <span className="font-bold text-black">{parseNumber(value)}</span>
          <span className="text-12 text-grey-40">
            {title}
            {onPlural(value)}
          </span>
        </span>
      </button>
      <Wrapper open={openSubscribers}>
        <ModalSubscribers brand={brand} handler={setOpenSubscribers} open={openSubscribers} />
      </Wrapper>
    </>
  )
}

export default PopupSubscribers
