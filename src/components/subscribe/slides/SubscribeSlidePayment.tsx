import { parsePrice } from "api/integration/functions"
import { ReactComponent as ProviderProperfans } from "assets/img/payment/providers/properfans.svg"
import { ReactComponent as ProviderStripe } from "assets/img/payment/providers/stripe.svg"
import { ReactComponent as ProviderVipps } from "assets/img/payment/providers/vipps.svg"
import SubscribeSlidePaymentFree from "components/subscribe/payment/SubscribeSlidePaymentFree"
import SubscribeSlidePaymentPaid from "components/subscribe/payment/SubscribeSlidePaymentPaid"
import Wrapper from "components/wrappers/Wrapper"
import { PaymentType, PeriodType, SubscriptionPaymentType } from "libs/enums"
import { SubscriptionPaymentInterface, TierInterface } from "libs/interfaces"
import React, { useState } from "react"
import NumberFormat from "react-number-format"

const SubscribeSlidePayment = ({
  period,
  tier,
  value,
  handler
}: {
  period: PeriodType
  tier: TierInterface
  value: SubscriptionPaymentType
  handler: any
}) => {
  const [payments] = useState([
    {
      methods: [
        PaymentType.Visa,
        PaymentType.Mastercard,
        PaymentType.Maestro,
        PaymentType.DinersClub,
        PaymentType.Amex,
        PaymentType.Discover,
        PaymentType.ApplePay,
        PaymentType.GooglePay,
        PaymentType.Amazon,
        PaymentType.AliPay,
        PaymentType.WeChat,
        PaymentType.Ideal,
        PaymentType.GiroPay,
        PaymentType.UnionPay,
        PaymentType.JCB,
        PaymentType.Sepa
      ],
      free: false,
      fee: 2.5,
      type: SubscriptionPaymentType.Stripe
    }
  ])

  return (
    <>
      <div className="max-h-[500px] w-full overflow-y-scroll rounded-4">
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-2">
          {payments.map((payment: SubscriptionPaymentInterface, key: number) => (
            <div
              key={key}
              className={`relative w-full cursor-pointer rounded-4 border-1 px-20 pt-16 pb-8 ${
                value === payment.type ? "border-white bg-white" : "border-white-10"
              }`}
              onClick={() => handler(payment.type)}
            >
              <div className="mb-16 flex w-full items-center justify-between gap-12">
                <div className={`text-16 font-bold ${value === payment.type ? "text-black" : "text-white"}`}>
                  Pay with
                </div>
                {
                  {
                    [SubscriptionPaymentType.Properfans]: (
                      <ProviderProperfans
                        className={`fill-current ${value === payment.type ? "text-purple" : "text-white"}`}
                      />
                    ),
                    [SubscriptionPaymentType.Stripe]: (
                      <ProviderStripe
                        className={`fill-current ${value === payment.type ? "text-purple" : "text-white"}`}
                      />
                    ),
                    [SubscriptionPaymentType.Vipps]: (
                      <ProviderVipps
                        className={`fill-current ${value === payment.type ? "text-purple" : "text-white"}`}
                      />
                    )
                  }[payment.type]
                }
              </div>
              {payment.free ? (
                <SubscribeSlidePaymentFree payment={payment} value={value} />
              ) : (
                <SubscribeSlidePaymentPaid payment={payment} value={value} />
              )}
              <div className="mb-8 flex h-60 w-full items-center rounded-4 bg-grey-6 px-14 py-8">
                <div
                  className={`flex w-full items-center justify-center gap-6 text-14 ${
                    value === payment.type ? "text-grey-40" : "text-white-40"
                  }`}
                >
                  <Wrapper open={payment.free}>
                    <span
                      className={`text-16 font-bold text-black ${value === payment.type ? "text-black" : "text-white"}`}
                    >
                      Totally Free
                    </span>
                  </Wrapper>
                  <Wrapper open={!payment.free}>
                    <span
                      className={`text-16 font-black text-black ${
                        value === payment.type ? "text-black" : "text-white"
                      }`}
                    >
                      <NumberFormat
                        className="text-16"
                        displayType={"text"}
                        prefix={"$"}
                        value={parsePrice(tier.price, period)}
                        thousandSeparator
                      />
                    </span>{" "}
                    / {PeriodType[period]}
                  </Wrapper>
                </div>
              </div>
              <div
                className={`w-full text-center text-14 ${value === payment.type ? "text-grey-40" : "text-white-40"}`}
              >
                Service fees {payment.fee}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SubscribeSlidePayment
