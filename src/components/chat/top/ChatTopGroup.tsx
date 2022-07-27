import { onPlural } from "api/integration/functions"
import { ReactComponent as Verified } from "assets/img/verified.svg"
import ChatTopAvatar from "components/chat/top/ChatTopAvatar"
import ChatTopGroupDropdown from "components/chat/top/ChatTopGroupDropdown"
import ChatTopManage from "components/chat/top/ChatTopManage"
import ChatTopWrapper from "components/chat/top/ChatTopWrapper"
import { useProps } from "contexts/PropsContext"
import { MessageRoomInterface } from "libs/interfaces"
import React from "react"
import Wrapper from "utils/elements/Wrapper"

const ChatTopGroup = ({ online, room, brand }: { online: number; room: MessageRoomInterface; brand: boolean }) => {
  const { user } = useProps()

  return (
    <>
      <ChatTopWrapper>
        <div className="grid w-full grid-cols-1 items-center justify-center gap-14 sm:grid-cols-[auto,1fr]">
          <div className="hidden space-x-[14px] sm:flex">
            {brand ? (
              <ChatTopAvatar avatar={{ icon: room.avatar, active: true }} last />
            ) : (
              <>
                {room.avatars.length >= 1 && room.avatars[0] ? (
                  <ChatTopAvatar avatar={{ icon: room.avatars[0], active: false }} last={room.avatars.length === 1} />
                ) : (
                  ""
                )}
                {room.avatars.length >= 2 && room.avatars[1] ? (
                  <ChatTopAvatar avatar={{ icon: room.avatars[1], active: false }} last={room.avatars.length === 2} />
                ) : (
                  ""
                )}
                {room.avatars.length >= 3 ? (
                  <div className="flex h-48 w-48 items-center justify-center rounded-full bg-white">
                    <div className="flex h-42 w-42 items-center justify-center rounded-full bg-grey-4 text-12 font-bold text-grey-40">
                      +
                      {room.users.length -
                        (room.avatars.length >= 1 && room.avatars[0] ? 1 : 0) -
                        (room.avatars.length >= 2 && room.avatars[1] ? 1 : 0)}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </>
            )}
          </div>
          <div className="w-full">
            <div className="mb-4 flex w-full items-center space-x-[4px]">
              {brand ? (
                <div className="max-w-full select-none truncate overflow-ellipsis font-bold text-black group-hover:text-purple">
                  {room.access === 0 ? "Public" : `Tier ${room.access}`} - {room.name}
                </div>
              ) : (
                <>
                  <div className="max-w-[calc(100%-2.5rem)] select-none overflow-hidden overflow-ellipsis font-bold text-black group-hover:text-purple">
                    {room.name}
                  </div>
                  {room.verified ? (
                    <div className="h-16 w-16">
                      <Verified />
                    </div>
                  ) : (
                    ""
                  )}
                </>
              )}
            </div>
            <div className="flex w-full items-center justify-start gap-10">
              <div className="text-12 font-bold text-grey-40">
                {room.users.length} member{onPlural(room.users.length)}
              </div>
              <div className="h-4 w-4 rounded-full bg-grey-10"></div>
              <div className="text-12 font-bold text-green">{online} online</div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-[12px]">
          <Wrapper open={brand && room.master !== user.id}>
            <ChatTopManage room={room} />
          </Wrapper>
          <ChatTopGroupDropdown brand={brand} room={room} />
        </div>
      </ChatTopWrapper>
    </>
  )
}

export default ChatTopGroup
