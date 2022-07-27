import { parseTimeAgo } from "api/integration/functions"
import { TippingType } from "libs/enums"

export const mapPost = (entry: any) => {

  return {
    ...entry,
    brand: entry.brand,
    date: parseTimeAgo(entry.createdAt),
    tier: entry.tier,
    count: {
      comments: entry.count.comments,
      likes: entry.count.likes
    },
    comments: entry.comments.length > 0 ? entry.comments : [],
    message: JSON.parse(entry.message),
    likes: entry.likes.length > 0 ? entry.likes : [],
    locked: false,
    urls: entry.urls,
    subscription: 0,
    type: entry.type,
    liked: entry.liked
  }
}

export const mapPosts = (posts: any[]) => {
  if (!posts || posts.constructor !== Array) {
    return []
  }

  return posts.map((entry: any) => ({
    ...entry,
    brand: entry.brand,
    date: parseTimeAgo(entry.createdAt),
    tier: entry.tier,
    count: {
      comments: entry.count.comments,
      likes: entry.count.likes
    },
    comments: entry.comments.length > 0 ? entry.comments : [],
    message: JSON.parse(entry.message),
    likes: entry.likes.length > 0 ? entry.likes : [],
    locked: false,
    urls: entry.urls,
    subscription: 0,
    type: entry.type
  }))
}

// export const postMimeType = (attachment: any) => {
//   if (attachment.length > 0 && attachment[0].mimetype) {
//     return attachment[0].mimetype.split("/")[0]
//   } else if (attachment.mimetype) {
//     return attachment.mimetype.split("/")[0]
//   } else {
//     return "file"
//   }
// }

export const mapPostTip = (donation: any) => {
  return {
    ...donation,
    amount: donation.coins / 100,
    type: TippingType.Propercoins,
    tier: donation.user.tier
  }
}

export const mapPostTips = (donations: any) => {
  return donations.map((entry: any) => ({
    ...entry,
    amount: entry.coins / 100,
    type: TippingType.Propercoins,
    tier: entry.tier
  }))
}
