import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import { ReactComponent as Verified } from "assets/img/verified.svg"
import { URL } from "libs/constants"
import { MessageRoomInterface } from "libs/interfaces"
import React from "react"
import { FiCheck } from "react-icons/fi"
import { useHistory } from "react-router"
import Avatar from "utils/avatars/Avatar"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import Wrapper from "utils/elements/Wrapper"

const ChatGiftSuccess = ({ room, gifted, handler }: { room: MessageRoomInterface; gifted: number; handler: any }) => {
  const history = useHistory()

  const onProfile = (item: MessageRoomInterface) => {
    if (item.handle) {
      history.push(URL.USERS.BASE.replace(":param", item.handle))
    }
  }

  return (
    <>
      <div className="absolute top-[50px] -right-10 z-20 w-[340px] max-w-[100vw] rounded-4 border-1 border-grey-12 bg-white p-14 pt-30 shadow-md dark:shadow-none">
        <div className="absolute -top-1 right-28 h-14 w-14 translate-x-[50%] translate-y-[-50%] rotate-45 transform border-t-1 border-l-1 border-grey-12 bg-white"></div>
        <div className="mb-12 flex h-42 w-full items-center justify-center">
          <div className="flex h-42 w-42 items-center justify-center rounded-full bg-purple">
            <FiCheck className="text-24 text-white" />
          </div>
        </div>
        <div className="mb-24 flex w-full items-center justify-center gap-6 text-14 font-bold text-black">
          You successfully gifted <Propercoin className="h-16 w-16 fill-current text-purple" /> {gifted}
        </div>
        {room.handle ? (
          <div className="mb-14 w-full cursor-pointer rounded-4 bg-grey-3 p-20" onClick={() => onProfile(room)}>
            <div className="mb-16 flex h-72 w-full items-center justify-center">
              {room.avatars[0] ? (
                <img alt="" className="h-72 w-72 rounded-full" src={room.avatars[0]} />
              ) : (
                <Avatar size={72} />
              )}
            </div>
            <div className="mb-4 flex w-full items-center justify-center space-x-[4px]">
              <div
                className={`text-14 font-bold text-black ${room.verified ? "max-w-full" : "max-w-[calc(100%-20px)]"}`}
              >
                {room.name}
              </div>
              <Wrapper open={room.verified}>
                <Verified className="fill-current text-purple" />
              </Wrapper>
            </div>
            <div className="flex w-full items-center justify-center text-12 font-bold text-grey-40">@{room.handle}</div>
          </div>
        ) : (
          ""
        )}
        <ButtonPurple action={handler} title={"Thank you!"} full small />
      </div>
    </>
  )
}

export default ChatGiftSuccess
