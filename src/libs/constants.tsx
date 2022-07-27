/* --- Server --- */
export const ENVIRONMENT = process.env.REACT_APP_ENV ?? ""
export const SERVER_BASE = process.env.REACT_APP_SERVER ?? ""
export const SERVER = SERVER_BASE + "/api/v1"
export const SOCKET = ""
export const SOCKET_CONTENT = ""

/* --- Slug --- */
export const SLUG = "| Properfans"

/* --- IDs --- */
export const INTERCOM_APP_ID = process.env.REACT_APP_INTERCOM ?? ""
export const INTERCOM_SECRET = process.env.REACT_APP_INTERCOM_SECRET ?? ""
export const ONE_SIGNAL = process.env.REACT_APP_ONE_SIGNAL ?? ""
export const TENOR_ID = process.env.REACT_APP_TENOR ?? ""
export const STRIPE_ID = process.env.REACT_APP_STRIPE ?? ""

/* --- Socials --- */
export const SOCIALS = {
  DISCORD: "https://discord.gg/Df9UsjVxRb",
  FACEBOOK: "https://www.facebook.com/properfans",
  INSTAGRAM: "https://www.instagram.com/properfanscom/",
  LINKEDIN: "https://www.linkedin.com/showcase/69422402/admin/",
  TWITTER: "https://twitter.com/Properfanscom",
  SITE: "https://properfans.com"
}

/* --- URLS --- */
export const URL = {
  HOME: "/",
  ACCOUNT: {
    CATEGORY: "/account/*",
    BASE: "/account",
    ACCOUNT: "/account/information",
    BILLING: "/account/billing",
    DASHBOARD: "/account",
    NOTIFICATIONS: "/account/notifications",
    PROFILE: "/account/profile",
    SECURITY: "/account/security",
    SUBSCRIPTION: "/account/subscription/:id",
    SUBSCRIPTIONS: "/account/subscriptions"
  },
  ADMIN: "https://admin.properfans.com",
  APPLICATION: {
    CATEGORY: "/application/*",
    BASE: "/application",
    SETUP: "/application/setup",
    STATUS: "/application/status"
  },
  AUTH: {
    CATEGORY: "/auth/*",
    BASE: "/auth",
    CREATOR: "/auth/creator",
    FAN: "/auth/fan"
  },
  BRANDS: {
    CATEGORY: "/c/*",
    BASE: "/c/:param"
  },
  CHAT: {
    CATEGORY: "/chat/*",
    BASE: "/chat",
    CHANNEL: "/chat/:id"
  },
  COMMUNITY: {
    CATEGORY: "/community/*",
    BASE: "/community",
    CHANNEL: "/community/:id"
  },
  CREATOR: {
    CATEGORY: "/creator/*",
    BASE: "/creator",
    CLUB: {
      ADD: "/creator/club/add",
      EDIT: "/creator/club/edit/:param",
      STATISTICS: "/creator/club/:param/statistics"
    },
    DASHBOARD: {
      BASE: "/creator/dashboard",
      CASHOUT: "/creator/dashboard/cashout",
      CLUBS: "/creator/dashboard/clubs",
      PERSONAL: "/creator/dashboard/personal"
    },
    TIER: {
      ADD: "/creator/club/:param/tier/:id/add",
      GET: "/creator/club/:param/tier/:id",
      TIERS: "/creator/club/:param/tiers"
    }
  },
  FAN: {
    CATEGORY: "/fan/*",
    BASE: "/fan",
    CART: {
      FAILURE: "/fan/order/failure",
      ORDER: "/fan/order/:id",
      ORDERS: "/fan/orders",
      SUCCESS: "/fan/order/success/:id"
    },
    CLUBS: {
      BASE: "/fan/clubs",
      FOLLOWING: "/fan/clubs/following",
      SUBSCRIPTIONS: "/fan/clubs/subscriptions"
    },
    DISCOVER: {
      BASE: "/fan/discover",
      CLUBS: "/fan/discover/clubs",
      CREATORS: "/fan/discover/creators"
    },
    FEED: "/fan/feed",
    INVITE: "/fan/invite",
    NOTIFICATIONS: "/fan/notifications",
    POST: "/fan/post/:id",
    SHOP: "/fan/shop",
    STORY: "/fan/story/:story",
    TIP: "/fan/tip/:param/post/:id"
  },
  FRIENDS: {
    CATEGORY: "/friends/*",
    BASE: "/friends",
    BLOCKED: "/friends/blocked"
  },
  GUEST: {
    CATEGORY: "/guest/*",
    BASE: "/guest",
    BRAND: "/guest/c/:param",
    MEET: {
      DISCOVER: "/guest/meet/discover",
      PROFILE: "/guest/meet/b/:param"
    },
    USER: "/guest/u/:param"
  },
  GUIDELINES: {
    CATEGORY: "/guidelines/*",
    BASE: "/guidelines",
    DOXING: "/guidelines/content",
    CONTENT: "/guidelines/doxing",
    SPONSOR: "/guidelines/sponsor"
  },
  INFORMATION: {
    CATEGORY: "/info/*",
    BASE: "/info",
    ABOUT: "/info/about"
  },
  LANDING: {
    BANNED: "/banned",
    ERROR: "/500",
    MAINTENANCE: "/maintenance",
    NOTFOUND: "/404",
    SOON: "/soon"
  },
  LIVE: {
    CATEGORY: "/live/*",
    BASE: "/live",
    CATEGORIES: "/live/category/:id",
    STREAM: "/live/stream/:id",
    STREAMERS: "/live/streamers"
  },
  MEET: {
    CATEGORY: "/meet/*",
    BASE: "/meet",
    DISCOVER: "/meet/discover",
    PROFILE: "/meet/c/:param",
    PRODUCT: {
      CALL: "/meet/store/:param/calls",
      VIDEO: "/meet/store/:param/video"
    },
    ORDER: {
      AUDIOCALL: "/meet/order/:param/call/audio",
      VIDEOCALL: "/meet/order/:param/call/video",
      VIDEOGREETING: "/meet/order/:param/greeting"
    }
  },
  NOTIFICATIONS: {
    CATEGORY: "/notifications/*",
    BASE: "/notifications"
  },
  POLICIES: {
    CATEGORY: "/policies/*",
    BASE: "/policies",
    COOKIES: "/policies/cookies",
    DISCLAIMER: "/policies/disclaimer",
    PRIVACY: "/policies/privacy",
    TERMS: "/policies/terms"
  },
  SETUP: {
    CATEGORY: "/setup/*",
    BASE: "/setup"
  },
  STREAM: {
    CATEGORY: "/stream/*",
    BASE: "/stream",
    ALERTS: "/stream/alerts"
  },
  SUBSCRIBE: {
    CATEGORY: "/subscribe/*",
    BASE: "/subscribe/:param",
    SUCCESS: "/subscribe/:param/success"
  },
  TWOFACTOR: {
    CATEGORY: "/twofactor/*",
    BASE: "/twofactor",
    ACTIVATED: "/twofactor/activated",
    MANAGE: "/twofactor/manage"
  },
  USERS: {
    CATEGORY: "/u/*",
    BASE: "/u/:param"
  },
  WIKI: {
    BASE: "/wiki",
    PROPERCOINS: "/wiki/propercoins",
    MEET: "/wiki/meet"
  }
}

