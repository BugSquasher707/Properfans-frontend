import { getCountryFlag } from "api/integration/country"
import CreatorSection from "components/creator/CreatorSection"
import CreatorTitle from "components/creator/CreatorTitle"
import Wrapper from "components/wrappers/Wrapper"
import { RegionType } from "libs/enums"
import { CountryInterface, TabInterface, TierInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FiCheck } from "react-icons/fi"
import { MdAdd, MdRemove } from "react-icons/md"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ButtonCreator from "utils/buttons/creator/ButtonCreator"
import CheckBox from "utils/checks/CheckBox"
import InputNumberFieldCreator from "utils/inputs/InputNumberFieldCreator"
import Tabs from "utils/tabs/Tabs"

const CreatorBrandTierAdvanced = ({ tier }: { tier: TierInterface }) => {
  const [countries, setCountries] = useState<CountryInterface[]>([{ value: "US", label: "United States" }])
  const [limit, setLimit] = useState(0)
  const [limited, setLimited] = useState(false)
  const [tab, setTab] = useState(RegionType.Allow)
  const [tabs] = useState<TabInterface[]>([
    { title: <>Allow regions</>, type: RegionType.Allow, action: setTab },
    { title: <>Block regions</>, type: RegionType.Block, action: setTab }
  ])

  useEffect(() => {
    onCountries()
  }, [])

  const onCountries = () => {
    console.log(tier)
  }

  const onSubmit = () => {
    console.log("Submit")
  }

  const onCountryRemove = (id: number) => {
    setCountries((old) => old.filter((country: CountryInterface, key: number) => key !== id))
  }

  return (
    <>
      <CreatorSection>
        <CreatorTitle title={`Advanced options`} />
        <div className="grid w-full grid-cols-1 gap-20">
          <div className="grid w-full grid-cols-1 gap-10">
            <div className="w-full text-12 font-bold text-grey-40">Limited Subscriptions</div>
            <div className="w-full text-14 text-grey-40">
              This option is to limit maximum amount of subscribers for the selected tier
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-30">
            <button
              className="grid w-full grid-cols-[auto,1fr] items-center gap-12"
              onClick={() => setLimited(!limited)}
            >
              <CheckBox active={limited} />
              <div className="w-full text-left text-14 font-bold text-black">Yes, limit amount of subscriptions</div>
            </button>
            <Wrapper open={limited}>
              <div className="grid w-full grid-cols-1 gap-10">
                <div className="w-full">
                  <InputNumberFieldCreator handler={setLimit} title={"Limit..."} value={limit} />
                </div>
                <div className="w-full text-12 font-bold text-grey-40">This tier currently has {49} subscribers</div>
              </div>
            </Wrapper>
          </div>
        </div>
        <div className="my-12 hidden w-full border-b-1 border-grey-6 sm:my-16"></div>
        <div className="hidden w-full grid-cols-1 gap-20">
          <div className="grid w-full grid-cols-1 gap-10">
            <div className="w-full text-12 font-bold text-grey-40">Restrict regions</div>
            <div className="w-full text-14 text-grey-40">
              You can either select specific region/s which can subscribe to the selected tier (allowed regions) or the
              ones which can not subscribe (blocked regions)
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-30">
            <Tabs tabs={tabs} type={tab} />
            {countries && countries.length > 0 ? (
              <div className="grid w-full grid-cols-1 gap-4">
                {countries.map((country: CountryInterface, key: number) => (
                  <div
                    key={key}
                    className="group grid w-full cursor-pointer grid-cols-[1fr,auto] items-center rounded-4 bg-grey-3 py-14 pl-16 pr-14"
                  >
                    <div className="grid w-full grid-cols-[auto,1fr] items-center gap-8">
                      <div className="flex h-20 w-22 items-center">
                        <img alt={country.label} className="w-22 rounded-2" src={getCountryFlag(country.value)} />
                      </div>
                      <div className="w-full text-14 font-bold text-black">{country.label}</div>
                    </div>
                    <button
                      className="flex h-20 w-20 items-center justify-center rounded-full bg-grey-20"
                      onClick={() => onCountryRemove(key)}
                    >
                      <MdRemove className="text-18 text-white" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-[100px] w-full items-center justify-center text-center text-14 text-grey-40">
                No countries selected
              </div>
            )}
            <div className="w-full">
              <ButtonCreator icon={<MdAdd className="text-grey-20" />} title={"Add region"} />
            </div>
          </div>
        </div>
        <div className="mt-20 flex w-full justify-start">
          <ButtonPurple action={onSubmit} icon={<FiCheck className="text-16 text-white" />} title={"Save"} />
        </div>
      </CreatorSection>
    </>
  )
}

export default CreatorBrandTierAdvanced
