import MessageMembers from "components/chat/messages/MessageMembers"
import { MessageContentInterface } from "libs/interfaces"
import React from "react"

const MessageMemberAdd = ({ content }: { content: MessageContentInterface }) => {
  return (
    <>
      <MessageMembers user={content.content.adder} users={content.content.added} added />
    </>
  )
}

export default MessageMemberAdd
