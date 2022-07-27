import MessageContent from "components/chat/messages/MessageContent"
import { URL } from "libs/constants"
import { MessageBundleInterface, MessageContentInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import Wrapper from "utils/elements/Wrapper"

const Message = ({ message, incoming }: { message: MessageBundleInterface; incoming: boolean }) => {
  const onIncoming = () => {
    return message.log ? "grid-cols-1" : incoming ? "grid-cols-[auto,1fr]" : "grid-cols-[1fr,auto]"
  }

  return (
    <>
      <div className={`grid w-full items-end justify-start gap-10 ${onIncoming()}`}>
        <Wrapper open={!message.log}>
          <Link
            className={`flex h-36 w-36 items-center justify-center overflow-hidden rounded-full ${
              message.creator ? "bg-gradient-to-r from-purple to-green" : ""
            } ${incoming ? "" : "col-start-2"}`}
            to={URL.USERS.BASE.replace(":param", message.handle)}
          >
            {message.avatar ? (
              <img alt="" className="h-36 w-36 rounded-full" src={message.avatar} />
            ) : (
              <Avatar size={36} />
            )}
          </Link>
        </Wrapper>
        <div className={`grid w-full grid-cols-1 gap-4 ${incoming ? "" : "col-start-1 row-start-1"}`}>
          {message.messages.map((content: MessageContentInterface, key: number) => (
            <MessageContent
              key={key}
              content={content}
              incoming={incoming}
              time={key !== message.messages.length - 1}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Message
