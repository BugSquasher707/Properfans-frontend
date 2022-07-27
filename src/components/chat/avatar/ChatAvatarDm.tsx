import React from "react"
import Avatar from "utils/avatars/Avatar"

const ChatAvatarDm = ({ avatar, verified }: { avatar: string; verified: boolean }) => {
  return (
    <>
      {avatar ? (
        <img alt="" className={`rounded-full ${verified ? "h-34 w-34" : "h-42 w-42"}`} src={avatar} />
      ) : (
        <Avatar size={verified ? 34 : 42} />
      )}
    </>
  )
}

export default ChatAvatarDm
