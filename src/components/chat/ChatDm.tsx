import { onPlural } from "api/integration/functions"
import ChatAvatarDm from "components/chat/avatar/ChatAvatarDm"
import ChatAvatarGroup from "components/chat/avatar/ChatAvatarGroup"
import WrapperVerified from "components/wrappers/WrapperVerified"
import { useChat } from "contexts/ChatContext"
import { URL } from "libs/constants"
import { ChatDmInterface } from "libs/interfaces"
import React from "react"
import Verified from "utils/icons/Verified"

const ChatDm = ({ dm, active }: { dm: ChatDmInterface; active: boolean }) => {
  const { setCommunityId, setDmId } = useChat()

  const parseMessage = (message: any) => {
    switch (message.type) {
      case "acceptFriendRequest":
        return "Friend request accepted"
      case "cancelFriendRequest":
        return "Friend request cancelled"
      case "declineFriendRequest":
        return "Friend request declined"
      case "donation":
        return "Donation"
      case "friendRequest":
        return "Friend request"
      case "gif":
        return "GIF"
      case "text":
        return message.message
      default:
        return ""
    }
  }

  const onLastMessage = () => {
    return dm.messages.length === 0 ? "Start of chat history" : parseMessage(dm.messages[0])
  }

  const onSelectChat = (id: string) => {
    if (dm.brand) {
      window.history.replaceState(null, "Properfans", URL.COMMUNITY.CHANNEL.replace(":id", id))
      setCommunityId(id)
    } else {
      window.history.replaceState(null, "Properfans", URL.CHAT.CHANNEL.replace(":id", id))
      setDmId(id)
    }
  }

  return (
    <>
      <button
        className={`group flex w-full items-center justify-start space-x-[14px] rounded-4 px-12 py-8 hover:bg-purple-10 ${
          active ? "bg-purple-10" : ""
        }`}
        name={dm.name}
        onClick={() => {
          onSelectChat(dm.id)
        }}
      >
        <div className="flex h-42 w-42 items-center justify-center">
          {dm.avatars && dm.avatars.length > 1 ? (
            <ChatAvatarGroup active={active} avatars={dm.avatars} verified={dm.active} />
          ) : (
            <div
              className={`flex h-42 w-42 items-center justify-center overflow-hidden rounded-full ${
                dm.active ? "bg-gradient-to-r from-purple to-green" : ""
              }`}
            >
              <ChatAvatarDm avatar={dm.avatars[0]} verified={dm.active} />
            </div>
          )}
        </div>
        <div className="grid w-full grid-cols-1">
          <div className="mb-2 flex w-full items-center space-x-[4px]">
            <div className="flex w-full justify-start">
              <div
                className={`relative max-w-full select-none truncate overflow-ellipsis text-left text-14 font-bold group-hover:text-purple ${
                  active ? "text-purple" : "text-black"
                } ${dm.brand ? "pr-20" : ""}`}
              >
                {dm.name}
                <WrapperVerified> {dm.brand ? <Verified size={16} /> : ""}</WrapperVerified>
              </div>
            </div>
          </div>
          <div className="mb-4 w-full overflow-hidden truncate overflow-ellipsis text-left text-12 text-grey-40">
            {dm.group || dm.brand ? `${dm.members} member${onPlural(dm.members)}` : onLastMessage()}
          </div>
          <div className="w-full text-left text-11 text-grey-20">{dm.date} ago</div>
        </div>
      </button>
    </>
  )
}

export default ChatDm
