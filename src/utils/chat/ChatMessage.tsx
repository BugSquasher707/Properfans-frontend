import React from "react"
import Avatar from "utils/avatars/Avatar"

const ChatMessage = ({ message }: { message: any }) => {
  return (
    <>
      <div className="group w-full cursor-pointer">
        <div className="mb-6 flex gap-4 pl-40">
          <div className="select-none text-12 font-bold text-purple">{message.rank}</div>
          <div className="select-none text-12 text-grey-40">{message.name}</div>
        </div>
        <div className="relative flex w-full items-end justify-start space-x-[10px] group-hover:mb-16">
          <div className="absolute top-0 left-0 h-30 w-30 overflow-hidden rounded-full">
            {message.icon ? <img alt="" src={message.icon} /> : <Avatar size={30} />}
          </div>
          <div className="w-full pl-40">
            <div className="relative rounded-tl-6 rounded-tr-6 rounded-br-6 bg-grey-3 py-8 px-12 text-12 font-bold text-black">
              {message.message}
              <div className="absolute right-0 -bottom-16 hidden select-none text-right text-9 text-grey-40 group-hover:block">
                {message.time}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatMessage
