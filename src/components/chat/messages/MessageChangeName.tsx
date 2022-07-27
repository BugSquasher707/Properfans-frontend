import MessageSystem from "components/chat/messages/MessageSystem"
import { URL } from "libs/constants"
import { MessageContentInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"

const MessageChangeName = ({ content }: { content: MessageContentInterface }) => {
  return (
    <>
      <MessageSystem
        message={
          <>
            <Link className="text-black hover:text-purple" to={URL.USERS.BASE.replace(":param", content.content.tag)}>
              {content.content.userName}
            </Link>{" "}
            changed the group name to <span className="group-hover:text-black">{content.content.name}</span>
          </>
        }
      />
    </>
  )
}

export default MessageChangeName
