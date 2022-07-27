import { createClubTier, updateClubTier } from "api/endpoints/clubTier"
import { parseTier } from "api/integration/functions"
import { toastError, toastSuccess } from "api/integration/toaster"
import { ReactComponent as Tier1 } from "assets/img/tier_1.svg"
import { ReactComponent as Tier2 } from "assets/img/tier_2.svg"
import { ReactComponent as Tier3 } from "assets/img/tier_3.svg"
import { ReactComponent as Tier4 } from "assets/img/tier_4.svg"
import CreatorSection from "components/creator/CreatorSection"
import CreatorTitle from "components/creator/CreatorTitle"
import ModalCreatorTierSale from "components/modals/creator/ModalCreatorTierSale"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { SubscriptionTierType } from "libs/enums"
import { TierPerkInterface, ProfileBrandInterface, TierInterface, TitleInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FiCheck } from "react-icons/fi"
import { MdAdd, MdCheck, MdFileUpload, MdRemove, MdSearch } from "react-icons/md"
import { useHistory } from "react-router"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ButtonWhite from "utils/buttons/colors/ButtonWhite"
import DropdownCreator from "utils/dropdowns/DropdownCreator"
import InputFieldCreator from "utils/inputs/InputFieldCreator"
import InputFieldCreatorPrice from "utils/inputs/InputFieldCreatorPrice"

