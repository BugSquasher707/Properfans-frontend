import SideCalls from "components/chat/sides/SideCalls"
import SideChat from "components/chat/sides/SideChat"
import { ChatSideType } from "libs/enums"
import React, { useState } from "react"

const ChatSide = () => {
  const [tab, setTab] = useState(ChatSideType.Chat)

  return (
    <>
      <div className="h-full w-full">
        {
          {
            [ChatSideType.Chat]: <SideChat />,
            [ChatSideType.Calls]: <SideCalls handler={setTab} />
          }[tab]
        }
      </div>
    </>
  )
}

export default ChatSide
