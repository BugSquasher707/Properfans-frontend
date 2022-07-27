import Wrapper from "components/wrappers/Wrapper"
import { DropdownGroupInterface, DropdownInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import InputDropdownItem from "utils/inputs/InputDropdownItem"
import InputTitle from "utils/inputs/InputTitle"
import TooltipBackground from "utils/modals/TooltipBackground"

const InputDropdownField = ({
  data,
  icon,
  value,
  handler,
  grey
}: {
  data: DropdownGroupInterface
  icon: React.ReactNode
  value: string
  handler: (value: any) => void
  grey?: boolean
}) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="w-full">
        <InputTitle data={data} grey={grey} />
        <div className="relative w-full">
          <div className={`input w-full !p-0 dark:shadow-none ${grey ? "bg-grey-1" : "shadow-md"}`}>
            <button className="relative flex w-full items-center justify-center" onClick={() => setOpen(true)}>
              <div className="center h-40 w-40">{icon}</div>
              <div className="flex h-42 flex-1 items-center text-left text-14 font-semibold text-black focus:border-purple">
                {value ? value : "Select"}
              </div>
              <div className={`center h-40 w-40 transform ${open ? "rotate-180" : ""}`}>
                <MdKeyboardArrowDown className="text-grey-20" />
              </div>
            </button>
            <Wrapper open={open}>
              <TooltipBackground handler={setOpen} />
              <div
                className={`absolute top-42 left-0 z-40 mt-10 max-h-200 w-full cursor-pointer overflow-y-scroll rounded-4 border-1 border-grey-12 bg-white px-6 py-4 dark:shadow-none ${
                  grey ? "" : "shadow-md"
                }`}
                onClick={() => setOpen(false)}
              >
                {data.data.map((element: DropdownInterface, key: number) => (
                  <InputDropdownItem key={key} data={element} handler={handler} />
                ))}
              </div>
            </Wrapper>
          </div>
        </div>
      </div>
    </>
  )
}

export default InputDropdownField
