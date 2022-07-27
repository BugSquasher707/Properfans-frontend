import { TitleInterface } from "libs/interfaces"
import React from "react"
import { FiCheck } from "react-icons/fi"
import CheckListLine from "utils/lists/CheckListLine"

const CheckList = ({ data }: { data: TitleInterface[] }) => {
  return (
    <>
      <div className="w-full">
        {data.map((element: TitleInterface, key: number) => (
          <div key={key}>
            <div className="center flex w-full gap-14">
              <div className="center h-20 w-20 flex-none rounded-full bg-purple">
                <FiCheck className="text-12 text-white" />
              </div>
              <div className="flex-grow text-12 font-bold text-black">{element.title}</div>
            </div>
            {key !== data.length - 1 ? <CheckListLine /> : <></>}
          </div>
        ))}
      </div>
    </>
  )
}

export default CheckList
