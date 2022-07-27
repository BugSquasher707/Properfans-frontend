import { openLinkExtern } from "api/integration/functions"
import CreatorSection from "components/creator/CreatorSection"
import CreatorTitle from "components/creator/CreatorTitle"
import { URL_EGX } from "ellingsenx/libs/constants"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const AccountPersonal = () => {
  return (
    <>
      <CreatorSection>
        <CreatorTitle title={"Personal information"} />
        <div className="mb-20 w-full text-14 text-grey-40 md:mb-30">
          All of your personal informations are stored on EllingsenX, in order to edit them make sure to press the
          EllingsenX button
        </div>
        <div className="flex w-full">
          <ButtonPurple
            action={() => openLinkExtern(URL_EGX.DASHBOARD.SETTINGS.SECURITY.DATA)}
            title={"Account information"}
          />
        </div>
      </CreatorSection>
    </>
  )
}

export default AccountPersonal
