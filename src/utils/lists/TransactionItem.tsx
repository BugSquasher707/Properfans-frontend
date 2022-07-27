import { ReactComponent as ProperCoin } from "assets/img/propercoin.svg"
import { NumberInterface } from "libs/interfaces"
import React from "react"
import NumberFormat from "react-number-format"

const TransactionItem = ({ data }: { data: NumberInterface }) => {
  return (
    <>
      <div className="group flex w-full cursor-pointer items-center gap-12 rounded-4 p-12 hover:bg-purple-10">
        <div className="grid flex-grow grid-cols-1 gap-2">
          <div className="w-full select-none text-14 font-bold text-black">{data.title}</div>
          <div className="w-full select-none text-12 text-grey-40">{data.text}</div>
        </div>
        <div className="flex-none select-none font-bold text-purple">
          <div className="flex items-center space-x-[8px]">
            <ProperCoin className="h-16 w-16 fill-current text-grey-20 group-hover:text-purple" />
            <NumberFormat displayType={"text"} value={data.number} thousandSeparator />
          </div>
        </div>
      </div>
    </>
  )
}

export default TransactionItem
