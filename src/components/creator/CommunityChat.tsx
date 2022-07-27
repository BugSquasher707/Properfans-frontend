import { statusApi } from "api/endpoints/status"
import { messageAddEmoji, messageChangeMessage } from "api/integration/chat"
import { toastError } from "api/integration/toaster"
import { useProps } from "contexts/PropsContext"
import React, { useEffect, useState } from "react"
import { BiCaretLeft } from "react-icons/bi"
import { IoMdSend } from "react-icons/io"
import { VscSmiley } from "react-icons/vsc"
import ChatMessages from "utils/chat/ChatMessages"
import EmojiPickerMart from "utils/chat/popups/EmojiPickerMart"

const CommunityChat = ({ handler }: { handler: any }) => {
  const { token } = useProps()

  const [openEmoji, setOpenEmoji] = useState(false)
  const [message, setMessage] = useState("")

  const [messages] = useState([])

  useEffect(() => {
    getChat()
  })

  const addEmoji = (emoji: string) => {
    setMessage(messageAddEmoji(message, emoji))
  }

  const changeMessage = (e: any) => {
    setMessage(messageChangeMessage(message, e))
  }

  const getChat = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      toastError("Community chat")
    }
  }

  const sendChatMessage = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      toastError("Sent message")
    }
  }

  return (
    <>
      <div className="flex h-full w-full flex-wrap rounded-4 border-1 border-grey-12 bg-white p-20 shadow-sm">
        <div className="between mb-20 w-full">
          <div className="select-none text-14 font-bold text-black">Community</div>
          <button className="center text-12 text-grey-40" name={"Close"} onClick={() => handler(false)}>
            <BiCaretLeft className="text-14" />
            Close
          </button>
        </div>
        <div className="my-20 h-[calc(100%-158px)] w-full">
          <ChatMessages messages={messages} />
        </div>
        <div className="between relative mb-12 w-full items-center gap-5 rounded-4 border-1 border-grey-12 py-8 pl-16 pr-8 shadow-sm">
          <textarea
            className="w-[calc(100% - 4.5rem)] leading-24 h-24 max-h-60 min-h-1/2 flex-grow text-14 font-bold text-black placeholder-grey-40"
            placeholder="Message..."
            value={message}
            onChange={(e) => changeMessage(e)}
          />
          <div className="relative">
            <button
              className="center group h-30 w-30 flex-none rounded-4 hover:bg-grey-3"
              name={"Emoji"}
              onClick={() => setOpenEmoji(!openEmoji)}
            >
              <VscSmiley className="text-grey-20 group-hover:text-black" />
            </button>
            <EmojiPickerMart add={addEmoji} handler={setOpenEmoji} open={openEmoji} />
          </div>
          <button
            className="center h-30 w-30 flex-none rounded-4 bg-purple"
            name={"Send"}
            onClick={() => sendChatMessage()}
          >
            <IoMdSend className="text-14 text-white" />
          </button>
        </div>
        <div className="w-full select-none text-right text-12 text-grey-40">{240 - message.length} characters left</div>
      </div>
    </>
  )
}

export default CommunityChat
