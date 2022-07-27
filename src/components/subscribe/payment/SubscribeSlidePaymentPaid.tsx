import SubscribeSlidePaymentIcon from "components/subscribe/payment/SubscribeSlidePaymentIcon"
import SubscribeSlidePaymentToolTip from "components/subscribe/payment/SubscribeSlidePaymentToolTip"
import { PaymentType, SubscriptionPaymentType } from "libs/enums"
import { SubscriptionPaymentInterface } from "libs/interfaces"
import React from "react"

const SubscribeSlidePaymentPaid = ({
  value,
  payment
}: {
  value: SubscriptionPaymentType
  payment: SubscriptionPaymentInterface
}) => {
  return (
    <>
      <div className="mb-20 grid w-full grid-cols-[1fr,auto] items-center gap-12">
        <div className="h24 flex w-full items-center justify-start gap-4 overflow-hidden rounded-4">
          {payment.methods.map((method: PaymentType, k: number) => (
            <SubscribeSlidePaymentIcon key={k} value={method} />
          ))}
        </div>
        <SubscribeSlidePaymentToolTip payment={payment} value={value} />
      </div>
    </>
  )
}

export default SubscribeSlidePaymentPaid
