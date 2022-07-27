import React from "react"
import Avatar from "utils/avatars/Avatar"

const ChatAvatarGroup = ({ avatars, active, verified }: { avatars: string[]; active: boolean; verified: boolean }) => {
  const onSize = () => {
    return verified ? 22 : 28
  }

  const onSizeCss = () => {
    return verified ? "w-22 h-22" : "w-28 h-28"
  }

  return (
    <>
      <div className="relative h-42 w-42">
        <div className="absolute top-0 right-0">
          {avatars[1] ? (
            <img alt="" className={` rounded-full ${onSizeCss()}`} src={avatars[1]} />
          ) : (
            <Avatar size={onSize()} />
          )}
        </div>
        <div className="absolute bottom-0 left-0 flex h-32 w-32 items-center justify-center">
          <div className="absolute top-0 right-0 h-18 w-18 overflow-hidden rounded-tr-full bg-white">
            <div
              className={`absolute top-0 right-0 h-32 w-32 rounded-full group-hover:bg-purple-10 ${
                active ? "bg-purple-10" : ""
              }`}
            ></div>
          </div>
          <div className="relative h-28">
            {avatars[0] ? (
              <img alt="" className={`rounded-full ${onSizeCss()}`} src={avatars[0]} />
            ) : (
              <Avatar size={onSize()} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatAvatarGroup
