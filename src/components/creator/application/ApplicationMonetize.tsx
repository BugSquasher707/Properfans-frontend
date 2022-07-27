import { toastError } from "api/integration/toaster"
import { ApplicationTabType, IncomeType } from "libs/enums"
import React, { useEffect, useState } from "react"
import { FaDollarSign, FaPatreon, FaTwitch, FaYoutube } from "react-icons/fa"
import { IoMdListBox } from "react-icons/io"
import ButtonGrey from "utils/buttons/colors/ButtonGrey"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import CheckItem from "utils/checks/CheckItem"
import OptionListIcon from "utils/lists/OptionListIcon"

const ApplicationMonetize = ({
  handler,
  valueMonetize,
  setterMonetize,
  setterIncome,
  incomeType,
  hideIncome,
  setterIncomeType,
  setterHideIncome
}: {
  handler: any
  valueMonetize: string[]
  setterMonetize: any
  setterIncome: any
  incomeType: IncomeType
  hideIncome: boolean
  setterIncomeType: any
  setterHideIncome: any
}) => {
  const [active, setActive] = useState([false, false, false, false])
  const [income, setIncome] = useState(0)

  useEffect(() => {
    let type = IncomeType.Lowest
    switch (income) {
      case 0:
        type = IncomeType.Lowest
        break
      case 1:
        type = IncomeType.Low
        break
      case 2:
        type = IncomeType.Average
        break
      case 3:
        type = IncomeType.Medium
        break
      case 4:
        type = IncomeType.High
        break
      case 5:
        type = IncomeType.Highest
        break
    }

    setterIncomeType(type)
  }, [income])

  const handleActive = (index: number) => {
    setActive((prevState) => prevState.map((item, idx) => (idx === index ? !item : item)))
  }

  useEffect(() => {
    setterIncome(IncomeType[income])
  }, [active])

  useEffect(() => {
    hideIncome ? setterIncome() : setterIncome(IncomeSteps[income])
  }, [income, hideIncome])

  const toggleHideIcome = () => {
    setterHideIncome(hideIncome ? false : true)
  }

  useEffect(() => {
    setterMonetize(active.map((item, key) => (item ? options[key].title : "")).filter((e) => e))
  }, [active])

  const options = [
    {
      icon: <FaTwitch className="text-24 text-black" />,
      text: "via Amazon",
      title: "Twitch"
    },
    {
      icon: <FaYoutube className="text-24 text-black" />,
      text: "via Google AdSense™",
      title: "YouTube"
    },
    {
      icon: <FaPatreon className="text-24 text-black" />,
      text: "via Patreon",
      title: "Patreon"
    },
    {
      icon: <IoMdListBox className="text-24 text-black" />,
      text: "via other platforms",
      title: "Other"
    }
  ]

  const IncomeSteps = ["$0-5k", "$5k-10k", "$10k-100k", "$100k-500k", "$500k-1M", "$1M+"]

  useEffect(() => {
    for (let index = 0; index < options.length; index++) {
      if (valueMonetize.includes(options[index].title)) {
        handleActive(index)
      }
    }

    setIncome(incomeType)
  }, [])

  const nextTab = () => {
    const activeLength = active.filter((option: boolean) => option).length > 0

    if (!activeLength) {
      toastError("Choose a monetization method to continue")
    }

    if (!(hideIncome || valueMonetize.length > 0)) {
      toastError("Choose an option to continue")
    }

    if (activeLength) {
      handler(ApplicationTabType.Join)
    }
  }

  return (
    <>
      <div className="align-start flex w-520 max-w-full flex-wrap">
        <div className="center mb-20 h-40 w-full md:mb-30">
          <div className="center h-40 w-40 rounded-full bg-purple">
            <FaDollarSign className="text-24 text-white-40" />
          </div>
        </div>
        <div className="mb-12 w-full text-center text-24 font-bold text-black">How do you currently monetize?</div>
        <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-40">
          What&apos;s the way you&apos;re currently monetizing your content, let us know
        </div>
        <div className="w-full">
          <OptionListIcon active={active} data={options} handler={handleActive} />
        </div>
        <div className="my-20 w-full border-b-1 border-grey-10 md:my-30"></div>
        <div className="mb-8 w-full text-14 font-bold text-black">Monthly earnings</div>
        <div className="mb-20 w-full text-14 text-grey-40 md:mb-30">How much you&apos;re making monthly</div>
        <div className="relative mb-50 h-4 w-full px-10">
          <div className="absolute top-0 left-0 z-10 h-4 w-20 rounded-4 bg-purple"></div>
          <input
            className="slider absolute top-0 left-0 w-full font-semibold"
            max={IncomeSteps.length - 1}
            min="0"
            type="range"
            value={income}
            onChange={(e) => setIncome(parseInt(e.target.value))}
          />
          <div className="relative h-4">
            <div
              className={`absolute top-0 left-0 z-10 h-4 rounded-4 bg-purple ${
                {
                  [IncomeType.Lowest]: "w-0/5",
                  [IncomeType.Low]: "w-1/5",
                  [IncomeType.Average]: "w-2/5",
                  [IncomeType.Medium]: "w-3/5",
                  [IncomeType.High]: "w-4/5",
                  [IncomeType.Highest]: "w-full"
                }[incomeType]
              }`}
            >
              <div className={`absolute top-20 -right-40 w-80 text-center text-12 font-bold text-black`}>
                {IncomeSteps[income]}
              </div>
            </div>
          </div>
        </div>
        <div className="mb-20 w-full md:mb-40">
          <CheckItem
            data={{
              title: "Skip this, I don't want to mention it",
              active: hideIncome
            }}
            handler={() => toggleHideIcome()}
          />
        </div>
        <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2">
          <ButtonGrey action={() => handler(ApplicationTabType.Usage)} title={"Previous Step"} />
          <ButtonPurple action={nextTab} title={"Next Step"} full />
        </div>
      </div>
    </>
  )
}

export default ApplicationMonetize
