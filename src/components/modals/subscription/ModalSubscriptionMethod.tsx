import { DATE } from "libs/constants"
import { PaymentTableInterface, SubscriptionManageInterface } from "libs/interfaces"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { AiFillDollarCircle } from "react-icons/ai"
import { FaStripeS } from "react-icons/fa"
import { IoMdAlert } from "react-icons/io"
import NumberFormat from "react-number-format"

const ModalSubscriptionMethod = ({ profile }: { profile: SubscriptionManageInterface }) => {
  const [payments, setPayments] = useState<PaymentTableInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    setPayments([])
  }

  return (
    <>
      <div className="w-full">
        <div className="mb-20 w-full text-14 text-grey-40">Payment method</div>
        <div className="mb-14 grid w-full grid-cols-1 items-center gap-16 sm:grid-cols-[70px,1fr,auto]">
          <div className="flex h-70 w-full items-center justify-center rounded-4 bg-purple-10">
            <FaStripeS className="text-[32px] text-purple" />
          </div>
          <div className="w-full">
            <div className="relative mb-4 h-22 w-full">
              <div className="absolute top-0 left-0 w-full truncate overflow-ellipsis text-14 font-bold text-black">
                {profile.subscription.mail}
              </div>
            </div>
            <div className="flex w-full items-center space-x-[4px]">
              <div className="text-14 text-grey-40">Payments being handled by</div>
              <div className="h-14 text-14 font-bold text-purple">Stripe</div>
            </div>
          </div>
          <div className="flex items-center justify-start space-x-[10px]">
            <div className="flex h-20 items-center rounded-4 border-1 border-grey-3 bg-white px-6 text-12 font-bold text-black shadow-md dark:shadow-none">
              <NumberFormat displayType={"text"} prefix={"$"} value={profile.subscription.price} thousandSeparator />
            </div>
            <div className="text-12 font-bold text-grey-40">/monthly</div>
          </div>
        </div>
        <div className="grid w-full grid-cols-[auto,1fr] gap-10">
          <div className="grid grid-cols-[auto,1fr] items-center gap-6">
            <AiFillDollarCircle className="text-16 text-grey-20" />
            <div className="text-12 font-bold text-grey-40">Next payment</div>
          </div>
          <div className="grid grid-cols-[auto,1fr] items-center gap-6">
            <IoMdAlert className="text-16 text-black" />
            <div className="text-12 font-bold text-black">
              {moment(profile.subscription.current_period_end * 1000).format(DATE.DATETIME)}
            </div>
          </div>
        </div>
        <div className="my-20 hidden w-full border-b-1 border-grey-10"></div>
        <div className="mb-20 hidden w-full text-14 text-grey-40">Recent payments</div>
        <div className="hidden w-full overflow-x-scroll">
          <div className="w-full">
            <div className="flex w-max min-w-full justify-between gap-20">
              <div className="w-[140px] text-12 text-grey-40">Product</div>
              <div className="w-[70px] text-12 text-grey-40">Method</div>
              <div className="w-[100px] text-12 text-grey-40">Date</div>
              <div className="w-[80px] text-right text-12 text-grey-40">Amount</div>
            </div>
            {payments && payments.length > 0 ? (
              <div className="grid w-full grid-cols-1 gap-4">
                {payments.map((payment: PaymentTableInterface, key: number) => (
                  <div
                    key={key}
                    className="flex w-max min-w-full items-center justify-between gap-20 border-b-1 border-grey-6 py-20"
                  >
                    <div className="w-[140px] text-14 font-bold text-black">{payment.product}</div>
                    <div className="w-[70px] text-12 text-grey-40">{payment.method}</div>
                    <div className="w-[100px] text-14 text-grey-40">{payment.date}</div>
                    <div className="w-[80px] text-right text-14 font-bold text-purple">
                      <NumberFormat displayType={"text"} prefix={"$"} value={payment.amount} thousandSeparator />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex h-80 w-full items-center justify-center text-14 font-bold text-grey-40">
                No recent payments
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalSubscriptionMethod
