import { PeriodType } from "libs/enums"
import { SubscriptionPeriodInterface } from "libs/interfaces"
import React from "react"
import { IoMdHeart } from "react-icons/io"

const SubscribeSlidePeriod = ({ value, handler }: { value: PeriodType; handler: any }) => {
  const levels = [
    // { title: "Weekly", text: "The subscription will renew weekly", type: PeriodType.Weekly },
    {
      title: "Monthly",
      text: "The subscription will renew monthly",
      type: PeriodType.Monthly
    }
    // { title: "Yearly", text: "The subscription will renew yearly", type: PeriodType.Yearly },
  ]

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
        {levels.map((level: SubscriptionPeriodInterface, key: number) => (
          <div
            key={key}
            className={`w-full cursor-pointer rounded-4 border-1 px-20 py-40 ${
              value === level.type ? "border-white bg-white" : "border-white-10"
            }`}
            onClick={() => handler(level.type)}
          >
            <div className="mb-20 flex w-full items-center justify-center">
              {[...Array(key + 1)].map((e, ke) => (
                <IoMdHeart
                  key={ke}
                  className={`text-24 ${value === level.type ? "text-purple" : "text-black opacity-20"}`}
                />
              ))}
            </div>
            <div
              className={`mb-10 w-full text-center text-16  font-bold ${
                value === level.type ? "text-black" : "text-white"
              }`}
            >
              {level.title}
            </div>
            <div className={`w-full text-center  text-14 ${value === level.type ? "text-grey-40" : "text-white-40"}`}>
              {level.text}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SubscribeSlidePeriod
