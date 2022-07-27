import { statusApi } from "api/endpoints/status"
import { messageAddEmoji, messageChangeMessage } from "api/integration/chat"
import { toastError } from "api/integration/toaster"
import { useChat } from "contexts/ChatContext"
import { useProps } from "contexts/PropsContext"
import React, { useEffect, useState } from "react"
import { HiOutlineEmojiHappy } from "react-icons/hi"
import { IoMdImage, IoMdSend } from "react-icons/io"
import { VscLoading } from "react-icons/vsc"
import EmojiPickerMart from "utils/chat/popups/EmojiPickerMart"
import GifPicker from "utils/chat/popups/GifPicker"

const ChatSend = () => {
  const { chatId } = useChat()
  const { socket, token } = useProps()

  const [openEmoji, setOpenEmoji] = useState(false)
  const [openGif, setOpenGif] = useState(false)

  const [loading, setLoading] = useState(false)

  const [message, setMessage] = useState("")
  const [typing, setTyping] = useState(false)

  const addEmoji = (emoji: string) => {
    setMessage(messageAddEmoji(message, emoji))
  }

  useEffect(() => {
    setMessage("")
  }, [chatId])

  useEffect(() => {
    if (message && !typing) {
      socket.emit("typing", chatId, () => {
        setTyping(true)
      })

      setTimeout(() => {
        setTyping(false)
      }, 5000)
    }
  }, [message])

  const sendGif = async (gif: string, preview: string) => {
    if (!gif || !preview) {
      return
    }

    if (loading) {
      return
    }

    setLoading(true)

    console.log(token)

    const result = await statusApi()

    if (result) {
      setOpenGif(false)
    }

    setLoading(false)
  }

  const changeMessage = (newMessage: string) => {
    setMessage(messageChangeMessage(message, newMessage))
  }

  const onSubmit = async () => {
    if (!chatId) {
      toastError("No chat selected")
      return
    }

    if (!message) {
      return
    }

    if (loading) {
      return
    }

    setLoading(true)

    const result = await statusApi()

    if (result) {
      setMessage("")
    }

    setLoading(false)
  }

  const onEnter = (key: string) => {
    if (key === "Enter") {
      onSubmit()
    }
  }

  return (
    <>
      <div className="fixed bottom-0 left-0 h-66 w-full border-t-1 border-grey-12 p-6 shadow-md dark:shadow-none lg:relative lg:bottom-auto lg:left-auto lg:h-auto lg:border-t-0 lg:p-0 lg:shadow-none">
        <div className="grid h-52 w-full grid-cols-[1fr,auto] border-0 border-grey-12 bg-white pl-20 lg:rounded-4 lg:border-1">
          <input
            className="placeholder-grey-40::placeholder w-full text-14 font-semibold text-black"
            placeholder="Message..."
            type="text"
            value={message}
            onChange={(e) => changeMessage(e.target.value)}
            onKeyDown={(e) => onEnter(e.key)}
          />
          <div className="flex items-center justify-center p-8">
            <div className="flex items-center space-x-[4px]">
              <div className="relative">
                <button
                  className={`group flex h-32 w-32 items-center justify-center rounded-4 hover:bg-grey-3 ${
                    openEmoji ? "bg-grey-6" : ""
                  }`}
                  name={"Emoji"}
                  onClick={() => setOpenEmoji(!openEmoji)}
                >
                  <HiOutlineEmojiHappy
                    className={`text-18 group-hover:text-black ${openEmoji ? "text-grey-40" : "text-grey-20"}`}
                  />
                </button>
                <EmojiPickerMart add={addEmoji} handler={setOpenEmoji} open={openEmoji} />
              </div>
              <div className="relative">
                <button
                  className="group flex h-32 w-32 items-center justify-center rounded-4 active:bg-grey-10 hover:bg-grey-3"
                  name={"Gif"}
                  onClick={() => setOpenGif(true)}
                >
                  <IoMdImage className="text-20 text-grey-20 group-hover:text-black" />
                </button>
                <GifPicker handler={setOpenGif} open={openGif} send={sendGif} />
              </div>
            </div>
            <div className="mx-14 h-24 border-r-1 border-grey-10"></div>
            <button
              className="group flex h-32 w-32 items-center justify-center rounded-4 active:bg-purple-20 hover:bg-purple-10"
              name={"Send"}
              onClick={() => onSubmit()}
            >
              {loading ? (
                <VscLoading className="animate-spin text-20 text-purple" />
              ) : (
                <IoMdSend className="text-20 text-purple" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatSend
