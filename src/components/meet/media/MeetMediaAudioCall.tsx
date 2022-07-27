import MeetMediaBottom from "components/meet/media/MeetMediaBottom"
import MeetMediaShades from "components/meet/media/MeetMediaShades"
import { MeetMediaInterface, ProfileBrandInterface } from "libs/interfaces"
import React from "react"
import Avatar from "utils/avatars/Avatar"

const MeetMediaAudioCall = ({
  profile,
  media,
  open
}: {
  profile: ProfileBrandInterface
  media: MeetMediaInterface[]
  open: boolean
}) => {
  return (
    <>
      <div
        className={`grid max-h-[427px] w-full grid-cols-1 gap-10 rounded-4 sm:max-h-[340px] sm:grid-cols-2 ${
          open ? "overflow-y-scroll" : "overflow-hidden"
        }`}
      >
        {media
          .filter((item: MeetMediaInterface, key: number) => open || (!open && key < 2))
          .map((item: MeetMediaInterface, key: number) => (
            <div key={key} className="light-r relative w-full overflow-hidden rounded-4 bg-purple p-16">
              <img
                alt=""
                className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform"
                src={"/gradients/gradient_bg.png"}
              />
              <MeetMediaShades />
              <div className="relative grid w-full grid-cols-1 gap-8">
                <div className="relative grid w-full grid-cols-2 gap-20 p-20 sm:p-36">
                  <div className="center relative h-92 w-full">
                    {profile.avatar ? (
                      <img alt="" className="h-92 w-92 overflow-hidden rounded-full" src={profile.avatar} />
                    ) : (
                      <Avatar color={"white-20"} size={92} />
                    )}
                  </div>
                  <div className="center relative h-92 w-full">
                    {item.avatar ? (
                      <img alt="" className="h-92 w-92 overflow-hidden rounded-full" src={item.avatar} />
                    ) : (
                      <Avatar color={"white-20"} size={92} />
                    )}
                  </div>
                </div>
                <MeetMediaBottom item={item} />
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default MeetMediaAudioCall
