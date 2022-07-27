import { BrandSocialInterface } from "libs/interfaces"
import React from "react"
import { FiCheck } from "react-icons/fi"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalCreatorAuthorize = ({
  social,
  open,
  handler
}: {
  social: BrandSocialInterface[]
  open: boolean
  handler: any
}) => {
  // TODO: Add socials
  console.log(social)

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 py-24 shadow-sm dark:shadow-none md:py-30 lg:w-450">
          <div className="center mb-20 h-40 w-full">
            <div className="flex h-40 w-40 items-center justify-center rounded-full bg-purple">
              <FiCheck className="text-24 text-white-40" />
            </div>
          </div>
          <div className="mb-20 w-full text-center text-16 font-bold text-black md:mb-24">
            Choose Account to Authorize
          </div>
          <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-30">
            Here&apos;s a list of other brand accounts which you haven’t authorized yet
          </div>
          <button
            className="h-24 w-full text-14 font-bold text-grey-40 hover:text-black md:h-42"
            onClick={() => handler(false)}
          >
            Cancel
          </button>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalCreatorAuthorize
