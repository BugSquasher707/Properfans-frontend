import { URL } from "libs/constants"
import { MessageType } from "libs/enums"

export const onMessageChat = (data: any, type: MessageType) => {
  let newMessage = "sent a chat message"

  const newUrl = notificationUrl(data)

  switch (type) {
    case MessageType.AddUsers:
      newMessage = "added user(s) to group"
      break
    case MessageType.ChangeName:
      newMessage = "changed the group name"
      break
    case MessageType.Emoji:
      newMessage = "sent a chat message"
      break
    case MessageType.Gif:
      newMessage = "sent a GIF"
      break
    case MessageType.Image:
      newMessage = "sent an image"
      break
    case MessageType.Propercoins:
      newMessage = "gifted propercoins"
      break
    case MessageType.Properfan:
      newMessage = "subscribed"
      break
    case MessageType.RemoveUser:
      newMessage = "removed user(s) from group"
      break
    case MessageType.Text:
      newMessage = "sent a chat message"
      break
  }

  return { newContent: newMessage, newUrl: newUrl }
}

export const onMessageNotification = (data: any, type: MessageType) => {
  let newMessage = ""
  let newMessageContent = ""
  let newTitle = ""

  const newUrl = notificationUrl(data)

  switch (type) {
    case MessageType.Propercoins:
      newMessage = `gifted you ${
        data && data.message && data.message.totalCoins ? data.message.totalCoins : 0
      } propercoins`
      newMessageContent = `${data.userName} ${newMessage}`
      newTitle = "Donation"
      break
  }

  return {
    newContent: newMessage,
    newContentMessage: newMessageContent,
    newTitle: newTitle,
    newUrl: newUrl
  }
}

export const notificationUrl = (data: any) => {
  const chatUrl = data.communityChat ? URL.COMMUNITY.CHANNEL : URL.CHAT.CHANNEL

  return chatUrl.replace(":id", data.chatid)
}
