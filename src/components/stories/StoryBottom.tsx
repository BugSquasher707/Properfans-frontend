import { toastSuccess } from "api/integration/toaster"
import { URL } from "libs/constants"
import React, { useState } from "react"
import CopyToClipboard from "react-copy-to-clipboard"
import { IoMdShare } from "react-icons/io"

const StoryBottom = ({ id }: { id: string }) => {
  const [copied, setCopied] = useState(false)

  const copyEnabled = () => {
    setCopied(true)
    toastSuccess("Copied")
  }

  return (
    <>
      <div className="absolute bottom-0 left-0 right-0 p-10">
        <div className="absolute bottom-0 left-0 h-80 w-full bg-gradient-to-b from-transparent to-grey-40"></div>
        <div className="relative w-full cursor-pointer">
          <CopyToClipboard
            text={`https://properfans.com${URL.FAN.STORY.replace(":story", id)}`}
            onCopy={() => copyEnabled()}
          >
            {copied ? (
              <div className="flex h-46 w-full items-center justify-center rounded-4 bg-purple text-14 font-bold text-white">
                Copied link!
              </div>
            ) : (
              <div className="flex h-46 w-full items-center justify-center space-x-[10px] rounded-4 border-1 border-white border-opacity-20 hover:border-opacity-100 hover:bg-white-10">
                <IoMdShare className="text-14 text-white" />
                <div className="text-14 font-bold text-white">Share the story</div>
              </div>
            )}
          </CopyToClipboard>
        </div>
      </div>
    </>
  )
}

export default StoryBottom
