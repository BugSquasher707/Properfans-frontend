import { statusApi } from "api/endpoints/status"
import { toastSuccess } from "api/integration/toaster"
import ModalConfirmation from "components/modals/other/ModalConfirmation"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { ProfileInterface } from "libs/interfaces"
import React, { useState } from "react"
import { FaCrown } from "react-icons/fa"
import { MdArrowForward, MdClose, MdPerson } from "react-icons/md"
import { useHistory } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import Wrapper from "utils/elements/Wrapper"

const ChatGroupUser = ({
  user,
  id,
  master,
  handler
}: {
  user: ProfileInterface
  id: string
  master?: boolean
  handler: any
}) => {
  const history = useHistory()

  const { token } = useProps()

  const [openRemove, setOpenRemove] = useState(false)

  const onRemove = async () => {
    if (id) {
      console.log(token)

      const result = await statusApi()

      if (result) {
        setOpenRemove(false)
        handler()

        toastSuccess("Successfully removed user from group")
      }
    } else {
      history.push(URL.USERS.BASE.replace(":param", user.handle))
    }
  }

  return (
    <>
      <button
        className="group grid w-full grid-cols-[auto,1fr,auto] items-center gap-14 py-10"
        onClick={() => (!master && id ? setOpenRemove(true) : onRemove())}
      >
        <div className="flex h-42 w-42 items-center justify-center">
          {user.avatar ? <img alt="" className="h-42 w-42 rounded-full" src={user.avatar} /> : <Avatar size={42} />}
        </div>
        <div className="flex w-full max-w-[calc(100%-200px)] flex-wrap">
          <div className="flex w-full items-center space-x-[4px]">
            <div className="max-w-full  select-none overflow-hidden overflow-ellipsis text-left font-bold text-black group-hover:text-purple">
              {user.userName}
            </div>
          </div>
          <div className="w-full text-left text-11 text-grey-20">@{user.handle}</div>
        </div>
        {master ? (
          <div className="flex h-26 w-26 items-center justify-center rounded-full bg-purple">
            <FaCrown className="text-16 text-white" />
          </div>
        ) : (
          <>
            <Wrapper open={id}>
              <div className="flex h-26 w-26 items-center justify-center rounded-full border-2 border-grey-20 group-hover:border-0 group-hover:bg-red">
                <MdClose className="text-16 text-red group-hover:text-white" />
              </div>
            </Wrapper>
            <Wrapper open={!id}>
              <div className="flex h-26 w-26 items-center justify-center rounded-full border-2 border-grey-20 group-hover:border-0 group-hover:bg-purple">
                <MdArrowForward className="text-16 text-purple group-hover:text-white" />
              </div>
            </Wrapper>
          </>
        )}
      </button>
      <ModalConfirmation
        data={{
          title: "Remove user",
          text: "Remove user from group",
          icon: <MdPerson className="text-48 text-purple" />
        }}
        action={onRemove}
        handler={setOpenRemove}
        open={openRemove}
      />
    </>
  )
}

export default ChatGroupUser
