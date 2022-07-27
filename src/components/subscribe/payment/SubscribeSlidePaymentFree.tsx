import { SubscriptionPaymentType } from "libs/enums"
import { SubscriptionPaymentInterface } from "libs/interfaces"
import React from "react"
import { FaBox } from "react-icons/fa"
import { MdFileDownload } from "react-icons/md"

const SubscribeSlidePaymentFree = ({
  value,
  payment
}: {
  value: SubscriptionPaymentType
  payment: SubscriptionPaymentInterface
}) => {
  return (
    <>
      <div className="mb-24 flex w-full items-center gap-14">
        <div
          className={`flex h-16 items-center space-x-[8px] text-14 ${
            value === payment.type ? "text-grey-40" : "text-white-40"
          }`}
        >
          <FaBox className="" /> Surveys
        </div>
        <div
          className={`flex h-16 items-center space-x-[8px] text-14 ${
            value === payment.type ? "text-grey-40" : "text-white-40"
          }`}
        >
          <MdFileDownload className="text-18" /> Download Apps
        </div>
      </div>
    </>
  )
}

export default SubscribeSlidePaymentFree
