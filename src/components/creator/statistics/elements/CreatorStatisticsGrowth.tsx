import React from "react"
import NumberFormat from "react-number-format"

const CreatorStatisticsGrowth = ({ growth }: { growth: number }) => {
  return (
    <div
      className={`flex h-20 items-center rounded-4 px-8  ${
        growth === 0 ? "bg-grey-4 text-grey-30" : growth > 0 ? "bg-purple-10 text-purple" : "bg-red-10 text-red"
      }`}
    >
      <NumberFormat
        className="text-12 font-bold"
        displayType={"text"}
        prefix={growth >= 0 ? "+" : "-"}
        suffix={"%"}
        value={Math.abs(growth).toFixed(1)}
        thousandSeparator
      />
    </div>
  )
}

export default CreatorStatisticsGrowth
