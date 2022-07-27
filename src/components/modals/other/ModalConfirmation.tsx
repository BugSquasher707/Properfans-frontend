import { TitleIconInterface } from "libs/interfaces"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalConfirmation = ({
  data,
  open,
  handler,
  action
}: {
  data: TitleIconInterface
  open: boolean
  handler: any
  action: any
}) => {
  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 pb-20 pt-24 shadow-sm dark:shadow-none lg:w-450">
          <div className="mb-20 flex w-full justify-center">{data.icon}</div>
          <div className="mb-10 w-full text-center text-16 font-bold text-black">{data.title}</div>
          <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-30">{data.text}</div>
          <div className="grid w-full grid-cols-2 gap-12">
            <ButtonPurple action={action} title={"Confirm"} full />
            <button
              className="h-42 w-full text-14 font-bold text-grey-40 hover:text-black"
              onClick={() => handler(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalConfirmation
