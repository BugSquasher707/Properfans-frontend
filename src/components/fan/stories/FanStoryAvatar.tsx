import React from "react"
import Avatar from "utils/avatars/Avatar"

const FanStoryAvatar = ({ avatar, active }: { avatar: string; active: boolean }) => {
  return (
    <>
      <div
        className={`flex h-70 w-70 items-center justify-center rounded-full border-2 ${
          active ? "border-purple" : "border-grey-12"
        }`}
      >
        {avatar ? (
          <div className="flex h-60 w-60 items-center justify-center overflow-hidden rounded-full bg-purple-20">
            <img alt="" className="h-60 w-60" src={avatar} />
          </div>
        ) : (
          <Avatar size={60} />
        )}
      </div>
    </>
  )
}

export default FanStoryAvatar