/* --- Requests --- */
export const REQ = {
  STATUS: SERVER_BASE,
  ACCOUNT: {
    PERSONAL_INFORMATION: SERVER + "/userDetails/:userDetailId"
  },
  APPLICATION: {
    APPLY: SERVER + "/applications/becomeCreator",
    APPLIED: SERVER + "/applications/becomeCreator/account/:accountId",
    TOTAL_USERS: SERVER + "/userDetails/creators/count"
  },
  COMMENT: {
    CREATE: SERVER + "/comment",
    DELETE: SERVER + "/comment/:commentId",
    SHOW: SERVER + "/comment/:commentId"
  },
  CLUB: {
    ACTIVITY: SERVER + "/club/activity/:clubId",
    ACTIVITY_BY_USER: SERVER + "/club/activityByUser/:clubId/:userId",
    AVATAR: {
      UPLOAD: SERVER + "/club/avatar/:clubId"
    },
    BANNER: {
      UPLOAD: SERVER + "/club/banner/:clubId"
    },
    CREATE: SERVER + "/club",
    FOLLOW: {
      FOLLOW_CLUB: SERVER + "/club/:clubId/follow",
      IS_FOLLOWER: SERVER + "/club/follower/:clubId/:userId",
      UNFOLLOW_CLUB: SERVER + "/club/:clubId/unfollow"
    },
    HANDLE: {
      AVAILABLE: SERVER + "/club/verifyHandle/:handle",
      CLUB_SEARCH: SERVER + "/club/handle/:handle"
    },
    SHOW: {
      MY_CLUBS: SERVER + "/club/myClubs/:userId"
    },
    TIER: {
      CREATE: SERVER + "/clubTier/:clubId",
      GET: {
        BY_BRAND: SERVER + "/clubTier/:brandId",
        BY_TIER: SERVER + "/club/tier/:tier/:brandId"
      },
      UPDATE: SERVER + "/club/tier/:tier/:brandId"
    },
    UPDATE: SERVER + "/club/:clubId"
  },
  DISCOVER: {
    GET_DISCOVER: SERVER + "/contentCategories",
    GET_CREATORS: SERVER + "/userDetails/creators/categories",
    GET_CLUBS: SERVER + "/club/categories"
  },
  FAN_FEED: {
    GET_FEED: SERVER + "/post/feed/:userId"
  },
  FRIEND_REQUEST: {
    REQUEST_SEND: SERVER + "/friendRequest/send",
    SHOW_SEND_REQUEST: SERVER + "/friendRequest/sentRequests",
    SHOW_MY_REQUEST: SERVER + "/friendRequest/myRequests",
    CANCEL_REQUEST: SERVER + "/friendRequest/cancelRequest/:requestId",
    DECLINE_REQUEST: SERVER + "/friendRequest/declineRequest/:requestId",
    ACCEPT_REQUEST: SERVER + "/friendRequest/acceptRequest/:requestId",
    MY_FRIENDS: SERVER + "/friendRequest/myFriends",
    REMOVE_FRIEND: SERVER + "/friendRequest/remove/:userDetailId/:friendId",
    BLOCK_USER: SERVER + "/userDetails/blockUser/:userDetailId",
    UNBLOCK_USER: SERVER + "/userDetails/unBlockUser/:userDetailId",
    BLOCKED_USERS: SERVER + "/userDetails/listBlockUser"
  },
  POST: {
    CLUB_POSTS: SERVER + "/posts/brand/:brandId",
    CHECK_LIKE: SERVER + "/post/like/:postId/:userId",
    CREATE: SERVER + "/posts",
    DELETE: SERVER + "/posts/:postId",
    GET_SINGLE: SERVER + "/posts/:postId",
    LATEST_POST: SERVER + "/posts/brand/latest/:brandId",
    REPORT: SERVER + "/postReport"
  },
  PROP: {
    LIKE: SERVER + "/prop/addPost/:postId",
    UNLIKE: SERVER + "/prop/removePost/:postId"
  },
  PROPER_MEET_PROFILE: {
    CREATE: SERVER + "/meet/profile",
    GET_ALL: SERVER + "/meet/profile",
    GET_BY_HANDLE: SERVER + "/meet/profile/:handle"
  },
  SEARCH: {
    CLUB: SERVER + "/club/searchHandle",
    USER: SERVER + "/userDetails/searchHandle"
  },
  TIP: {
    POST: SERVER + "/properCoin/users/:userId/wallet",
    CREATE_TIP: SERVER + "/createTip",
    GET_TIP: SERVER + "/getTip/:postId"
  },
  USER: {
    AVATAR: {
      UPLOAD: SERVER + "/userDetails/me/profilePicture/:userDetailId"
    },
    BANNER: {
      UPLOAD: SERVER + "/userDetails/me/profileBanner/:userDetailId"
    },
    GET: {
      DETAILS: SERVER + "/userDetails",
      HANDLE: SERVER + "/userDetails/handle/:handle"
    },
    ROLE: SERVER + "/userDetails/:userDetailId",
    TAG: {
      AVAILABLE: SERVER + "/userDetails/verifyHandle/:handle"
    },
    UPDATE: SERVER + "/userDetails",
    USERNAME: {
      AVAILABLE: SERVER + "/userDetails/verifyUsername/:username"
    },
    VERIFY: SERVER + "/userDetails/me/:userId"
  },
  STORY: {
    GET: SERVER + "/STORY/:storyId",
    GET_All: SERVER + "/story",
    GET_MY: SERVER + "/story/my/:handleId",
    CREATE: SERVER + "/story"
  }
}

