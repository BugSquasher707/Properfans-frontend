import { CheckInterface } from "libs/interfaces"
import React from "react"
import CheckBox from "utils/checks/CheckBox"

const CheckItem = ({ data, handler }: { data: CheckInterface; handler: () => void }) => {
  return (
    <button className="grid w-full grid-cols-[auto,1fr] items-center gap-14" onClick={handler}>
      <CheckBox active={data.active} />
      <div className="w-full text-left text-14 text-grey-40">{data.title}</div>
    </button>
  )
}

export default CheckItem
