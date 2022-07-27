import { unBlockUser } from "api/endpoints/friendRequest"
import { toastSuccess } from "api/integration/toaster"
import { useProps } from "contexts/PropsContext"
import { FriendCallType, FriendType } from "libs/enums"
import React from "react"
import { CgUnblock } from "react-icons/cg"

const ChatButtonUserUnblock = ({ index, id, handlerAction }: { index: number; id: string; handlerAction: any }) => {
  const { token, user } = useProps()

  const onSubmit = async () => {
    let data = {
      unBlockUserId: id
    }

    const result = await unBlockUser(user.id, data, token)

    if (result) {
      handlerAction(index, FriendType.ActionUnblocked, FriendCallType.Blocked)

      toastSuccess("Successfully unblocked user")
    }
  }

  return (
    <>
      <button
        className="group flex h-28 w-38 items-center justify-center rounded-full border-1 border-grey-12 bg-grey-2 hover:border-red hover:bg-red"
        onClick={() => onSubmit()}
      >
        <CgUnblock className="text-16 text-red group-hover:text-white" />
      </button>
    </>
  )
}

export default ChatButtonUserUnblock
