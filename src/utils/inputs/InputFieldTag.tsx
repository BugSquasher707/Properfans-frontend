import { toastSuccess } from "api/integration/toaster"
import React from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { MdContentCopy } from "react-icons/md"

const InputFieldTag = ({
  value,
  handler,
  user
}: {
  value: string
  handler: (value: string) => void
  user: boolean
}) => {
  const copyEnabled = () => {
    toastSuccess("Copied")
  }

  return (
    <>
      <div className="relative grid h-46 w-full grid-cols-[auto,1fr,46px] items-center rounded-4 border-1 border-grey-10 bg-grey-1 pl-16">
        <div className="text-14 text-grey-40">
          properfans.com/
          <span className="font-bold text-black">{user ? "u" : "c"}</span>/
        </div>
        <input
          className="placeholder-black-30::placeholder h-40 pr-16 pb-2 text-14 font-bold text-black"
          placeholder="handle"
          value={value}
          onChange={(e) => handler(e.target.value.toLowerCase())}
        />
        <CopyToClipboard text={`https://properfans.com/${user ? "u" : "c"}/${value}`} onCopy={() => copyEnabled()}>
          <div className="group absolute right-0 top-0 flex h-46 w-46 cursor-pointer items-center justify-center">
            <MdContentCopy className="text-18 text-grey-20 group-hover:text-black" />
          </div>
        </CopyToClipboard>
      </div>
    </>
  )
}

export default InputFieldTag
