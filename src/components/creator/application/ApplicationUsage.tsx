import { toastError } from "api/integration/toaster"
import { ApplicationTabType, ApplicationUsageType } from "libs/enums"
import React, { useEffect, useState } from "react"
import { BsLightningFill } from "react-icons/bs"
import { GoHeart, GoStar } from "react-icons/go"
import { MdGamepad } from "react-icons/md"
import ButtonGrey from "utils/buttons/colors/ButtonGrey"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import OptionList from "utils/lists/OptionList"

const ApplicationUsage = ({ handler, value, setter }: { handler: any; value: string[]; setter: any }) => {
  const [active, setActive] = useState([false, false, false])

  const handleActive = (index: number) => {
    setActive((prevState) => prevState.map((item, key) => (key === index ? !item : item)))
  }

  useEffect(() => {
    setter(active.map((item, key) => (item ? ApplicationUsageType[options[key].type] : "")).filter((e) => e))
  }, [active])

  const options = [
    {
      icon: <GoHeart className="text-24 text-purple" />,
      title: "Community",
      text: "To interact and chat with your community",
      link: "/",
      type: ApplicationUsageType.Community
    },
    {
      icon: <GoStar className="text-24 text-purple" />,
      title: "Exclusive Content",
      text: "To post exclusive content to your properfans",
      link: "/",
      type: ApplicationUsageType.ExclusiveContent
    },
    {
      icon: <MdGamepad className="text-24 text-purple" />,
      title: "Exclusive Features",
      text: "Use ProperFans Meet, Live, Shop and more...",
      link: "/",
      type: ApplicationUsageType.ExclusiveFeatures
    }
  ]

  useEffect(() => {
    for (let index = 0; index < options.length; index++) {
      if (value.includes(ApplicationUsageType[options[index].type])) {
        handleActive(index)
      }
    }
  }, [])

  const nextTab = () => {
    if (value.length > 0) {
      handler(ApplicationTabType.Monetize)
    } else {
      toastError("Choose an option to continue")
    }
  }

  return (
    <>
      <div className="align-start flex w-520 max-w-full flex-wrap">
        <div className="center mb-20 h-40 w-full md:mb-30">
          <div className="center h-40 w-40 rounded-full bg-purple">
            <BsLightningFill className="text-24 text-white-40" />
          </div>
        </div>
        <div className="mb-12 w-full text-center text-24 font-bold text-black">
          What do you plan to use Properfans for?
        </div>
        <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-40">
          How are you going to use Properfans?
        </div>
        <div className="mb-20 w-full gap-10 md:mb-40">
          <OptionList active={active} handler={handleActive} options={options} />
        </div>
        <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2">
          <ButtonGrey action={() => handler(ApplicationTabType.Discover)} title={"Previous Step"} full />
          <ButtonPurple action={nextTab} title={"Next Step"} full />
        </div>
      </div>
    </>
  )
}

export default ApplicationUsage
