import { URL } from "libs/constants"
import { MessageRoomInterface } from "libs/interfaces"
import React from "react"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"

const ChatTopManage = ({ room }: { room: MessageRoomInterface }) => {
  return (
    <>
      {room.handle ? (
        <Link
          className={`hidden h-36 items-center space-x-[12px] rounded-4 bg-grey-6 px-18 text-14 font-bold text-black active:ring-3 active:ring-grey-3 hover:bg-grey-6 md:flex ${
            room.handle ? "" : "hidden"
          }`}
          to={
            room.access === 0
              ? URL.SUBSCRIBE.BASE.replace(":param", room.handle)
              : URL.ACCOUNT.SUBSCRIPTION.replace(":id", room.handle)
          }
        >
          <MdEmail className="text-grey-20" />
          <div className="text-14 font-bold text-black">Manage subscription</div>
        </Link>
      ) : (
        ""
      )}
    </>
  )
}

export default ChatTopManage
