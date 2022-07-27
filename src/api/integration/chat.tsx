import { parseDate, parseTimeAgo } from "api/integration/functions"
import { MessageType } from "libs/enums"
import { MessageInterface } from "libs/interfaces"

export const messageAddEmoji = (message: string, emoji: string) => {
  if (message.length <= 240) {
    let newMessage = message + emoji
    newMessage = newMessage.replace(/\n/g, "")

    return newMessage
  } else {
    return message
  }
}

export const messageChangeMessage = (message: string, newMessage: string) => {
  if (newMessage.length <= 240) {
    return newMessage.replace(/\n/g, "")
  } else {
    return message
  }
}

export const onSortChat = (arr: any[]) => {
  return arr ? arr.sort((a, b) => (a.created > b.created ? 1 : -1)) : []
}

export const bundleChat = (chat: MessageInterface[]) => {
  const bundles = []
  const bundlesIndex = []

  const formatChat = chat.map((message: any) => ({
    ...message,
    log: chatLog(message.type)
  }))
  const data = onSortChat(formatChat)

  if (data && data.length > 0) {
    for (let con = 0; con < data.length; con++) {
      if (con === 0 || data[con].log || data[con - 1].log || (con > 0 && data[con - 1].userid !== data[con].userid)) {
        bundlesIndex.push(con)
      }
    }

    for (let bun = 0; bun < bundlesIndex.length; bun++) {
      const start = bundlesIndex[bun]
      const end = bun === bundlesIndex.length - 1 ? data.length - 1 : bundlesIndex[bun + 1] - 1
      let day = false

      const content = chatContent(start, end, data)

      if (
        bundles.length === 0 ||
        (bundles.length > 0 &&
          parseDate(bundles[bundles.length - 1].created / 1000) !== parseDate(data[start].created / 1000))
      ) {
        day = true
      }

      bundles.push({
        avatar: data[start].avatar,
        handle: data[start].handle,
        userName: data[start].userName,
        id: data[start].id,
        userid: data[start].userid,
        creator: data[start].creator,
        messages: content,
        created: data[start].created,
        log: data[start].log,
        day: day
      })
    }
  }

  return bundles
}

const chatContent = (start: number, end: number, data: any[]) => {
  const content = []

  for (let mes = start; mes <= end; mes++) {
    content.push({
      id: data[mes].id,
      content: data[mes].message,
      created: data[mes].created,
      type: chatType(data[mes].message, data[mes].type)
    })
  }

  return content
}

const chatLog = (type: string) => {
  const types = [
    "acceptFriendRequest",
    "addUsers",
    "cancelFriendRequest",
    "declineFriendRequest",
    "leftGroup",
    "removeUser",
    "changeName"
  ]
  return types.includes(type)
}

export const chatType = (message: string, type: any) => {
  if ((type === "text" || type === MessageType.Text) && isEmoji(message)) {
    type = "emoji"
  }

  switch (type) {
    case "addUsers":
      return MessageType.AddUsers
    case "changeName":
      return MessageType.ChangeName
    case "donation":
      return MessageType.Propercoins
    case "emoji":
      return MessageType.Emoji
    case "gif":
      return MessageType.Gif
    case "leftGroup":
      return MessageType.LeftGroup
    case "removeUser":
      return MessageType.RemoveUser
    case "text":
      return MessageType.Text
    case "subscription":
      return MessageType.Properfan
    default:
      return MessageType.Text
  }
}

export const isEmoji = (message: string) => {
  const emojiRegex = require("emoji-regex")
  const replaced = message.replace(new RegExp(emojiRegex, "g"), "")

  return !replaced.length
}

export const chatSideDms = async (res: any) => {
  return res.map((entry: any) => ({
    ...entry,
    id: entry.chat.id,
    avatars: entry.avatars.filter((avatar: string) => avatar),
    name: entry.chat.name,
    active: false,
    messages: entry.chat.messages,
    date: parseTimeAgo(entry.chat.updated),
    members: entry.chat.users.length,
    group: entry.chat.group,
    unread: 0
  }))
}

export const chatSideCommunities = async (res: any) => {
  return res.map((entry: any) => ({
    ...entry,
    id: entry.chat.id,
    avatars: [entry.avatar],
    name: `${onCommunityTier(entry.chat.access)} - ${entry.chat.name}`,
    active: true,
    messages: [],
    date: parseTimeAgo(entry.chat.updated),
    members: entry.chat.users.length,
    brand: entry.chat.brand,
    unread: 0
  }))
}

const onCommunityTier = (newTier: number) => {
  if (newTier === 0) {
    return "Public"
  } else {
    return `Tier ${newTier}`
  }
}

export const chatSideFriends = async (res: any) => {
  return res
    .filter((entry: any) => entry)
    .map((entry: any) => ({
      ...entry,
      id: entry.chat.id,
      avatars: entry.chat.brand ? [entry.avatars] : entry.avatars.filter((avatar: string) => avatar),
      name: entry.chat.name,
      active: false,
      messages: entry.chat.messages,
      date: parseTimeAgo(entry.chat.updated),
      members: entry.chat.users.length,
      brand: entry.chat.brand,
      group: entry.chat.group,
      unread: 0
    }))
}
