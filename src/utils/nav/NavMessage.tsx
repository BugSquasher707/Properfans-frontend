import { URL } from "libs/constants"
import { TooltipInterface } from "libs/interfaces"
import React from "react"
import { GoVerified } from "react-icons/go"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"

const NavMessage = ({ data, index, handler }: { data: TooltipInterface; index: number; handler: any }) => {
  return (
    <Link
      className="group my-2 grid w-full grid-cols-[auto,1fr] items-start gap-12 rounded-4 p-12 hover:bg-grey-6"
      to={URL.CHAT.CHANNEL.replace(":id", data.link)}
      onClick={() => handler(index)}
    >
      <div className="w-24 items-center text-22 text-grey-20 group-hover:text-purple">
        {data.avatar ? <img alt="" className="h-24 w-24 rounded-full" src={data.avatar} /> : <Avatar size={24} />}
      </div>
      <div className="w-full">
        <div className="mb-2 flex items-center text-14 font-bold text-black">
          {data.userName}
          <GoVerified className="ml-4 text-12 text-purple" />
        </div>
        <div className="mb-8 text-12 text-grey-40">{data.message}</div>
        <div className="text-9 text-grey-40">{data.created}</div>
      </div>
    </Link>
  )
}

export default NavMessage
