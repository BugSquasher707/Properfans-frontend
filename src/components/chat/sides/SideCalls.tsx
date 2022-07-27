import { ChatSideType } from "libs/enums"
import React, { useState } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"
import ButtonGreyDimm from "utils/buttons/grey/ButtonGreyDimm"

const SideCalls = ({ handler }: { handler: any }) => {
  const [openDms, setOpenDms] = useState(false)

  const [unread] = useState(6)

  return (
    <>
      <div className="mb-20 flex w-full justify-between">
        <div className="flex items-center space-x-[8px]">
          <button
            className="text-14 font-bold text-grey-40 hover:text-black"
            name={"Direct messages"}
            onClick={() => handler(ChatSideType.Chat)}
          >
            Direct messages
          </button>
          <MdKeyboardArrowRight className="text-grey-20" />
          <button
            className="text-14 font-bold text-black"
            name={"Calls history"}
            onClick={() => handler(ChatSideType.Chat)}
          >
            Calls History
          </button>
          {unread > 0 ? (
            <div className="flex h-20 min-w-[20px] items-center justify-center rounded-full bg-purple px-6 text-10 font-bold text-white">
              {unread}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="w-full" onClick={() => setOpenDms(!openDms)}>
        <ButtonGreyDimm title={openDms ? "Hide older calls" : "Show older calls"} />
      </div>
    </>
  )
}

export default SideCalls
