import ChatGroupFriend from "components/chat/modals/ChatGroupFriend"
import { FriendInterface } from "libs/interfaces"
import React from "react"

const ChatUsersSearch = ({
  selected,
  selectedIds,
  visible,
  handlerToggle
}: {
  selected: FriendInterface[]
  selectedIds: string[]
  visible: FriendInterface[]
  handlerToggle: any
}) => {
  return (
    <>
      {(visible && visible.length > 0) || selected.length > 0 ? (
        <div className="scroll -mx-14 mb-20 grid h-[250px] w-[calc(100%+28px)] grid-cols-1 items-start overflow-y-auto px-14">
          <div className="grid w-full grid-cols-1 items-start">
            {selected.map((friend: FriendInterface, key: number) => (
              <ChatGroupFriend key={key} friend={friend} handler={handlerToggle} selected />
            ))}
            {visible
              .filter((friend: FriendInterface) => selectedIds.indexOf(friend.id) === -1)
              .map((friend: FriendInterface, key: number) => (
                <ChatGroupFriend key={key} friend={friend} handler={handlerToggle} selected={false} />
              ))}
          </div>
        </div>
      ) : (
        <div className="mb-20 flex h-[250px] w-full items-center justify-center text-14 font-bold text-grey-40 md:mb-30">
          No friends found
        </div>
      )}
    </>
  )
}

export default ChatUsersSearch
