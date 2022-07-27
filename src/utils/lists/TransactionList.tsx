import { NumberInterface } from "libs/interfaces"
import React from "react"
import TransactionItem from "utils/lists/TransactionItem"

const TransactionList = ({ data, open }: { data: NumberInterface[]; open: boolean }) => {
  return (
    <>
      <div className={`grid w-full gap-8 ${open ? "scroll max-h-[calc(100%-88px)] overflow-y-auto" : ""}`}>
        {data
          .filter((element: NumberInterface, key: number) => open || key < 5)
          .map((element: NumberInterface, key: number) => (
            <TransactionItem key={key} data={element} />
          ))}
      </div>
    </>
  )
}

export default TransactionList
