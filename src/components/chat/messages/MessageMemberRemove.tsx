import MessageMembers from "components/chat/messages/MessageMembers"
import { MessageContentInterface } from "libs/interfaces"
import React from "react"

const MessageMemberRemove = ({ content }: { content: MessageContentInterface }) => {
  return (
    <>
      <MessageMembers added={false} user={content.content.remover} users={[content.content.removed]} />
    </>
  )
}

export default MessageMemberRemove
