import { statusApi } from "api/endpoints/status"
import ChatTopDropdown from "components/chat/top/ChatTopDropdown"
import ChatTopGift from "components/chat/top/ChatTopGift"
import ChatTopWrapper from "components/chat/top/ChatTopWrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { MessageRoomInterface, RelationInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"

const ChatTop = ({ online, room }: { online: number; room: MessageRoomInterface }) => {
  const { token, user } = useProps()

  const [userid, setUserid] = useState(room.users.filter((id: string) => id !== user.id)[0])
  const [relation, setRelation] = useState<RelationInterface>({
    friends: false,
    blocked: false
  })

  useEffect(() => {
    onRelation()
  }, [userid])

  useEffect(() => {
    setUserid(room.users.filter((id: string) => id !== user.id)[0])
  }, [room])

  const onRelation = async () => {
    if (!userid) {
      return
    }

    console.log(token)

    const result = await statusApi()

    if (result) {
      setRelation(result)
    }
  }

  return (
    <>
      <ChatTopWrapper>
        <div className="flex w-full justify-start">
          <Link
            className="grid max-w-full grid-cols-1 items-center justify-start gap-14 sm:grid-cols-[auto,1fr]"
            to={URL.USERS.BASE.replace(":param", room.handle ? room.handle : "_")}
          >
            <div
              className={`relative hidden h-42 w-42 items-center justify-center overflow-hidden sm:flex ${
                room.verified ? "bg-gradient-to-r from-purple to-green" : ""
              }`}
            >
              {room.avatars[0] ? (
                <img alt="" className="h-34 w-34 rounded-full" src={room.avatars[0]} />
              ) : (
                <Avatar size={36} />
              )}
              <div
                className={`absolute bottom-2 right-2 h-12 w-12 rounded-full border-2 border-white ${
                  online < 2 ? "bg-red" : "bg-green"
                }`}
              ></div>
            </div>
            <div className="grid w-full grid-cols-1 gap-4">
              <div className="flex w-full items-center space-x-[4px]">
                <div className="w-full select-none overflow-hidden overflow-ellipsis text-14 font-bold text-black group-hover:text-purple">
                  {room.name}
                </div>
              </div>
              <div className="flex w-full items-center justify-start gap-10">
                {room.handle ? (
                  <div className="w-full truncate overflow-ellipsis text-12 font-bold text-grey-40">
                    @{room.handle.toLocaleLowerCase()}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-[12px]">
          <ChatTopGift relation={relation} room={room} />
          <ChatTopDropdown handlerRelation={onRelation} relation={relation} userid={userid} />
        </div>
      </ChatTopWrapper>
    </>
  )
}

export default ChatTop
