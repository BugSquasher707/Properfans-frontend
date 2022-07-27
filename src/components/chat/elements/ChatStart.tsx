import { statusApi } from "api/endpoints/status"
import { toastError, toastSuccess } from "api/integration/toaster"
import { useChat } from "contexts/ChatContext"
import { useProps } from "contexts/PropsContext"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const ChatStart = () => {
  const { chatId } = useChat()
  const { token } = useProps()

  const onSubmit = async () => {
    if (!chatId) {
      toastError("No chat selected")
      return
    }

    console.log(token)

    const result = await statusApi()

    if (result) {
      toastSuccess("Chat loaded")
    }
  }

  return (
    <>
      <div className="main-chat flex w-full items-center text-center text-14 text-grey-40">
        <div className="flex w-full justify-center">
          <div className="grid w-[165px] grid-cols-1">
            <div className="mb-30 w-full text-22 font-bold text-black">Don’t be shy, say something!</div>
            <div className="mb-40 flex w-full justify-center">
              <img alt="" className="h-80 w-80" src={"/emojis/emoji_cool.png"} />
            </div>
            <ButtonPurple
              title={
                <>
                  Proper wave <span className="font-normal">👋🏽</span>
                </>
              }
              action={onSubmit}
              full
              small
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ChatStart
