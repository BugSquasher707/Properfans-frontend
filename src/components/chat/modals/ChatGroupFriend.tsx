import { FriendInterface } from "libs/interfaces"
import React from "react"
import { FiCheck } from "react-icons/fi"
import Avatar from "utils/avatars/Avatar"

const ChatGroupFriend = ({
  friend,
  handler,
  selected
}: {
  friend: FriendInterface
  handler: any
  selected: boolean
}) => {
  return (
    <>
      <button
        className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-14 py-10"
        onClick={() => handler(friend)}
      >
        <div className="flex h-42 w-42 items-center justify-center">
          {friend.avatar ? <img alt="" className="h-42 w-42 rounded-full" src={friend.avatar} /> : <Avatar size={42} />}
        </div>
        <div className="flex w-full max-w-[calc(100%-200px)] flex-wrap">
          <div className="flex w-full items-center space-x-[4px]">
            <div className="max-w-full select-none overflow-hidden overflow-ellipsis text-left font-bold text-black group-hover:text-purple">
              {friend.userName}
            </div>
          </div>
          <div className="w-full text-left text-11 text-grey-20">@{friend.handle}</div>
        </div>
        <div
          className={`flex h-26 w-26 items-center justify-center rounded-full ${
            selected ? "bg-purple" : "border-2 border-grey-20"
          }`}
        >
          <FiCheck className="text-16 text-white" />
        </div>
      </button>
    </>
  )
}

export default ChatGroupFriend
