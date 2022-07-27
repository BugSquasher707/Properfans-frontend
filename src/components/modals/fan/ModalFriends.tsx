import ModalUsers from "components/modals/fan/ModalUsers"
import { ModalUsersType } from "libs/enums"
import React from "react"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalFriends = ({ open, handler }: { open: boolean; handler: any }) => {
  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <ModalUsers
          handler={handler}
          id={""}
          open={open}
          title={"Friends"}
          type={ModalUsersType.Friends}
          url={""}
          urlSearch={""}
        />
      </ModalWrapper>
    </>
  )
}

export default ModalFriends
