import Wrapper from "components/wrappers/Wrapper"
import React from "react"
import { IoAlertCircle } from "react-icons/io5"
import { MdCheckCircle } from "react-icons/md"

const InputFieldModernCheck = ({
  pre,
  value,
  placeholder,
  handler,
  enter,
  success,
  message
}: {
  pre?: string
  value: string
  placeholder: string
  handler: (value: string) => void
  enter?: any
  success?: boolean
  message?: string
}) => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-10">
        <div
          className={`grid h-46 items-center gap-6 rounded-[10px] border-2 px-20 ${
            pre ? "grid-cols-[auto,1fr,auto]" : "grid-cols-[1fr,auto]"
          } ${success === undefined ? "border-grey-6" : success ? "border-green" : "border-red"}`}
        >
          {pre ? <div className="text-14 text-grey-40">{pre}</div> : ""}
          <input
            className="h-42 text-14 font-bold text-black"
            placeholder={placeholder}
            type="text"
            value={value ?? ""}
            onChange={(e) => handler(e.target.value)}
            onKeyUp={(e) => (enter ? enter(e.key) : "")}
          />
          {success === undefined ? (
            ""
          ) : success ? (
            <MdCheckCircle className="text-18 text-green" />
          ) : (
            <IoAlertCircle className="text-18 text-red" />
          )}
        </div>
        <Wrapper open={success !== undefined && message ? true : false}>
          <div className={`w-full px-20 text-14 ${success ? "text-green" : "text-red"}`}>{message}</div>
        </Wrapper>
      </div>
    </>
  )
}

export default InputFieldModernCheck
