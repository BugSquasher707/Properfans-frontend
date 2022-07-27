import { onRemoveFriend, onBlockUser } from "api/endpoints/friendRequest"
import { toastSuccess } from "api/integration/toaster"
import { useProps } from "contexts/PropsContext"
import { FriendCallType, FriendType } from "libs/enums"
import React from "react"
import { MdBlock, MdPersonRemove } from "react-icons/md"

const ChatButtonUserBlock = ({ index, id, handlerAction }: { index: number; id: string; handlerAction: any }) => {
  const { token, user } = useProps()

  const onBlock = async () => {
    let data = {
      blockUserId: id
    }

    const result = await onBlockUser(user.id, data, token)

    if (result) {
      handlerAction(index, FriendType.ActionBlocked, FriendCallType.Friends)

      toastSuccess("Successfully blocked user")
    }
  }

  const onRemove = async () => {
    console.log(id)

    const result = await onRemoveFriend(user.id, id, token)

    if (result) {
      handlerAction(index, FriendType.ActionRemoved, FriendCallType.Friends)

      toastSuccess("Successfully removed user")
    }
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-10">
        <button
          className="group flex h-28 w-38 items-center justify-center rounded-full border-1 border-grey-12 bg-grey-2 hover:border-red hover:bg-red"
          onClick={() => onRemove()}
        >
          <MdPersonRemove className="text-16 text-red group-hover:text-white" />
        </button>
        <button
          className="group flex h-28 w-38 items-center justify-center rounded-full border-1 border-grey-12 bg-grey-2 hover:border-red hover:bg-red"
          onClick={() => onBlock()}
        >
          <MdBlock className="text-16 text-red group-hover:text-white" />
        </button>
      </div>
    </>
  )
}

export default ChatButtonUserBlock
