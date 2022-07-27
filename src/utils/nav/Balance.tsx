import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import { URL } from "libs/constants"
import { NumberInterface } from "libs/interfaces"
import React from "react"
import { GoPlus } from "react-icons/go"
import { Link } from "react-router-dom"

const Balance = ({ data }: { data: NumberInterface }) => {
  return (
    <div className="flex items-center space-x-[14px]">
      <div className="">
        <div className="flex items-center space-x-[8px] text-14 font-bold text-black">
          <Propercoin className="h-16 w-16 fill-current text-purple" />
          {data.number}
        </div>
        <div className="text-right text-12 text-grey-40">{data.number / 100}</div>
      </div>
      <Link className="flex h-26 w-26 items-center justify-center rounded-4 bg-purple-10" to={URL.FAN.SHOP}>
        <GoPlus className="text-9 text-purple" />
      </Link>
    </div>
  )
}

export default Balance
