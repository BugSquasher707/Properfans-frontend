import { statusApi } from "api/endpoints/status"
import { openLink } from "api/integration/functions"
import { toastSuccess } from "api/integration/toaster"
import MeetOrderSummaryItem from "components/meet/order/summary/MeetOrderSummaryItem"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { MeetProductType, MeetPurposesType } from "libs/enums"
import { MeetPurposesInterface, NumberInterface, ProfileBrandInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FaStripe } from "react-icons/fa"
import { IoBag } from "react-icons/io5"
import { MdPhone, MdVideocam } from "react-icons/md"
import NumberFormat from "react-number-format"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const MeetOrderSummary = ({
  profile,
  type,
  price,
  purposes
}: {
  profile: ProfileBrandInterface
  type: MeetProductType
  price: number
  purposes: MeetPurposesInterface[]
}) => {
  const { token } = useProps()

  const [total, setTotal] = useState(0)
  const [totalVat, setTotalVat] = useState(0)
  const [totalBefore, setTotalBefore] = useState(0)

  const [addons, setAddons] = useState<NumberInterface[]>([])

  const [percentage] = useState(21)

  useEffect(() => {
    setAddons(
      purposes
        .filter((purpose: MeetPurposesInterface) => purpose.selected)
        .map((purpose: MeetPurposesInterface) => ({
          number: purpose.price,
          title: onPurposeTitle(purpose.type)
        }))
    )
  }, [purposes])

  useEffect(() => {
    if (addons && addons.length > 0) {
      const addonsPrice = addons.map((purpose: NumberInterface) => purpose.number).reduce((a, b) => a + b, 0)

      setTotalBefore(price + addonsPrice)
    } else {
      setTotalBefore(price)
    }
  }, [price, addons])

  useEffect(() => {
    setTotal(Math.round(totalBefore * ((100 - percentage) / 100) * 100) / 100)
    setTotalVat(Math.round(totalBefore * (percentage / 100) * 100) / 100)
  }, [totalBefore])

  const onCheckout = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      toastSuccess("Processing checkout")
    }
  }

  const onIcon = () => {
    switch (type) {
      case MeetProductType.AudioCall:
        return <MdPhone className="text-20 text-purple" />
      case MeetProductType.VideoCall:
        return <MdVideocam className="text-20 text-purple" />
      case MeetProductType.VideoGreeting:
        return <MdVideocam className="text-20 text-purple" />
      default:
        return <></>
    }
  }

  const onTitle = () => {
    switch (type) {
      case MeetProductType.AudioCall:
        return `Audio call with ${profile.userName}`
      case MeetProductType.VideoCall:
        return `Video call with ${profile.userName}`
      case MeetProductType.VideoGreeting:
        return `Video greeting from ${profile.userName}`
      default:
        return ""
    }
  }

  const onPurposeTitle = (purpose: MeetPurposesType) => {
    switch (purpose) {
      case MeetPurposesType.Commercial:
        return "Comercial permissions for brand / business"
      case MeetPurposesType.Replay:
        return "Ability to replay the call"
      default:
        return ""
    }
  }

  return (
    <>
      <div className="relative flex w-full justify-center py-20 px-12 sm:py-40 lg:px-0">
        <div className="absolute top-0 bottom-0 left-[50%] w-screen translate-x-[-50%] transform bg-grey-3"></div>
        <div className="relative w-full max-w-full lg:w-[830px]">
          <div className="mb-20 w-full text-14 text-grey-40 sm:mb-40">Order Summary</div>
          <div className="mb-20 grid w-full grid-cols-1 gap-14 sm:mb-40">
            <MeetOrderSummaryItem icon={onIcon()} price={price} title={onTitle()} />
            <Wrapper open={addons && addons.length > 0}>
              {addons.map((addon: NumberInterface, key: number) => (
                <MeetOrderSummaryItem
                  key={key}
                  icon={<IoBag className="text-20 text-purple" />}
                  price={addon.number}
                  title={addon.title ? addon.title : ""}
                />
              ))}
            </Wrapper>
          </div>
          <div className="mb-20 grid w-full grid-cols-1 gap-16 sm:mb-24">
            <div className="flex w-full items-center justify-between">
              <div className="text-14 text-grey-40">Before VAT</div>
              <div className="flex">
                <NumberFormat
                  className="text-14 font-bold text-grey-40"
                  displayType={"text"}
                  prefix={"$"}
                  value={totalBefore}
                  thousandSeparator
                />
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div className="text-14 text-grey-40">VAT value</div>
              <div className="flex">
                <NumberFormat
                  className="text-14 font-bold text-grey-40"
                  displayType={"text"}
                  prefix={"$"}
                  value={totalVat}
                  thousandSeparator
                />
              </div>
            </div>
          </div>
          <div className="mb-24 w-full border-b-1 border-grey-10 sm:mb-36"></div>
          <div className="mb-20 flex w-full items-center justify-between sm:mb-30 md:mb-60">
            <div className="text-14 font-bold text-grey-40">Total</div>
            <div className="flex items-center justify-center space-x-[6px]">
              <div className="mt-[-16px] text-18 font-bold text-purple">$</div>
              <NumberFormat
                className="text-[34px] font-bold text-black"
                displayType={"text"}
                prefix={""}
                value={total}
                thousandSeparator
              />
            </div>
          </div>
          <div className="mb-20 w-full sm:mb-40">
            <ButtonPurple action={onCheckout} title={"Checkout"} full />
          </div>
          <button
            className="center group w-full gap-5"
            name={"Cashout"}
            onClick={(e) => openLink(e, "https://stripe.com/")}
          >
            <div className="text-14 text-grey-40 group-hover:text-black">All payments secured via</div>
            <FaStripe className="text-40 text-grey-40 group-hover:text-black" />
          </button>
        </div>
      </div>
    </>
  )
}

export default MeetOrderSummary
