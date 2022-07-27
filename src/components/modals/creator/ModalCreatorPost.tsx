import FanFeedPosting from "components/fan/posting/FanFeedPosting"
import React from "react"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalCreatorPost = ({ open, handler }: { open: boolean; handler: any }) => {
  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="light-r relative z-20 grid w-full max-w-full grid-cols-1 overflow-hidden rounded-4 bg-white shadow-sm lg:w-450">
          <FanFeedPosting handler={handler} modal={true} />
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalCreatorPost
