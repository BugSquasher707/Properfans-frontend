import { ReactComponent as AliPay } from "assets/img/payment/methods/alipay.svg"
import { ReactComponent as Amazon } from "assets/img/payment/methods/amazon.svg"
import { ReactComponent as Amex } from "assets/img/payment/methods/amex.svg"
import { ReactComponent as ApplePay } from "assets/img/payment/methods/applepay.svg"
import { ReactComponent as DinersClub } from "assets/img/payment/methods/dinersclub.svg"
import { ReactComponent as Discover } from "assets/img/payment/methods/discover.svg"
import { ReactComponent as GiroPay } from "assets/img/payment/methods/giropay.svg"
import { ReactComponent as GooglePay } from "assets/img/payment/methods/googlepay.svg"
import { ReactComponent as Ideal } from "assets/img/payment/methods/ideal.svg"
import { ReactComponent as JCB } from "assets/img/payment/methods/jcb.svg"
import { ReactComponent as Maestro } from "assets/img/payment/methods/maestro.svg"
import { ReactComponent as Mastercard } from "assets/img/payment/methods/mastercard.svg"
import { ReactComponent as Sepa } from "assets/img/payment/methods/sepa.svg"
import { ReactComponent as UnionPay } from "assets/img/payment/methods/unionpay.svg"
import { ReactComponent as Visa } from "assets/img/payment/methods/visa.svg"
import { ReactComponent as WeChat } from "assets/img/payment/methods/wechat.svg"
import { PaymentType } from "libs/enums"
import React from "react"

const SubscribeSlidePaymentIcon = ({ value }: { value: PaymentType }) => {
  return (
    <>
      <div className="odd:h-24">
        {
          {
            [PaymentType.AliPay]: <AliPay />,
            [PaymentType.Amazon]: <Amazon />,
            [PaymentType.Amex]: <Amex />,
            [PaymentType.ApplePay]: <ApplePay />,
            [PaymentType.DinersClub]: <DinersClub />,
            [PaymentType.Discover]: <Discover />,
            [PaymentType.GiroPay]: <GiroPay />,
            [PaymentType.GooglePay]: <GooglePay />,
            [PaymentType.Ideal]: <Ideal />,
            [PaymentType.JCB]: <JCB />,
            [PaymentType.Maestro]: <Maestro />,
            [PaymentType.Mastercard]: <Mastercard />,
            [PaymentType.Sepa]: <Sepa />,
            [PaymentType.UnionPay]: <UnionPay />,
            [PaymentType.Visa]: <Visa />,
            [PaymentType.WeChat]: <WeChat />
          }[value]
        }
      </div>
    </>
  )
}

export default SubscribeSlidePaymentIcon
