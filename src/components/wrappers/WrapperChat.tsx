import NavFan from "components/nav/NavFan"
import WrapperSwipe from "components/wrappers/WrapperSwipe"
import { ChatType } from "libs/enums"
import React from "react"
import Chat from "views/chat/Chat"

const WrapperChat = ({ type }: { type: ChatType }) => {
  return (
    <>
      <WrapperSwipe>
        <NavFan />
        <div className="w-full">
          <div className="pag chat flex w-full justify-center">
            <Chat type={type} />
          </div>
        </div>
      </WrapperSwipe>
    </>
  )
}

export default WrapperChat
