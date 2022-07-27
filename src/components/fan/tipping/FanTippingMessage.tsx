import React, { useState } from "react"
import { VscSmiley } from "react-icons/vsc"
import EmojiPickerMart from "utils/chat/popups/EmojiPickerMart"

const FanTippingMessage = ({
  message,
  handlerMessage,
  handlerEmoji
}: {
  message: string
  handlerMessage: any
  handlerEmoji: any
}) => {
  const [openEmoji, setOpenEmoji] = useState(false)

  return (
    <>
      <div className="w-full rounded-4 bg-grey-6">
        <textarea
          className="placeholder-grey-40:placeholder h-84 w-full resize-none px-16 py-12 text-14 font-semibold text-black"
          name=""
          placeholder="Message"
          value={message}
          onChange={(e) => handlerMessage(e.target.value)}
        ></textarea>
        <div className="relative flex w-full items-center justify-between space-x-[20px] rounded-b-4 bg-grey-4 pl-16">
          <button className="text-12 text-grey-40">Add emojis</button>
          <div className="relative">
            <button
              className="group flex h-36 w-36 flex-none items-center justify-center rounded-4 hover:bg-grey-3"
              onClick={() => setOpenEmoji(!openEmoji)}
            >
              <VscSmiley className="text-grey-20 group-hover:text-black" />
            </button>
            <EmojiPickerMart add={handlerEmoji} handler={setOpenEmoji} open={openEmoji} />
          </div>
        </div>
      </div>
    </>
  )
}

export default FanTippingMessage
