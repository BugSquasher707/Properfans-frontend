import AccountPersonal from "components/account/AccountPersonal"
import CreatorBrands from "components/creator/tabs/CreatorBrands"
import CreatorCustomization from "components/creator/tabs/CreatorCustomization"
import CreatorSecurity from "components/creator/tabs/CreatorSecurity"
import CreatorSettings from "components/creator/tabs/CreatorSettings"
import { CreatorPagesType } from "libs/enums"
import React from "react"

const AccountTabs = ({ type }: { type: CreatorPagesType }) => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-12 sm:gap-20 md:gap-30">
        {
          {
            [CreatorPagesType.Personal]: <AccountPersonal />,
            [CreatorPagesType.Customization]: <CreatorCustomization />,
            [CreatorPagesType.Security]: <CreatorSecurity />,
            [CreatorPagesType.Brands]: <CreatorBrands />,
            [CreatorPagesType.Settings]: <CreatorSettings />
          }[type]
        }
      </div>
    </>
  )
}

export default AccountTabs