const CreatorBrandTierDetails = ({
  add,
  profile,
  param,
  id,
  tier
}: {
  add: boolean
  profile: ProfileBrandInterface
  param: string
  id: string
  tier: TierInterface
}) => {
  const { token } = useProps()

  const history = useHistory()

  const [tiers] = useState<TitleInterface[]>([
    { title: "Tier 1", type: SubscriptionTierType.Tier1 },
    { title: "Tier 2", type: SubscriptionTierType.Tier2 },
    { title: "Tier 3", type: SubscriptionTierType.Tier3 },
    { title: "Tier 4", type: SubscriptionTierType.Tier4 }
  ])

  const [openSale, setOpenSale] = useState(false)

  const [name, setName] = useState("")
  const [perks, setPerks] = useState<TierPerkInterface[]>([])
  const [perksVisible, setPerksVisible] = useState<TierPerkInterface[]>([])
  const [price, setPrice] = useState(0)
  const [sale, setSale] = useState(false)
  const [search, setSearch] = useState("")

  useEffect(() => {
    setPerksVisible(perks)
  }, [perks, search])

  useEffect(() => {
    setName(tier.tierName)
    setPerks(tier.perks)
    setPrice(tier.price)

    setSale(false)
    setSearch("")
    setOpenSale(false)
  }, [tier])

  const onSubmit = async () => {
    if (!name) {
      toastError("Enter a tier name")
      return
    }

    if (!price) {
      toastError("Enter a tier price")
      return
    }

    if (price < 1) {
      toastError("Tier price must be at least $1")
      return
    }

    const data = {
      tierName: name,
      tierLevel: id,
      price: price,
      brandId: profile.id
    }

    if (add) {
      const result = await createClubTier(data, token, profile.id)

      if (result.data) {
        toastSuccess("Successfully created tier")
        history.push(URL.CREATOR.TIER.GET.replace(":param", param).replace(":id", id))
      }
    }

    if (!add) {
      const result = await updateClubTier(token, profile.id, id, data)

      if (result.data) {
        toastSuccess("Successfully updated tier")
        history.push(URL.CREATOR.TIER.GET.replace(":param", param).replace(":id", id))
      }
    }
  }

  const onPerkToggle = (key: number) => {
    const newPerks = [...perks]
    const newPerk = { ...newPerks[key] }

    newPerk.selected = !newPerk.selected
    newPerks[key] = newPerk

    setPerks(newPerks)
  }

  const onSwitch = (title: string) => {
    const newId = parseTier(tiers.filter((entry: TitleInterface) => entry.title === title)[0].type)

    history.push(URL.CREATOR.TIER.GET.replace(":param", param).replace(":id", newId))
  }

  return (
    <>
      <CreatorSection>
        <CreatorTitle title={add ? `Adding tier ${id}` : `Editing tier ${id}`} />
        <div className="grid w-full grid-cols-1 gap-20">
          <div className="grid w-full grid-cols-1 gap-20 md:grid-cols-2">
            <div className="grid w-full grid-cols-1 gap-10">
              <div className="w-full text-12 font-bold text-grey-40">Tier name</div>
              <InputFieldCreator handler={setName} title={"Tier name"} value={name} />
            </div>
            <Wrapper open={!add}>
              <div className="grid w-full grid-cols-1 gap-10">
                <div className="w-full text-12 font-bold text-grey-40">Tier class</div>
                <DropdownCreator handler={onSwitch} options={tiers} title={`Tier ${id}`} />
              </div>
            </Wrapper>
          </div>
          <div className="grid w-full grid-cols-1 gap-20 md:grid-cols-2">
            <div className="grid w-full grid-cols-1 gap-20">
              <div className="grid w-full grid-cols-1 gap-10">
                <div className="w-full text-12 font-bold text-grey-40">Tier icon</div>
                <div className="grid w-full grid-cols-[auto,1fr] items-center gap-14 rounded-4 border-1 border-grey-10 bg-grey-1 p-16">
                  <div className="flex h-22 w-22 items-center">
                    {
                      {
                        [SubscriptionTierType.Tier0]: "",
                        [SubscriptionTierType.Tier1]: <Tier1 />,
                        [SubscriptionTierType.Tier2]: <Tier2 />,
                        [SubscriptionTierType.Tier3]: <Tier3 />,
                        [SubscriptionTierType.Tier4]: <Tier4 />
                      }[tier.tierLevel ? tier.tierLevel : id]
                    }
                  </div>
                  <div className="flex w-full items-center">
                    <div className="grid w-full grid-cols-1 gap-2">
                      <div className="w-full text-14 font-bold text-black">Default Icon</div>
                      <div className="text-bold w-full text-12 text-grey-40">Tier {id}</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden w-full grid-cols-1 gap-10">
                <ButtonWhite action={() => null} icon={<MdFileUpload />} title={"Upload icon"} full small />
                <div className="w-full text-14 text-grey-40">Supports .jpg, .jpeg and .png files</div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-12 w-full border-b-1 border-grey-6 sm:my-16"></div>
        <div className="grid w-full grid-cols-1 gap-20">
          <div className="grid w-full grid-cols-1 gap-10">
            <div className="w-full text-12 font-bold text-grey-40">Price / monthly Cost</div>
            <InputFieldCreatorPrice handler={setPrice} title={"Tier subscription price"} value={price} />
            <div className="hidden w-full">
              {sale ? (
                <div className="grid w-full grid-cols-1 gap-10">
                  <div className="w-full text-12 font-bold text-purple">On-going Sale</div>
                  <div className="w-full rounded-4 border-1 border-grey-10 bg-grey-1 p-16"></div>
                </div>
              ) : (
                <button
                  className="grid w-full grid-cols-[auto,1fr] items-center justify-start gap-6"
                  onClick={() => setOpenSale(true)}
                >
                  <MdAdd className="text-16 text-purple" />
                  <div className="text-left text-14 font-bold text-purple">Subscription sale setup</div>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="mt-12 w-full border-b-1 border-grey-6 sm:mt-16"></div>
        <div className="hidden w-full">
          <div className="grid w-full grid-cols-1 gap-20">
            <div className="grid w-full grid-cols-1 gap-10">
              <div className="w-full text-12 font-bold text-grey-40">Tier icon</div>
              <div className="grid h-46 w-full grid-cols-[auto,1fr] rounded-4 border-1 border-grey-10 bg-grey-1">
                <button className="group flex h-44 w-44 items-center justify-center">
                  <MdSearch className="text-18 text-grey-20 group-hover:text-grey-40" />
                </button>
                <input
                  className="placeholder-grey-40::placeholder pr-12 pl-4 text-14 font-bold text-black"
                  placeholder={"Add perks by browsing or typing..."}
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full">
              {perksVisible && perksVisible.length > 0 ? (
                <div className="grid w-full grid-cols-1 gap-4">
                  {perksVisible.map((perk: TierPerkInterface, key: number) => (
                    <div
                      key={key}
                      className="group grid w-full cursor-pointer grid-cols-[1fr,auto] items-center rounded-4 bg-grey-3 py-14 pl-16 pr-14"
                    >
                      <div className="grid w-full grid-cols-[auto,1fr] items-center gap-8">
                        <div className="flex h-20 w-22 items-center">
                          {perk.selected ? <MdCheck className="text-24 text-purple" /> : ""}
                        </div>
                        <div className="flex w-full items-center">
                          <div className="grid w-full grid-cols-1 gap-2">
                            <div className="w-full text-14 font-bold text-black">{perk.name}</div>
                            <div className="w-full text-14 font-bold text-black">
                              Included in{" "}
                              {perk.included && perk.included.length > 0 ? (
                                <>
                                  {perk.included.map(
                                    (entry: string, ke: number) =>
                                      `${
                                        perk.included.length === 1 || ke !== perk.included.length - 1 ? "" : " and "
                                      }${entry}${ke !== perk.included.length - 1 ? ", " : ""}`
                                  )}
                                </>
                              ) : (
                                "no other tiers"
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        className="flex h-20 w-20 items-center justify-center rounded-full bg-grey-20"
                        onClick={() => onPerkToggle(key)}
                      >
                        <MdRemove className="text-18 text-white" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="flex h-[100px] w-full items-center justify-center text-center text-14 text-grey-40">
                  No perks selected
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-20">
          <div className="mt-20 flex w-full items-center justify-start space-x-[12px]">
            <ButtonPurple action={onSubmit} icon={<FiCheck className="text-16 text-white" />} title={"Save"} />
          </div>
        </div>
      </CreatorSection>
      <ModalCreatorTierSale handler={setOpenSale} open={openSale} />
    </>
  )
}

export default CreatorBrandTierDetails
