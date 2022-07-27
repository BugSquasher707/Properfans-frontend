import { ReactComponent as Subs } from "assets/img/subs.svg"
import { TierInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import CheckBox from "utils/checks/CheckBox"
import PopupWrapper from "utils/elements/PopupWrapper"

const DropdownTiers = ({
  tier,
  index,
  options,
  handler,
  handlerIndex
}: {
  tier: TierInterface
  index: number
  options: TierInterface[]
  handler: any
  handlerIndex: any
}) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative w-full">
      <button
        className="grid h-42 w-full grid-cols-[1fr,auto] items-center gap-12 rounded-4 bg-grey-6 px-12"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full truncate overflow-ellipsis text-left text-14 font-bold text-grey-40">
          {tier ? `Tier ${tier.tierLevel} - ${tier.tierName}` : "Select tiers"}
        </div>
        <div className="flex h-16 w-16 items-center justify-center">
          <MdKeyboardArrowDown className="text-16 text-grey-20" />
        </div>
      </button>
      <PopupWrapper handler={setOpen} open={open}>
        <div className="absolute top-10 left-0 z-20 w-full gap-6 rounded-4 border-1 border-grey-12 bg-white p-6 shadow-md">
          {options.map((option: TierInterface, key: number) => (
            <button
              key={key}
              className="flex w-full items-center justify-between rounded-4 px-14 py-8 hover:bg-grey-6"
              onClick={() => {
                handler(option)
                handlerIndex(key)
                setOpen(false)
              }}
            >
              <div className="flex items-center space-x-[12px]">
                <Subs className="fill-current text-grey-20" />
                <div className="text-14 font-bold text-black">{option.tierName}</div>
                <div className="text-14 text-grey-40">Tier {option.tierLevel}</div>
              </div>
              <CheckBox active={key === index} />
            </button>
          ))}
        </div>
      </PopupWrapper>
    </div>
  )
}

export default DropdownTiers
