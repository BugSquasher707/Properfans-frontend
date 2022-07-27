import React from "react"
import NumberFormat from "react-number-format"

const MeetPrice = ({ price }: { price: number }) => {
  return (
    <>
      <div className="mb-4 flex w-full items-center justify-center space-x-[6px]">
        <div className="mt-[-20px] text-18 font-bold text-grey-40">$</div>
        <div className="text-34 font-bold text-black">
          <NumberFormat className="text-34" displayType={"text"} value={price} thousandSeparator />
        </div>
      </div>
      <div className="w-full text-center text-12 text-grey-40">VAT (incl.)</div>
    </>
  )
}

export default MeetPrice
