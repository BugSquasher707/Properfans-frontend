import { statusApi } from "api/endpoints/status"
import { parseTier } from "api/integration/functions"
import { toastSuccess } from "api/integration/toaster"
import { ReactComponent as Tier1 } from "assets/img/tier_1.svg"
import { ReactComponent as Tier2 } from "assets/img/tier_2.svg"
import { ReactComponent as Tier3 } from "assets/img/tier_3.svg"
import { ReactComponent as Tier4 } from "assets/img/tier_4.svg"
import { useProps } from "contexts/PropsContext"
import { DATE } from "libs/constants"
import { SubscriptionTierType } from "libs/enums"
import { SubscriptionManageInterface } from "libs/interfaces"
import moment from "moment"
import React from "react"
import { IoMdCalendar } from "react-icons/io"
import NumberFormat from "react-number-format"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ProfileUser from "utils/profile/ProfileUser"

const FanSubscriptionSide = ({ profile }: { profile: SubscriptionManageInterface }) => {
  const { token } = useProps()

  const onCancel = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      toastSuccess("Successfully cancelled subscription")
    }
  }

  return (
    <>
      <div className="grid w-[300px] grid-cols-1 items-start gap-40 rounded-4 border-1 border-white bg-grey-3 p-20">
        <div className="flex w-full items-start">
          <div className="grid w-full grid-cols-1">
            <div className="w-full">
              <ProfileUser
                avatar={profile.avatar}
                tag={profile.handle}
                username={profile.userName}
                verified={profile.verified}
              />
            </div>
          </div>
        </div>
        <div className="flex h-full w-full items-end">
          <div className="grid w-full grid-cols-1 gap-12">
            <div className="grid grid-cols-1 gap-10">
              <div className="grid w-full grid-cols-[auto,1fr] gap-12">
                <div className="h-16 w-16">
                  <IoMdCalendar className="text-16 text-grey-40" />
                </div>
                <div className="w-full text-12 text-grey-40">
                  {moment(profile.subscription.created).format(DATE.SHORT)}
                </div>
              </div>
            </div>
            <div className="w-full border-b-1 border-grey-12"></div>
            <div className="grid w-full grid-cols-1 gap-12 rounded-4 bg-purple-10 p-10">
              <div className="flex w-full items-center justify-between space-x-[14px]">
                <div className="flex items-center space-x-[14px]">
                  <div className="flex h-36 w-36 items-center justify-center rounded-4 bg-white">
                    <div className="flex h-22 w-22 items-center">
                      {
                        {
                          [SubscriptionTierType.Tier0]: "",
                          [SubscriptionTierType.Tier1]: <Tier1 />,
                          [SubscriptionTierType.Tier2]: <Tier2 />,
                          [SubscriptionTierType.Tier3]: <Tier3 />,
                          [SubscriptionTierType.Tier4]: <Tier4 />
                        }[profile.subscription.tier]
                      }
                    </div>
                  </div>
                  <div className="grid w-full grid-cols-1 gap-2">
                    <div className="mb-2 text-14 font-bold text-black">{profile.subscription.name}</div>
                    <div className="text-12 font-bold text-grey-40">Tier {parseTier(profile.subscription.tier)}</div>
                  </div>
                </div>
                <NumberFormat
                  className="flex h-20 items-center rounded-4 bg-white px-6 text-12 font-bold text-black"
                  displayType={"text"}
                  prefix={"$"}
                  value={profile.subscription.price}
                  thousandSeparator
                />
              </div>
            </div>
            <ButtonPurple action={onCancel} title={"Cancel subscription"} full small />
          </div>
        </div>
      </div>
    </>
  )
}

export default FanSubscriptionSide
