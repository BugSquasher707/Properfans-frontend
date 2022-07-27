import MeetMediaBottom from "components/meet/media/MeetMediaBottom"
import MeetMediaShades from "components/meet/media/MeetMediaShades"
import { MeetMediaInterface } from "libs/interfaces"
import React from "react"
import VideoPlayer from "utils/video/VideoPlayer"

const MeetMediaVideoCall = ({ media, open }: { media: MeetMediaInterface[]; open: boolean }) => {
  return (
    <>
      <div
        className={`grid max-h-[550px] w-full grid-cols-1 gap-10 rounded-4 sm:max-h-[400px] sm:grid-cols-2 ${
          open ? "overflow-y-scroll" : "overflow-hidden"
        }`}
      >
        {media
          .filter((item: MeetMediaInterface, key: number) => open || (!open && key < 2))
          .map((item: MeetMediaInterface, key: number) => (
            <div key={key} className="light-r relative w-full overflow-hidden rounded-4 bg-black">
              <div className="w-full">
                <VideoPlayer pre={false} video={"https://bradmax.com/static/video/tears_of_steel.mp4"} clean />
              </div>
              <MeetMediaShades />
              <div className="absolute bottom-0 left-0 z-10 w-full px-16 pb-16">
                <MeetMediaBottom item={item} />
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default MeetMediaVideoCall
