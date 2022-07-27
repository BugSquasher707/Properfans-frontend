import MessageChangeName from "components/chat/messages/MessageChangeName"
import MessageEmoji from "components/chat/messages/MessageEmoji"
import MessageGif from "components/chat/messages/MessageGif"
import MessageImage from "components/chat/messages/MessageImage"
import MessageMemberAdd from "components/chat/messages/MessageMemberAdd"
import MessageMemberLeft from "components/chat/messages/MessageMemberLeft"
import MessageMemberRemove from "components/chat/messages/MessageMemberRemove"
import MessagePropercoins from "components/chat/messages/MessagePropercoins"
import MessageProperfan from "components/chat/messages/MessageProperfan"
import MessageText from "components/chat/messages/MessageText"
import { DATE } from "libs/constants"
import { MessageType } from "libs/enums"
import { MessageContentInterface } from "libs/interfaces"
import moment from "moment"
import React from "react"
import Wrapper from "utils/elements/Wrapper"

const MessageContent = ({
  content,
  incoming,
  time
}: {
  content: MessageContentInterface
  incoming: boolean
  time?: boolean
}) => {
  return (
    <>
      <div className="group relative w-full">
        <div className={`flex w-full ${incoming ? "justify-start" : "justify-end"}`}>
          {
            {
              [MessageType.AddUsers]: <MessageMemberAdd content={content} />,
              [MessageType.ChangeName]: <MessageChangeName content={content} />,
              [MessageType.Emoji]: <MessageEmoji content={content} incoming={incoming} />,
              [MessageType.Gif]: <MessageGif content={content} incoming={incoming} />,
              [MessageType.Image]: <MessageImage content={content} incoming={incoming} />,
              [MessageType.LeftGroup]: <MessageMemberLeft content={content} />,
              [MessageType.Propercoins]: <MessagePropercoins content={content} incoming={incoming} />,
              [MessageType.Properfan]: <MessageProperfan content={content} incoming={incoming} />,
              [MessageType.RemoveUser]: <MessageMemberRemove content={content} />,
              [MessageType.Text]: <MessageText content={content} incoming={incoming} />
            }[content.type]
          }
        </div>
        <Wrapper open={time}>
          <div
            className={`absolute bottom-0 hidden transform text-10 font-bold text-grey-20 group-hover:flex ${
              incoming ? "left-[-4px] translate-x-[-100%]" : "right-[-4px] translate-x-[100%]"
            }`}
          >
            {moment(content.created).format(DATE.TIME)}
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default MessageContent
