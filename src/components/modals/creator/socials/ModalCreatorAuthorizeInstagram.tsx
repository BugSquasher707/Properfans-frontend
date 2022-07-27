import ModalCreatorAuthorizeSocial from "components/modals/creator/socials/ModalCreatorAuthorizeSocial"
import { BrandSocialType } from "libs/enums"
import React from "react"

const ModalCreatorAuthorizeInstagram = ({ open, handler, list }: { open: boolean; handler: any; list: any }) => {
  const social = {
    type: BrandSocialType.Instagram,
    link: ""
  }

  return (
    <>
      <ModalCreatorAuthorizeSocial handler={handler} list={list} open={open} social={social} />
    </>
  )
}

export default ModalCreatorAuthorizeInstagram
