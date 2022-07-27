import ModalCreatorPost from "components/modals/creator/ModalCreatorPost"
import Wrapper from "components/wrappers/Wrapper"
import { usePopup } from "contexts/PopupContext"
import { ModalType } from "libs/enums"
import React from "react"

const Modals = () => {
  const { modal, setModal } = usePopup()

  const onClose = () => {
    setModal(ModalType.None)
  }

  return (
    <>
      <Wrapper open={modal !== ModalType.None}>
        {
          {
            [ModalType.CreatorPost]: <ModalCreatorPost handler={onClose} open={true} />,
            [ModalType.None]: ""
          }[modal]
        }
      </Wrapper>
    </>
  )
}

export default Modals
