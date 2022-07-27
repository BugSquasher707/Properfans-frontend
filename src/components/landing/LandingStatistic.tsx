import { StatisticInterface } from "libs/interfaces"
import React from "react"

const LandingStatistic = ({ data }: { data: StatisticInterface }) => {
  return (
    <>
      <div className="w-full max-w-full rounded-4 bg-white py-12 px-16 shadow-md">
        <div className="mb-6 flex w-full items-center justify-between">
          <div className="text-14 font-bold text-grey-40">{data.title}</div>
          <div className="text-14 font-bold text-purple">{data.text}</div>
        </div>
        <div className="w-full text-16 font-bold text-black">{data.statistic}</div>
      </div>
    </>
  )
}

export default LandingStatistic
