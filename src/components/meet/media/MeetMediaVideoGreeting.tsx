import MeetMediaShades from "components/meet/media/MeetMediaShades"
import { MeetMediaInterface } from "libs/interfaces"
import React from "react"
import Avatar from "utils/avatars/Avatar"

const MeetMediaVideoGreeting = ({ media, open }: { media: MeetMediaInterface[]; open: boolean }) => {
  return (
    <>
      <div
        className={`grid max-h-[1000px] w-full grid-cols-1 gap-10 sm:grid-cols-2 md:max-h-[500px] md:grid-cols-3 ${
          open ? "overflow-y-scroll" : "overflow-hidden"
        }`}
      >
        {media
          .filter((item: MeetMediaInterface, key: number) => open || (!open && key < 3))
          .map((item: MeetMediaInterface, key: number) => (
            <div key={key} className="light-r relative w-full  overflow-hidden rounded-4 bg-purple">
              <div className="min-h-[300px] w-full"></div>
              <MeetMediaShades />
              <div className="absolute top-16 right-16 flex h-22 items-center rounded-4 bg-white px-8 text-12 font-bold text-black">
                {item.status}
              </div>
              <div className="absolute bottom-0 left-0 px-16 pb-16">
                <div className="relative grid w-full grid-cols-[auto,1fr] items-center gap-10">
                  <div className="center relative h-24 w-24">
                    {item.avatar ? (
                      <img alt="" className="h-24 w-24 overflow-hidden rounded-full" src={item.avatar} />
                    ) : (
                      <Avatar color={"white-20"} size={24} />
                    )}
                  </div>
                  <div className="w-full text-14 font-bold text-white">{item.name}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  )
}
export default MeetMediaVideoGreeting
