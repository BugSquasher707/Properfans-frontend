import SubscribeSlidePaymentIcon from "components/subscribe/payment/SubscribeSlidePaymentIcon"
import Wrapper from "components/wrappers/Wrapper"
import { PaymentType, SubscriptionPaymentType } from "libs/enums"
import { SubscriptionPaymentInterface } from "libs/interfaces"
import React from "react"

const SubscribeSlidePaymentToolTip = ({
  value,
  payment
}: {
  value: SubscriptionPaymentType
  payment: SubscriptionPaymentInterface
}) => {
  return (
    <>
      <Wrapper open={payment.methods.length > 3}>
        <div className="group relative">
          <div className={`text-12 ${value === payment.type ? "text-grey-40" : "text-white-40"}`}>...and more</div>
          <div className="absolute top-32 right-0 z-20 hidden w-[256px] flex-wrap gap-14 rounded-4 bg-black-14 py-14 px-16 shadow-sm group-hover:flex">
            <div className="absolute top-0 right-20 h-10 w-10 translate-y-[-50%] rotate-45 transform bg-black-14"></div>
            <div className="flex w-full items-center justify-between">
              <div className="text-12 font-bold text-white">{SubscriptionPaymentType[payment.type]} Methods</div>
              <div className="text-12 font-bold text-white">{payment.methods.length}</div>
            </div>
            <div className="grid w-full grid-cols-6 gap-4 rounded-4">
              {payment.methods.map((method: PaymentType, k: number) => (
                <SubscribeSlidePaymentIcon key={k} value={method} />
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default SubscribeSlidePaymentToolTip
