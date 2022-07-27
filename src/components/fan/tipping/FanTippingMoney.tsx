import { toastError } from "api/integration/toaster"
import { ReactComponent as Stripe } from "assets/img/payment/providers/stripe.svg"
import { ReactComponent as Vipps } from "assets/img/payment/providers/vipps.svg"
import FanTippingMessage from "components/fan/tipping/FanTippingMessage"
import Wrapper from "components/wrappers/Wrapper"
import { SubscriptionPaymentType } from "libs/enums"
import { TitleIconInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FaDollarSign } from "react-icons/fa"
import NumberFormat from "react-number-format"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import CheckListDot from "utils/lists/CheckListDot"

const FanTippingMoney = ({
  amount,
  message,
  handlerAmount,
  handlerMessage,
  handlerEmoji,

  handlerSubmit
}: {
  amount: number
  message: string
  handlerAmount: any
  handlerMessage: any
  handlerEmoji: any

  handlerSubmit: any
}) => {
  const [type, setType] = useState<SubscriptionPaymentType>(SubscriptionPaymentType.Vipps)
  const [icon, setIcon] = useState<JSX.Element>(<span></span>)

  const [openMethods, setOpenMethods] = useState(false)

  const [methods] = useState<TitleIconInterface[]>([
    {
      title: "Vipps",
      text: "Pay with your phone",
      icon: <Vipps className="fill-current" />,
      type: SubscriptionPaymentType.Vipps
    },
    {
      title: "Stripe",
      text: "Pay with secure gateway",
      icon: <Stripe className="fill-current" />,
      type: SubscriptionPaymentType.Stripe
    }
  ])

  const onCheckout = () => {
    if (amount && amount >= 100) {
      setOpenMethods(true)
    } else {
      toastError("Enter a tip amount of at least 100 propercoins / $1")
    }
  }

  useEffect(() => {
    setIcon(
      <span className="first:w-auto first:text-white">
        {methods.filter((method: TitleIconInterface) => method.type === type)[0].icon}
      </span>
    )
  }, [type])

  return (
    <>
      <div className="w-full">
        <Wrapper open={openMethods}>
          <div className="grid w-full grid-cols-1 gap-10">
            {methods.map((method: TitleIconInterface, key: number) => (
              <button
                key={key}
                className={`grid w-full grid-cols-[auto,1fr,auto] items-center gap-16 rounded-4 border-1 px-16 py-14 ${
                  type === method.type ? "border-grey-12 bg-white" : "border-grey-6 bg-grey-6"
                }`}
                onClick={() => setType(method.type)}
              >
                <CheckListDot active={type === method.type} />
                <div className="w-full">
                  <div className="w-full text-left text-14 font-bold text-black">{method.title}</div>
                  <div className="w-full text-left text-14 text-grey-40">{method.text}</div>
                </div>
                <div className="flex items-center">
                  <span
                    className={`flex items-center  ${
                      type === method.type ? "first:text-purple" : "first:text-grey-30"
                    }`}
                  >
                    {method.icon}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </Wrapper>
        <Wrapper open={!openMethods}>
          <div className="mb-20 grid w-full grid-cols-1 gap-12">
            <div className="w-full text-14 text-grey-40">Tip amount*</div>
            <div className="grid h-42 w-full grid-cols-[auto,1fr] rounded-4 bg-grey-6 ">
              <div className="flex h-42 w-42 items-center justify-center">
                <FaDollarSign className="text-grey-20" />
              </div>
              <input
                className="placeholder-grey-40:placeholder text-14 font-semibold text-black"
                placeholder="Tip amount"
                type="number"
                value={amount > 0 ? amount / 100 : ""}
                onChange={(e) => handlerAmount(parseInt(e.target.value) * 100)}
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-12">
            <div className="w-full text-14 text-grey-40">Message (optional)</div>
            <FanTippingMessage handlerEmoji={handlerEmoji} handlerMessage={handlerMessage} message={message} />
          </div>
        </Wrapper>
        <div className="my-24 w-full border-b-1 border-grey-10"></div>
        <div className="mb-24 flex w-full items-center justify-between space-x-[20px]">
          <div className="text-12 font-bold text-grey-40">Total</div>
          <div className="flex items-center space-x-[6px]">
            <div className="text-14 font-bold text-black">
              <NumberFormat displayType={"text"} prefix={"$"} value={amount / 100} thousandSeparator />
            </div>
          </div>
        </div>
        <Wrapper open={openMethods}>
          <button className="mb-20 w-full">
            <ButtonPurple action={handlerSubmit} icon={<span>{icon}</span>} pre={"Continue with"} title={""} full />
          </button>
          <div className="w-full text-center text-12 text-grey-40">
            Tips (also known as donations) are not eligible for refunds
          </div>
        </Wrapper>
        <Wrapper open={!openMethods}>
          <div className="mb-20 w-full">
            <ButtonPurple action={onCheckout} title={"Checkout Tip"} full />
          </div>
          <div className="flex w-full items-center justify-center space-x-[6px] text-center text-12 text-grey-40">
            Available method <Vipps className="hidden h-12 w-auto fill-current text-grey-40" />
            <Stripe className="h-16 w-auto fill-current text-grey-40" />
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default FanTippingMoney
