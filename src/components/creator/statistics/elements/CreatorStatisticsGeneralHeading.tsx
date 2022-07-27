import CreatorStatisticsGrowth from "components/creator/statistics/elements/CreatorStatisticsGrowth"
import React from "react"
import NumberFormat from "react-number-format"

const CreatorStatisticsGeneralHeading = ({ earnings, growth }: { earnings: number; growth: number }) => {
  return (
    <div className="flex flex-col">
      <label className="mb-8 text-14 font-bold text-grey-40">Earnings</label>
      <div className="flex items-center">
        <span className="mr-12">
          <NumberFormat
            className="text-28 font-black text-black md:text-32"
            displayType={"text"}
            prefix={"$"}
            value={earnings.toFixed(2)}
            thousandSeparator
          />
        </span>
        <CreatorStatisticsGrowth growth={growth} />
      </div>
    </div>
  )
}

export default CreatorStatisticsGeneralHeading
