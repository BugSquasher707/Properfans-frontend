import { toastSuccess } from "api/integration/toaster"
import { TitleInterface } from "libs/interfaces"
import React from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { MdContentCopy } from "react-icons/md"

const ReadOnlyField = ({ data }: { data: TitleInterface }) => {
  const copyEnabled = () => {
    toastSuccess("Copied")
  }

  return (
    <>
      <div className="w-full">
        <div className="mb-12 w-full text-left text-14 text-grey-40">{data.title}</div>
        <div className="relative w-full">
          <input className="input h-42 font-semibold focus:border-purple" value={data.text ?? ""} readOnly />
          <CopyToClipboard text={data.text ?? ""} onCopy={() => copyEnabled()}>
            <div className="group absolute right-0 top-0 flex h-42 w-42 cursor-pointer items-center justify-center">
              <MdContentCopy className="text-18 text-grey-20 group-hover:text-black" />
            </div>
          </CopyToClipboard>
        </div>
      </div>
    </>
  )
}

export default ReadOnlyField
