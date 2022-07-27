import { onPlural, parseNumber } from "api/integration/functions"
import ModalFollowers from "components/modals/fan/ModalFollowers"
import Wrapper from "components/wrappers/Wrapper"
import { ProfileInterface } from "libs/interfaces"
import React, { useState } from "react"

const PopupFollowers = ({ brand, title, value }: { brand: ProfileInterface; title: string; value: number }) => {
  const [openFollowers, setOpenFollowers] = useState(false)

  return (
    <>
      <button className="flex items-center justify-center space-x-[4px] text-12" onClick={() => setOpenFollowers(true)}>
        <span className="font-bold text-black">{parseNumber(value)}</span>
        <span className="text-grey-40">
          {title}
          {onPlural(value)}
        </span>
      </button>
      <Wrapper open={openFollowers}>
        <ModalFollowers brand={brand} handler={setOpenFollowers} open={openFollowers} />
      </Wrapper>
    </>
  )
}

export default PopupFollowers
