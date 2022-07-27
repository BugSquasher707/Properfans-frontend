import React from "react"
import NumberFormat from "react-number-format"

const MeetOrderSummaryItem = ({ icon, title, price }: { icon: JSX.Element; title: string; price: number }) => {
  return (
    <>
      <div className="grid w-full grid-cols-[1fr,auto] items-center border-b-1 border-grey-6 pb-14">
        <div className="grid w-full grid-cols-[auto,1fr] items-center gap-20">
          <div className="flex h-40 w-40 items-center justify-center rounded-4 border-1 border-grey-12 bg-white">
            {icon}
          </div>
          <div className="truncate overflow-ellipsis text-14 font-bold text-black">{title}</div>
        </div>
        <div className="flex">
          <NumberFormat
            className="text-14 font-bold text-grey-40"
            displayType={"text"}
            prefix={"$"}
            value={price}
            thousandSeparator
          />
        </div>
      </div>
    </>
  )
}

export default MeetOrderSummaryItem
