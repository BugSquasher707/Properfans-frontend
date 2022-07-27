import { StatusType } from "libs/enums"
import { CheckStatusInterface } from "libs/interfaces"
import React from "react"
import { FiCheck } from "react-icons/fi"
import { MdClose, MdRefresh } from "react-icons/md"
import CheckListBar from "utils/lists/CheckListBar"
import CheckListLine from "utils/lists/CheckListLine"

const CheckListStatusItem = ({ data, last }: { data: CheckStatusInterface; last: boolean }) => {
  return (
    <>
      <div className="relative w-full">
        <div className="center relative flex w-full cursor-pointer gap-14">
          <div className="absolute left-0 top-[50%] translate-y-[-50%] transform">
            {
              {
                [StatusType.Default]: <div className="h-18 w-18 rounded-full border-1 border-grey-10"></div>,
                [StatusType.Pending]: (
                  <div className="center h-18 w-18 rounded-full bg-purple">
                    <MdRefresh className="text-12 text-white" />
                  </div>
                ),
                [StatusType.Completed]: (
                  <div className="center h-18 w-18 rounded-full bg-green">
                    <FiCheck className="text-12 text-white" />
                  </div>
                ),
                [StatusType.Rejected]: (
                  <div className="center h-18 w-18 rounded-full bg-red">
                    <MdClose className="text-12 text-white" />
                  </div>
                )
              }[data.status]
            }
          </div>
          <div className="between flex w-full flex-wrap items-center gap-8 pl-32">
            <div className="text-12 font-bold text-black md:w-full">{data.title}</div>
            <div className="text-12 text-grey-40 md:w-full">{data.text}</div>
          </div>
        </div>
        {last ? <CheckListBar /> : <></>}
        {last ? <CheckListLine /> : <></>}
      </div>
    </>
  )
}

export default CheckListStatusItem
