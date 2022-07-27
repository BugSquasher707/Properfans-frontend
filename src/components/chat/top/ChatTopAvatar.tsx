import { BooleanInterface } from "libs/interfaces"
import React from "react"
import AvatarCreator from "utils/avatars/AvatarCreator"
import AvatarCreatorDefault from "utils/avatars/AvatarCreatorDefault"

const ChatTopAvatar = ({ avatar, last }: { avatar: BooleanInterface; last: boolean }) => {
  return (
    <>
      <div
        className={`flex h-48 w-48 items-center justify-center overflow-hidden rounded-full bg-white ${
          last ? "" : "!-mr-34"
        }`}
      >
        <div
          className={`flex h-42 w-42 items-center justify-center overflow-hidden rounded-full ${
            avatar.active ? "bg-gradient-to-r from-purple to-green" : ""
          }`}
        >
          {avatar.icon ? (
            <AvatarCreator creator={avatar.active} icon={avatar.icon} />
          ) : (
            <AvatarCreatorDefault creator={avatar.active} />
          )}
        </div>
      </div>
    </>
  )
}

export default ChatTopAvatar
