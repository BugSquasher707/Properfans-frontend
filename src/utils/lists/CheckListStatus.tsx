import { CheckStatusInterface } from "libs/interfaces"
import React from "react"
import CheckListStatusItem from "utils/lists/CheckListStatusItem"

const CheckListStatus = ({ data }: { data: CheckStatusInterface[] }) => {
  return (
    <>
      <div className="w-full">
        {data.map((element: CheckStatusInterface, key: number) => (
          <CheckListStatusItem key={key} data={element} last={key !== data.length - 1} />
        ))}
      </div>
    </>
  )
}

export default CheckListStatus