/* --- Regex --- */
export const REGEX = {
  TAG: "^[a-z0-9]+([_]?[a-z0-9]+)*$",
  NAME: "^[a-zA-Z0-9 !@#$%^&*()?]*$"
}

/* --- Errors --- */
export const ERR = {
  REFRESH: "Something went wrong, refresh to try again"
}

/* --- Dates --- */
export const DATE = {
  DATETIME: "MMM D YYYY, HH:mm",
  GRAPH: "D-M-YYYY",
  SHORT: "MMM D, YYYY",
  TIME: "HH:mm"
}

/* --- Files --- */
export const FILES = {
  ARRAY: [
    "image/jpeg",
    "image/png",
    "image/webp",
    "image/tiff",
    "audio/mpeg",
    "audio/ogg",
    "video/mp4",
    "video/x-flv",
    "video/quicktime",
    "video/x-ms-wmv"
  ],
  STRING:
    "image/jpeg, image/png, image/webp, image/tiff, audio/mpeg, audio/ogg, video/mp4, video/x-flv, video/quicktime, video/x-ms-wmv",
  TYPES: {
    jpg: "image/jpeg",
    png: "image/png",
    webp: "image/webp",
    tif: "image/tiff",
    tiff: "image/tiff",
    mp3: "audio/mpeg",
    ogg: "audio/ogg",
    mp4: "video/mp4",
    flv: "video/x-flv",
    mov: "video/quicktime",
    wmv: "video/x-ms-wmv"
  }
}

/* --- SIZE --- */
export const SIZES = {
  AVA24: "?width=24&height=24",
  AVA32: "?width=32&height=32",
  AVA60: "?width=60&height=60",
  AVA72: "?width=72&height=72"
}

/* --- Values --- */
export const spring = {
  mass: 1,
  tension: 600,
  friction: 4,
  clamp: true,
  precision: 0.01,
  velocity: 0
}
