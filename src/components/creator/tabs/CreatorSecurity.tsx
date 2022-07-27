import { openLinkExtern } from "api/integration/functions"
import CreatorSection from "components/creator/CreatorSection"
import CreatorTitle from "components/creator/CreatorTitle"
import { useProps } from "contexts/PropsContext"
import { URL_EGX } from "ellingsenx/libs/constants"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const CreatorSecurity = () => {
  const { user } = useProps()

  return (
    <>
      <CreatorSection>
        <CreatorTitle title={"Manange password"} />
        <div className="mb-20 w-full text-14 text-grey-40 md:mb-40">
          Here&apos;s the section to manage your password, improve your security with a strong password
        </div>
        <div className="flex w-full">
          <ButtonPurple
            action={() => openLinkExtern(URL_EGX.DASHBOARD.SETTINGS.SECURITY.PASSWORD)}
            title={"Change password"}
          />
        </div>
      </CreatorSection>
      <CreatorSection>
        <CreatorTitle title={"Your devices"} />
        <div className="mb-20 w-full text-14 text-grey-40">
          List all of your devices which used or are logged into this account, manage them and stay secured
        </div>
        <div className="flex w-full">
          <ButtonPurple
            action={() => openLinkExtern(URL_EGX.DASHBOARD.SETTINGS.SECURITY.HISTORY)}
            title={"Device history"}
          />
        </div>
      </CreatorSection>
      <CreatorSection>
        <CreatorTitle title={"Two-factor authentication"} />
        <div className="mb-20 w-full text-14 text-grey-40 md:mb-40">
          Add an extra layer of security to your Properfans account by using your password and a code from a two factor
          authentication app to sign in.
        </div>
        <div className="w-full">
          <div className="mb-20 flex w-full md:mb-40">
            <ButtonPurple
              action={() => openLinkExtern(URL_EGX.DASHBOARD.SETTINGS.SECURITY.TWOFACTOR)}
              title={"Two-factor authentication"}
            />
          </div>
          <div className="w-full text-14 text-grey-40">
            Two-Factor Authentication is{" "}
            <span className={user.twoFactorEnabled ? "text-green" : "text-red"}>
              {user.twoFactorEnabled ? "enabled" : "disabled"}
            </span>
          </div>
        </div>
      </CreatorSection>
    </>
  )
}

export default CreatorSecurity
