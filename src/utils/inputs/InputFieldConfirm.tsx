import { TitleInterface } from "libs/interfaces"
import React from "react"
import { FiCheck } from "react-icons/fi"

const InputFieldConfirm = ({
  data,
  value,
  handler,
  confirm
}: {
  data: TitleInterface
  value: string
  handler: (value: string) => void
  confirm: boolean
}) => {
  return (
    <>
      <div className="w-full">
        <div className="mb-12 w-full text-left text-14 text-grey-40">{data.title}</div>
        <div className="relative w-full">
          <input
            className="input h-42 !pr-42 font-semibold focus:border-purple"
            placeholder={data.title}
            value={value}
            onChange={(e) => handler(e.target.value)}
          />
          {confirm ? (
            <div className="absolute right-14 top-12 flex h-18 w-18 cursor-pointer items-center justify-center rounded-full bg-purple">
              <FiCheck className="text-12 text-white" />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}

export default InputFieldConfirm
