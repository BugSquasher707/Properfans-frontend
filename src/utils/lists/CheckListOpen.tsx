import { BooleanInterface } from "libs/interfaces"
import React from "react"
import CheckListDot from "utils/lists/CheckListDot"
import CheckListLine from "utils/lists/CheckListLine"

const CheckListOpen = ({
  data,
  active,
  handler
}: {
  data: BooleanInterface[]
  active: number
  handler: (key: number) => void
}) => {
  return (
    <>
      <div className="w-full">
        {data.map((element: BooleanInterface, key: number) => (
          <div key={key} className="w-full" onClick={() => handler(key)}>
            <div className="center flex w-full cursor-pointer gap-14">
              <CheckListDot active={active === key} />
              <div className="flex-grow text-12 font-bold text-black">
                {element.title} <span className="text-grey-40">{element.text}</span>
              </div>
            </div>
            {key !== data.length - 1 ? <CheckListLine /> : <></>}
          </div>
        ))}
      </div>
    </>
  )
}

export default CheckListOpen
