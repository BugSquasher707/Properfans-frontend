import { parseTier } from "api/integration/functions"
import { ReactComponent as Tier1 } from "assets/img/tier_1.svg"
import { ReactComponent as Tier2 } from "assets/img/tier_2.svg"
import { ReactComponent as Tier3 } from "assets/img/tier_3.svg"
import { ReactComponent as Tier4 } from "assets/img/tier_4.svg"
import { SubscriptionTierType } from "libs/enums"
import { ProfileBrandInterface, TierInterface } from "libs/interfaces"
import React from "react"
import { BiWorld } from "react-icons/bi"
import { MdFileUpload, MdKeyboardArrowDown } from "react-icons/md"
import { VscLoading } from "react-icons/vsc"
import Avatar from "utils/avatars/Avatar"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import CheckBox from "utils/checks/CheckBox"

const ContentTiers = ({
  loading,
  brand,
  tier,
  tiers,
  handlerSubmit,
  handlerTier
}: {
  loading: boolean
  brand: ProfileBrandInterface
  tier?: TierInterface
  tiers: TierInterface[]
  handlerSubmit: any
  handlerTier: any
}) => {
  return (
    <>
      <div className="relative grid w-full grid-cols-1 gap-14">
        {brand.id ? (
          <div className="grid w-full grid-cols-[1fr,auto] items-center">
            <div className="grid w-full grid-cols-[auto,1fr] items-center gap-8">
              {brand.avatar ? (
                <img alt="" className="h-26 w-26 rounded-full" src={brand.avatar} />
              ) : (
                <Avatar size={26} />
              )}
              <div className="w-full text-14 font-bold text-black">{brand.userName}</div>
            </div>
            <div className="flex h-26 w-26 items-center justify-center">
              <MdKeyboardArrowDown className="text-20 text-black" />
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="grid w-full grid-cols-1 rounded-4 bg-grey-3 p-6">
          {tiers.map((entry: TierInterface, key: number) => (
            <button
              key={key}
              className="grid w-full grid-cols-[1fr,auto] items-center gap-12 rounded-4 p-8 hover:bg-grey-3"
              onClick={() => handlerTier(entry)}
            >
              <div className="grid w-full grid-cols-[auto,1fr] items-center gap-8">
                <div className="flex h-22 w-22 items-center justify-center">
                  {
                    {
                      [SubscriptionTierType.Tier0]: <BiWorld className="text-22 text-purple" />,
                      [SubscriptionTierType.Tier1]: <Tier1 />,
                      [SubscriptionTierType.Tier2]: <Tier2 />,
                      [SubscriptionTierType.Tier3]: <Tier3 />,
                      [SubscriptionTierType.Tier4]: <Tier4 />
                    }[entry.tierLevel]
                  }
                </div>
                <div className="w-full text-left text-14 font-bold text-black">Tier {parseTier(entry.tierLevel)}</div>
              </div>
              <CheckBox active={tier ? tier.priceId === entry.priceId : false} />
            </button>
          ))}
        </div>
        <ButtonPurple
          icon={
            loading ? (
              <VscLoading className="animate-spin text-white-40" />
            ) : (
              <MdFileUpload className="text-16 text-white-40" />
            )
          }
          action={handlerSubmit}
          title={"Confirm"}
          full
        />
      </div>
    </>
  )
}

export default ContentTiers
