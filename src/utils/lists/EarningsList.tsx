import { EarningsInterface } from "libs/interfaces"
import React from "react"
import EarningsItem from "utils/lists/EarningsItem"

const EarningsList = ({ data }: { data: EarningsInterface[] }) => {
  return (
    <>
      <div className="flex w-max space-x-[12px]">
        {data.map((element: any, key: number) => (
          <EarningsItem key={key} data={element} />
        ))}
      </div>
    </>
  )
}

export default EarningsList
