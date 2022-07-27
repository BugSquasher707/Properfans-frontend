import MessageSystem from "components/chat/messages/MessageSystem"
import { URL } from "libs/constants"
import { ChatMemberInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"
import Wrapper from "utils/elements/Wrapper"

const MessageMembers = ({
  user,
  users,
  added
}: {
  user: ChatMemberInterface
  users: ChatMemberInterface[]
  added: boolean
}) => {
  return (
    <>
      <MessageSystem
        message={
          <>
            <Link className="text-grey-40 hover:text-black" to={URL.USERS.BASE.replace(":param", user.handle)}>
              {user.userName}
            </Link>{" "}
            {added ? "added" : "removed"}{" "}
            {users.map((member: any, key: number) => (
              <span key={key}>
                <Wrapper open={key > 0}>
                  <span className="text-12 text-grey-40">{key === users.length - 1 ? " and " : ", "}</span>
                </Wrapper>
                <Link
                  key={key}
                  className="text-black hover:text-purple"
                  to={URL.USERS.BASE.replace(":param", member.tag)}
                >
                  {member.userName}
                </Link>
              </span>
            ))}{" "}
            the group
          </>
        }
      />
    </>
  )
}

export default MessageMembers
