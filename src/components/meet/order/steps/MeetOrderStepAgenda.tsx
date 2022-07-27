import MeetStep from "components/meet/elements/MeetStep"
import WrapperAbsolute from "components/wrappers/WrapperAbsolute"
import WrapperVerified from "components/wrappers/WrapperVerified"
import { MeetSpotInterface, ProfileBrandInterface } from "libs/interfaces"
import React from "react"
import { HiOutlineClock } from "react-icons/hi"
import { MdDateRange, MdPhone } from "react-icons/md"
import Avatar from "utils/avatars/Avatar"
import Verified from "utils/icons/Verified"

const MeetOrderStepAgenda = ({
  index,
  profile,
  spots
}: {
  index: number
  profile: ProfileBrandInterface
  spots: MeetSpotInterface[]
}) => {
  return (
    <>
      <div className="grid w-full grid-cols-1">
        <MeetStep
          text={
            "Browse the creator timeline and schedule your call just in the right time. You can schedule the call in advance of 30 days, or even today if there's an available spot"
          }
          index={index}
          title={"Schedule your call"}
          required
        />
        <div className="grid w-full grid-cols-1 gap-40">
          <div className="grid w-full grid-cols-[1fr,auto] items-center gap-14 rounded-4 bg-grey-3 py-16 px-20">
            <div className="grid w-full grid-cols-[auto,1fr] items-center gap-14">
              <div className="center h-32 w-32">
                {profile.avatar ? (
                  <img alt="" className="h-32 w-32 overflow-hidden rounded-full" src={profile.avatar} />
                ) : (
                  <Avatar size={32} />
                )}
              </div>
              <div className="relative h-18 w-full">
                <WrapperAbsolute>
                  <div className="truncate overflow-ellipsis text-14 font-bold text-black">
                    Timeline of {profile.userName}
                  </div>
                </WrapperAbsolute>
              </div>
            </div>
            <div className="text-14 text-grey-40">{spots.length} available spots</div>
          </div>
          <div className="grid w-full grid-cols-1 gap-24">
            <div className="w-full text-14 font-bold text-black">Selected spot</div>
            <div className="grid w-full cursor-pointer grid-cols-[1fr,auto] items-center gap-20 rounded-4 border-1 border-grey-12 p-20">
              <div className="grid w-full grid-cols-[auto,1fr] items-center gap-14">
                <div className="flex h-42 w-42 items-center justify-center rounded-full bg-purple-20">
                  <MdPhone className="text-20 text-purple" />
                </div>
                <div className="grid w-full grid-cols-1 gap-8">
                  <div className="flex w-full">
                    <div className="relative max-w-full truncate overflow-ellipsis pr-20 text-14 font-bold text-black">
                      Audio call with {profile.userName}
                      <WrapperVerified>{profile.verified ? <Verified size={16} /> : ""}</WrapperVerified>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-start gap-16">
                    <div className="flex items-center justify-start gap-8">
                      <MdDateRange className="text-16 text-grey-20" />
                      <div className="text-12 font-bold text-grey-40">Sat March 22th</div>
                    </div>
                    <div className="flex items-center justify-start gap-8">
                      <HiOutlineClock className="text-16 text-grey-20" />
                      <div className="text-12 font-bold text-grey-40">12:30 - 12:45 CET</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-14 font-bold text-purple">Available</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MeetOrderStepAgenda
