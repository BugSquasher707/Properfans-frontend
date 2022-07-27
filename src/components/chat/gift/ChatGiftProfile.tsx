import { MessageRoomInterface } from "libs/interfaces"
import React from "react"
import Avatar from "utils/avatars/Avatar"

const ChatGiftProfile = ({ room }: { room: MessageRoomInterface }) => {
  return (
    <>
      <div className="flex w-full justify-end">
        <div className="flex items-center space-x-[8px]">
          <div className="h-24 w-24">
            {room.avatars[0] ? (
              <img alt="" className="h-24 w-24 rounded-full" src={room.avatars[0]} />
            ) : (
              <Avatar size={24} />
            )}
          </div>
          <div className="grid max-w-[150px] grid-cols-1 gap-2">
            <div className="relative flex w-full items-center space-x-[4px]">
              <div className="w-full truncate overflow-ellipsis text-12 font-bold text-black">{room.name}</div>
            </div>
            <div className="w-full truncate overflow-ellipsis text-12 font-bold text-grey-40">@{room.handle}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatGiftProfile
