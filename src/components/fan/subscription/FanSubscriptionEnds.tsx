import { DATE } from "libs/constants"
import { SubscriptionDetailsInterface } from "libs/interfaces"
import moment from "moment"
import React from "react"
import { BiRefresh } from "react-icons/bi"
import { RiErrorWarningFill } from "react-icons/ri"

const FanSubscriptionEnds = ({ sub }: { sub: SubscriptionDetailsInterface }) => {
  return (
    <>
      {!sub.trial && sub.renew ? (
        <button className="flex h-28 w-full items-center justify-center gap-4 rounded-4 bg-grey-3 p-4">
          <div className="group relative flex h-18 w-18 items-center">
            <BiRefresh className="text-18 text-purple" />
            <div className="absolute top-[50%] left-18 hidden translate-y-[-50%] transform pl-8 group-hover:flex">
              <div className="relative flex h-36 w-100 items-center justify-center rounded-4 bg-black-14 px-12 text-12 font-bold text-white">
                <div className="absolute left-1 top-[50%] h-12 w-12 translate-x-[-50%] translate-y-[-50%] rotate-45 transform rounded-2 bg-black-14"></div>
                <span>Auto Renew</span>
              </div>
            </div>
          </div>
          <span className="max-w-[calc(100%-20px)] text-12 font-bold text-grey-40">
            Ends {moment(sub.date).add(1, "month").format(DATE.SHORT)}
          </span>
        </button>
      ) : (
        ""
      )}
      {!sub.trial && !sub.renew && moment(sub.date).format(DATE.SHORT) !== moment().format(DATE.SHORT) ? (
        <button className="flex h-28 w-full items-center justify-center gap-4 rounded-4 bg-grey-3 p-4">
          <span className="max-w-[calc(100%-20px)] text-12 font-bold text-grey-40">
            Ends {moment(sub.date).format(DATE.SHORT)}
          </span>
        </button>
      ) : (
        ""
      )}
      {sub.trial && !sub.renew ? (
        <button className="flex h-28 w-full items-center justify-center gap-4 rounded-4 bg-grey-3 p-4">
          <span className="max-w-[calc(100%-20px)] text-12 font-bold text-grey-40">
            Trial period ends {moment(sub.date).format(DATE.SHORT)}
          </span>
        </button>
      ) : (
        ""
      )}
      {!sub.trial && !sub.renew && moment(sub.date).format(DATE.SHORT) === moment().format(DATE.SHORT) ? (
        <button className="bg-red/[0.25] flex h-28 w-full items-center justify-center gap-4 rounded-4 p-4">
          <RiErrorWarningFill className="text-red" />
          <span className="max-w-[calc(100%-20px)] text-12 font-bold text-red">Ends today, auto renew disabled</span>
        </button>
      ) : (
        ""
      )}
    </>
  )
}

export default FanSubscriptionEnds
