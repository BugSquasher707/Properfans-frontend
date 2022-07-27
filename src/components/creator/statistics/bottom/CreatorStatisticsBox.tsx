import CreatorStatisticsGrowth from "components/creator/statistics/elements/CreatorStatisticsGrowth"
import React from "react"
import NumberFormat from "react-number-format"

const CreatorStatisticsBox = ({
  label,
  description,
  value,
  gain,
  prefix
}: {
  label: string
  description: string
  value: number
  gain: number
  prefix: string
}) => {
  return (
    <div className="grid w-full grid-cols-1 justify-start gap-8">
      <div className="text-14 font-bold text-grey-40">{label}</div>
      <div className="flex items-center">
        <NumberFormat
          className="mr-auto text-24 font-bold text-black"
          displayType={"text"}
          prefix={prefix}
          value={value}
          thousandSeparator
        />
        <CreatorStatisticsGrowth growth={gain} />
      </div>
      <div className="text-12 font-bold leading-normal text-grey-40">{description}</div>
    </div>
  )
}

export default CreatorStatisticsBox
