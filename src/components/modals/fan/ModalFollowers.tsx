import ModalUsers from "components/modals/fan/ModalUsers"
import { REQ } from "libs/constants"
import { ModalUsersType } from "libs/enums"
import { ProfileInterface } from "libs/interfaces"
import React from "react"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalFollowers = ({ brand, open, handler }: { brand: ProfileInterface; open: boolean; handler: any }) => {
  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <ModalUsers
          handler={handler}
          id={brand.id}
          open={open}
          title={"Followers"}
          type={ModalUsersType.Followers}
          url={REQ.STATUS}
          urlSearch={REQ.STATUS}
        />
      </ModalWrapper>
    </>
  )
}

export default ModalFollowers
