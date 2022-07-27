import { URL } from "libs/constants"
import React from "react"
import { MdEmail } from "react-icons/md"
import { Link } from "react-router-dom"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalCashoutFailed = ({ open, handler }: { open: boolean; handler: any }) => {
  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 py-30 shadow-sm dark:shadow-none lg:w-450">
          <div className="center mb-20 h-40 w-full">
            <MdEmail className="text-48 text-purple" />
          </div>
          <div className="mb-20 w-full text-center text-16 font-bold text-black md:mb-24">Operation Failed</div>
          <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-30">
            The operation you intended to do failed due to your
            <b className="text-black"> e-mail address not being verified</b>. Verify it to finish the operation
          </div>
          <div className="mb-20 w-full md:mb-24">
            <ButtonPurple action={URL.CREATOR.BASE} title={"Verify Now"} full />
          </div>
          <Link className="w-full text-center text-14 font-bold text-grey-40 hover:text-black" to="/">
            I&apos;ll do it later
          </Link>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalCashoutFailed
