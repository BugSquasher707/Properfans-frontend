import MeetStep from "components/meet/elements/MeetStep"
import Wrapper from "components/wrappers/Wrapper"
import { MeetLocationType } from "libs/enums"
import { MeetLocationInterface } from "libs/interfaces"
import React, { useState } from "react"
import { FaDiscord } from "react-icons/fa"
import { IoMdCheckmark } from "react-icons/io"
import { SiZoom } from "react-icons/si"

const MeetOrderStepLocation = ({
  index,
  location,
  handlerLocation
}: {
  index: number
  location: MeetLocationType
  handlerLocation: any
}) => {
  const [locations] = useState<MeetLocationInterface[]>([
    {
      title: "Discord",
      icon: <FaDiscord className="text-40 text-[#7289DA]" />,
      recommended: true,
      type: MeetLocationType.Discord
    },
    {
      title: "Zoom",
      icon: <SiZoom className="text-40 text-[#7289DA]" />,
      recommended: false,
      type: MeetLocationType.Zoom
    }
  ])

  return (
    <>
      <div className="grid w-full grid-cols-1">
        <MeetStep
          text={
            "You can either select your favorite software for calls or use Properfans for calls, you won't need to install anything since it's web-browser supported"
          }
          index={index}
          title={"Where should the call take place?"}
          required
        />
        <div className="grid grid-cols-1 items-center justify-start gap-10 md:grid-cols-2">
          {locations.map((loc: MeetLocationInterface, key: number) => (
            <button
              key={key}
              className={`grid w-full grid-cols-[auto,1fr,auto] items-center justify-center gap-14 rounded-4 border-1 p-20 ${
                loc.type === location ? "border-grey-12 bg-white" : "border-transparent bg-grey-3"
              }`}
              onClick={() => handlerLocation(loc.type)}
            >
              <div className="flex">{loc.icon}</div>
              <div className="grid w-full grid-cols-1 gap-4">
                <div className="w-full text-left text-14 font-bold text-black">{loc.title}</div>
                <Wrapper open={loc.recommended}>
                  <div className="w-full text-left text-12 font-bold text-grey-40">Recommended</div>
                </Wrapper>
              </div>
              <div className="flex w-30">
                <Wrapper open={location === loc.type}>
                  <IoMdCheckmark className="text-18 text-purple" />
                </Wrapper>
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default MeetOrderStepLocation
