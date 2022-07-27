import MessageSystem from "components/chat/messages/MessageSystem"
import { URL } from "libs/constants"
import { MessageContentInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"

const MessageMemberLeft = ({ content }: { content: MessageContentInterface }) => {
  return (
    <>
      <MessageSystem
        message={
          <>
            <Link
              className="text-grey-40 hover:text-black"
              to={URL.USERS.BASE.replace(":param", content.content.left.tag)}
            >
              {content.content.left.userName}
            </Link>{" "}
            left the group
          </>
        }
      />
    </>
  )
}

export default MessageMemberLeft
