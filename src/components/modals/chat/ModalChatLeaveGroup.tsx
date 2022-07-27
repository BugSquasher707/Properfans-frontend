import { statusApi } from "api/endpoints/status"
import { toastSuccess } from "api/integration/toaster"
import { useProps } from "contexts/PropsContext"
import React from "react"
import { ImUsers } from "react-icons/im"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalChatLeaveGroup = ({ chatid, open, handler }: { chatid: string; open: boolean; handler: any }) => {
  const { token, user } = useProps()

  const onSubmit = async () => {
    const result = await statusApi()

    console.log(chatid, token, user)

    if (result) {
      toastSuccess("Successfully left group")
      handler(false)
    }
  }

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 pt-30 pb-20 shadow-sm dark:shadow-none lg:w-450">
          <div className="center mb-20 h-40 w-full">
            <ImUsers className="text-40 text-purple" />
          </div>
          <div className="mb-20 w-full text-center text-16 font-bold text-black md:mb-24">Leave Group</div>
          <div className="mb-20 w-full text-center text-14 font-bold text-grey-40 md:mb-30">
            Are you sure you want to leave the group?
          </div>
          <div className="grid w-full grid-cols-2 gap-12">
            <ButtonPurple action={onSubmit} title={"Leave Group"} full />
            <button
              className="w-full text-center text-14 font-bold text-grey-40 hover:text-black"
              onClick={() => handler(false)}
            >
              Close
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalChatLeaveGroup
