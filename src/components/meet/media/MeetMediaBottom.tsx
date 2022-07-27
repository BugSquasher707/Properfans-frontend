import { MeetMediaInterface } from "libs/interfaces"
import React from "react"
import { MdMovie } from "react-icons/md"
import Avatar from "utils/avatars/Avatar"

const MeetMediaBottom = ({ item }: { item: MeetMediaInterface }) => {
  return (
    <>
      <div className="grid w-full grid-cols-[1fr,auto] items-center gap-14">
        <div className="grid w-full grid-cols-[auto,1fr] items-center gap-10">
          <div className="center relative h-32 w-32">
            {item.avatar ? (
              <img alt="" className="h-32 w-32 overflow-hidden rounded-full" src={item.avatar} />
            ) : (
              <Avatar color={"white-20"} size={32} />
            )}
          </div>
          <div className="grid w-full grid-cols-1 gap-4">
            <div className="w-full text-14 font-bold text-white">{item.name}</div>
            <div className="flex w-full items-center justify-start space-x-[6px] text-12 font-bold text-white-40">
              <MdMovie className="text-16 text-white-40" />
              Captured
            </div>
          </div>
        </div>
        <div className="text-24 sm:text-32 md:text-[40px]">{item.status.slice(0, 2)}</div>
      </div>
    </>
  )
}

export default MeetMediaBottom
