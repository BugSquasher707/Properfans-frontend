import { getAllClubTiers } from "api/endpoints/clubTier"
import { statusApi } from "api/endpoints/status"
import { parseTier } from "api/integration/functions"
import { ReactComponent as Tier1 } from "assets/img/tier_1.svg"
import { ReactComponent as Tier2 } from "assets/img/tier_2.svg"
import { ReactComponent as Tier3 } from "assets/img/tier_3.svg"
import { ReactComponent as Tier4 } from "assets/img/tier_4.svg"
import CreatorSection from "components/creator/CreatorSection"
import CreatorTitle from "components/creator/CreatorTitle"
import CreatorStatisticsTiersOverview from "components/creator/statistics/CreatorStatisticsTiersOverview"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { SubscriptionFeatureType, SubscriptionTierType } from "libs/enums"
import { SubscriptionFeatureInterface, TierInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { IoMdMail, IoMdHeart } from "react-icons/io"
import { MdAdd, MdCheck, MdInfo } from "react-icons/md"
import { RiFileList3Fill } from "react-icons/ri"
import NumberFormat from "react-number-format"
import { Link, useHistory, useParams } from "react-router-dom"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ButtonWhite from "utils/buttons/colors/ButtonWhite"

type ParamType = {
  param: string
}

const CreatorBrandTiers = () => {
  const { token, brandActive } = useProps()

  const { param } = useParams<ParamType>()
  const history = useHistory()

  const [tiers, setTiers] = useState<TierInterface[]>([])

  const [stats, setStats] = useState()

  const [features] = useState<SubscriptionFeatureInterface[]>([
    {
      title: "Personal DMs",
      icon: <IoMdMail className="text-18" />,
      type: SubscriptionFeatureType.PersonalDms
    },
    {
      title: "Content",
      icon: <RiFileList3Fill className="text-18" />,
      type: SubscriptionFeatureType.ProperfansContent
    },
    {
      title: "Stories",
      icon: <IoMdHeart className="text-18" />,
      type: SubscriptionFeatureType.SupportCreator
    }
  ])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)

    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  const onLoad = async () => {
    const resultTiers = await getAllClubTiers(token, brandActive.id)

    const resultStatus = await statusApi()

    if (mounted && resultTiers && resultStatus) {
      setTiers(resultTiers.data)
      setStats(resultStatus)
    }
  }

  const onEdit = async (id: number) => {
    history.push(URL.CREATOR.TIER.GET.replace(":param", param).replace(":id", `${id}`))
  }

  return (
    <>
      <CreatorSection>
        <CreatorTitle title={"Manage tiers"} />
        <div className="grid w-full grid-cols-1 gap-12 sm:gap-20">
          <div className="grid w-full grid-cols-1 items-center gap-12 rounded-4 bg-grey-3 py-12 px-16 sm:grid-cols-[1fr,auto] sm:py-10">
            <div className="grid w-full grid-cols-[auto,1fr] items-center gap-10">
              <MdInfo className="text-20 text-grey-20" />
              <div className="text-12 font-bold text-grey-40">Each creator can have up to 4 tiers of subscription</div>
            </div>
            <Link className="hidden text-14 font-bold text-purple" to={"#"}>
              Learn more
            </Link>
          </div>
          {tiers.length > 0 ? (
            <div className="grid w-full grid-cols-1 gap-12 sm:gap-20 md:grid-cols-2">
              {tiers.map((tier: TierInterface, key: number) => (
                <div key={key} className="w-full rounded-4 border-1 border-grey-10 bg-grey-1 p-20">
                  <div
                    className={`mb-20 grid w-full items-center gap-12 ${
                      tier.popular ? "grid-cols-[auto,1fr,auto]" : "grid-cols-[auto,1fr]"
                    }`}
                  >
                    <div className="h-26 w-26">
                      {tier.image ? (
                        <img alt="" className="h-26 w-26" src={tier.image} />
                      ) : (
                        <>
                          {
                            {
                              [SubscriptionTierType.Tier0]: "",
                              [SubscriptionTierType.Tier1]: <Tier1 />,
                              [SubscriptionTierType.Tier2]: <Tier2 />,
                              [SubscriptionTierType.Tier3]: <Tier3 />,
                              [SubscriptionTierType.Tier4]: <Tier4 />
                            }[tier.tierLevel]
                          }
                        </>
                      )}
                    </div>
                    <div className="flex w-full items-center">
                      <div className="grid w-full grid-cols-1 gap-4">
                        <div className="w-full truncate overflow-ellipsis text-14 font-bold text-black">
                          {tier.tierName ? tier.tierName : ""}
                        </div>
                        <div className="w-full text-12 font-bold text-grey-40">Tier {parseTier(tier.tierLevel)}</div>
                      </div>
                    </div>
                    <Wrapper open={tier.popular ? tier.popular : ""}>
                      <div className="flex h-24 items-center rounded-4 bg-purple-10 px-8 text-12 font-bold text-purple">
                        Popular
                      </div>
                    </Wrapper>
                  </div>
                  <div className="mb-2 w-full text-center">
                    <NumberFormat
                      className="text-24 font-black text-black"
                      displayType={"text"}
                      prefix={"$"}
                      value={tier.price}
                      thousandSeparator
                    />
                  </div>
                  <div className="w-full text-center text-12 font-bold text-grey-40">/monthly (inc. VAT)</div>
                  <div className="flex w-full justify-center">
                    <div className="mt-20 mb-20 w-[190px] border-b-1 border-grey-6 sm:mb-20"></div>
                  </div>
                  <div className="-mx-14 mb-20 w-[calc(100%+28px)] px-14">
                    {features.length > 0 ? (
                      <div className="grid w-full grid-cols-1 gap-14">
                        {features.map((perk: SubscriptionFeatureInterface, ke: number) => (
                          <div key={ke} className="grid w-full grid-cols-[auto,1fr] items-start gap-14">
                            <MdCheck className="text-18 text-purple" />
                            <div className="w-full pt-2 text-12 font-bold text-grey-40">
                              Tier {tier.tierLevel ? tier.tierLevel : ""} - {perk.title ? perk.title : ""}
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex h-[60px] w-full items-center justify-center text-14 font-bold text-grey-40">
                        No perks found
                      </div>
                    )}
                  </div>
                  {tier.price !== 0 && (
                    <ButtonWhite action={() => onEdit(tier.tierLevel)} title={"Edit Tier"} full small />
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-[150px] w-full items-center justify-center text-14 font-bold text-grey-40">
              No tiers found
            </div>
          )}
          <Wrapper open={tiers.length < 4}>
            <ButtonPurple
              action={URL.CREATOR.TIER.ADD.replace(":param", param).replace(":id", `${tiers.length + 1}`)}
              icon={<MdAdd className="text-white-40" />}
              title={`Add new tier (${tiers.length}/4)`}
              full
            />
          </Wrapper>
        </div>
      </CreatorSection>
      <CreatorSection>
        <CreatorTitle title={"Subscribers"} />
        <CreatorStatisticsTiersOverview stats={stats} tiers={tiers} />
      </CreatorSection>
    </>
  )
}

export default CreatorBrandTiers
