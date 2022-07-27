import { onMeetTitle } from "api/integration/meet"
import MeetStep from "components/meet/elements/MeetStep"
import Wrapper from "components/wrappers/Wrapper"
import { MeetProductType } from "libs/enums"
import { BooleanInterface } from "libs/interfaces"
import React, { useState } from "react"
import { FaUserAlt } from "react-icons/fa"
import { IoMdCheckmark } from "react-icons/io"
import { IoGiftSharp } from "react-icons/io5"

const MeetOrderStepGift = ({
  index,
  gift,
  handlerGift,
  giftUser,
  handlerGiftUser,
  type
}: {
  index: number
  gift: boolean
  handlerGift: any
  giftUser: string
  handlerGiftUser: any
  type: MeetProductType
}) => {
  const [options] = useState<BooleanInterface[]>([
    {
      active: false,
      icon: <FaUserAlt className="text-purple" />,
      title: "Buy for myself"
    },
    {
      active: true,
      icon: <IoGiftSharp className="text-purple" />,
      title: "Buy as a gift"
    }
  ])

  return (
    <>
      <div className="grid w-full grid-cols-1">
        <MeetStep
          index={index}
          text={"Are you buying the video greeting for yourself or for someone else?"}
          title={"Buy for yourself or as a gift"}
          required
        />
        <div className="grid w-full grid-cols-1 gap-40">
          <div className="grid grid-cols-1 items-center justify-start gap-10 md:grid-cols-2">
            {options.map((option: BooleanInterface, key: number) => (
              <button
                key={key}
                className={`grid grid-cols-[auto,1fr,auto] items-center justify-center gap-14 rounded-4 border-1 p-20 ${
                  gift === option.active ? "border-grey-12 bg-white" : "border-transparent bg-grey-3"
                }`}
                onClick={() => handlerGift(option.active)}
              >
                <div className="flex h-42 w-42 items-center justify-center space-x-[14px] rounded-full bg-purple-20">
                  {option.icon}
                </div>
                <div className="w-full text-left text-14 font-bold text-black">{option.title}</div>
                <div className="flex w-30">
                  <Wrapper open={gift === option.active}>
                    <IoMdCheckmark className="text-18 text-purple" />
                  </Wrapper>
                </div>
              </button>
            ))}
          </div>
          <Wrapper open={gift}>
            <div className="grid w-full grid-cols-1">
              <div className="mb-24 w-full text-14 font-bold text-black">Gift {onMeetTitle(type, false)} to</div>
              <div className="mb-12 flex h-46 w-full items-center rounded-4 bg-grey-3 px-16">
                <input
                  className="text-14 font-semibold text-black"
                  placeholder={"E-mail or @ of Properfan"}
                  type="text"
                  value={giftUser}
                  onChange={(e) => handlerGiftUser(e.target.value)}
                />
              </div>
              <div className="w-full text-14 text-grey-40">To search for Properfan type &quot;@&quot;</div>
            </div>
          </Wrapper>
        </div>
      </div>
    </>
  )
}

export default MeetOrderStepGift
