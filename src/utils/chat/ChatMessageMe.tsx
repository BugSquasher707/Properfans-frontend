import React from "react"
import Avatar from "utils/avatars/Avatar"

const ChatMessageMe = ({ message }: { message: any }) => {
  return (
    <>
      <div className="group w-full cursor-pointer">
        <div className="flex w-full items-end justify-end gap-10 group-hover:mb-16">
          <div className="w-m40 flex justify-end gap-4">
            <div className="relative rounded-tl-6 rounded-tr-6 rounded-bl-6 bg-purple py-8 px-12 text-12 font-bold text-white">
              {message.message}
              <div className="absolute left-0 -bottom-16 hidden select-none text-left text-9 text-grey-40 group-hover:block">
                {message.time}
              </div>
            </div>
          </div>
          <div className="flex h-30 w-30 overflow-hidden rounded-full">
            {message.icon ? <img alt="" src={message.icon} /> : <Avatar size={30} />}
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatMessageMe
