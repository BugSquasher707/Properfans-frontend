import FanStoryAvatar from "components/fan/stories/FanStoryAvatar"
import React from "react"

const FanStoryBody = ({
  avatar,
  username,
  active,
  last,
  handler
}: {
  avatar: string
  username: string
  active: boolean
  last?: boolean
  handler: any
}) => {
  return (
    <>
      <div
        className={`group grid cursor-pointer grid-cols-1 gap-8 ${last ? "w-80 pr-10" : "w-[70px]"}`}
        onClick={() => handler(true)}
      >
        <FanStoryAvatar active={active} avatar={avatar} />
        <div className="h-14 w-70 truncate text-center text-12 font-bold text-grey-40 group-hover:text-black">
          {username}
        </div>
      </div>
    </>
  )
}

export default FanStoryBody
