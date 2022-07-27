import { EgxUserInterface } from "ellingsenx/libs/interfaces"
import {
  ActivitySideType,
  ActivityType,
  AddFriendType,
  ApplicationUsageType,
  BrandFeatureType,
  BrandSocialType,
  CashoutSlideType,
  ChatGiftType,
  ContentType,
  CreatorPagesType,
  FanDiscoverCategoryType,
  FanFreeType,
  FanManageSubscriptionType,
  FanSubscriptionType,
  FanTabsType,
  FriendCallType,
  FriendTabType,
  FriendType,
  GenderType,
  MeetCreatorType,
  MeetDeliveryType,
  MeetLocationType,
  MeetProductType,
  MeetPurposesType,
  MessageType,
  OsType,
  PaymentType,
  PeriodType,
  ProductType,
  ProperPayMethodType,
  ProperPayStatusType,
  ProperPayType,
  SetupSlideSuccessType,
  SetupSlideType,
  StatusType,
  SubscriptionFeatureType,
  SubscriptionPaymentType,
  SubscriptionSlideType,
  SubscriptionStateType,
  SubscriptionTierType,
  ThemeType,
  TippingType,
  TooltipType,
  UserType
} from "libs/enums"
import React from "react"

export interface ActivityInterface {
  brand: ProfileInterface
  user: ProfileInterface
  postid: string
  type: ActivityType
  comment: string
  created: number
}

export interface ActivitySideInterface {
  profile: ProfileInterface
  type: ActivitySideType
  id: string
}

export interface AddressInterface {
  city: string
  country: string
  phone: string
  postalCode: string
  region: string
  street1: string
  street2: string
}

export interface AddFriendInterface {
  type: AddFriendType
  title: string
}

export interface AddGroupUserInterface {
  icon: string
  name: string
  active: boolean
  handle: string
  selected: boolean
}

export interface ArticleInterface {
  title: string
  content: string
  date: string
  link: string
}

export interface BooleanInterface {
  title?: string
  text?: string
  link?: string
  icon?: any
  active: boolean
}

export interface BrandAuthorizeInterface {
  type: BrandSocialType
  link: string
}

export interface BrandFeatureInterface {
  type: BrandFeatureType
  unlocked: boolean
  link: string
}

export interface BrandSocialInterface {
  type: BrandSocialType
  link: string
  name: string
  handler?: any
}

export interface BrandStatsInterface {
  donated: number
  followers: number
  following: number
  received: number
  subscribers: number
  subscriptions: number
  type: string
}

export interface ButtonInterface {
  title: string
  icon: any
}

export interface ButtonRectInterface {
  title: string
  icon: any
}

export interface CashoutMethodInterface {
  created: number
  id: string
  paypal: CashoutMethodPaypalInterface
}

export interface CashoutMethodPaypalInterface {
  emailAddress: string
  primary: boolean
}

export interface CallPersonInterface {
  icon: string
  name: string
  verified: boolean
}

export interface CapacitorInterface {
  notification: CapacitorDataInterface
}

export interface CapacitorDataInterface {
  data: CapacitorNotificationInterface
}

export interface CapacitorNotificationInterface {
  id: string
  title: string | undefined
  body: any
  type: string
}

export interface CashoutSlideInterface {
  title: string
  text: string
  type: CashoutSlideType
}

export interface ChartInterface {
  name: string
  value: number
}

export interface ChatDmInterface {
  id: string
  avatars: string[]
  name: string
  handle: string
  active: boolean
  messages: MessageInterface[]
  date: string
  group: boolean
  brand: boolean
  members: number
  unread: number
  fresh?: boolean
}

export interface ChatGiftInterface {
  title: string
  enabled: boolean
  type: ChatGiftType
}

export interface ChatGroupInterface {
  avatars: BooleanInterface[]
  members: number
  name: string
  verified: boolean
  online: number
}

export interface ChatMemberInterface {
  userName: string
  handle: string
}

export interface ChatTypeInterface {
  title: string
  type: UserType
}

export interface CheckInterface {
  title: string
  active: boolean
}

export interface CheckStatusInterface {
  title: string
  text: string
  status: StatusType
}

export interface CountryInterface {
  value: string
  label: string
}

export interface CountriesInterface {
  country: string
  title: string
  amount: number
  selected: boolean
}

export interface CreatorFanInterface {
  creator: ProfileInterface
  id: string
  banner: string
  avatar: string
  followers: number
  userName: string
  subscribers: number
  follower: boolean
  subscriber: boolean
  tier: SubscriptionTierType
  owner: ProfileInterface
}

export interface CreatorPagesInterface {
  title: string
  link: string
  type: CreatorPagesType
}

export interface CreatorStatisticsEarning {
  avatar: string
  name: string
  fans: number
  earned: number
  orders: number
  type: "fans" | "orders"
}

export interface CreatorStatisticsOrderInterface {
  name: string
  difference: number
  orders: number
  icon: JSX.Element
}

export interface CreatorStatisticsTierInterface extends TierInterface {
  difference: number
  subscribers: number
}

export interface DevicesInterface {
  browser: string
  country: string
  expires: number
  id: string
  ip: string
  lastActive: number
  os: string
  type: OsType
}

export interface DropdownInterface {
  link: any
  title: string
  icon: any
  param?: any
}

export interface DropdownFaqInterface {
  title: string
  content: string
}

export interface DropdownGroupInterface {
  title: string
  data: DropdownInterface[]
}

export interface DropdownTypeInterface {
  title: string
  type: any
}

export interface EarningsInterface {
  icon: string
  name: string
  text: string
  number: number
  options: TitleInterface[]
}

export interface EmojiInterface {
  emoji: string
  key: string
}

export interface FanDiscoverCategoryInterface {
  category: string
  media: string
  background: string
  icon: React.ReactNode
  title: string
  type: FanDiscoverCategoryType
}

export interface FanDiscoverTagInterface {
  handle: string
  posts: number
}

export interface FanFreeTabInterface {
  icon: any
  title: string
  type: FanFreeType
}

export interface FanManageSubscriptionInterface {
  title: string
  type: FanManageSubscriptionType
}

export interface FanProfileTabInterface {
  icon: any
  title: string
  type: FanTabsType
}

export interface FanSubscriptionsTabInterface {
  count: number
  title: string
  type: FanSubscriptionType
}

export interface FeedInterface {
  id: string
  brand: ProfileInterface
  date: string
  tier: SubscriptionTierType
  urls: string[]
  type: string
  message: any
  count: {
    comments: number
    likes: number
  }
  comments: FeedCommentInterface[]
  likes: FeedLikeInterface[]
  liked: boolean
  locked: boolean
  redacted: boolean
  subscription: SubscriptionTierType | undefined
  user: string
  tips: number
}

export interface FeedCommentInterface {
  id: string
  postId: string
  avatar: string
  userName: string
  handle: string
  comment: string
  verified: boolean
  userId: string
  created: number
}

export interface FeedLikeInterface {
  avatar: string
  userName: string
}

export interface FollowInterface {
  avatar: string
  userName: string
  verified: boolean
  handle: string
  creator: boolean
  following: boolean
}

export interface FriendInterface {
  id: string
  avatar: string
  blocked: boolean
  brand: boolean
  friends: boolean
  handle: string
  isActive: boolean
  selected?: boolean
  type: FriendType
  userName: string
}

export interface FriendCallInterface {
  type: FriendCallType
  url: string
}

export interface FriendRequestProfileInterface {
  id: string
  userName: string
  avatar: string
  handle: string
  verified: boolean
}

export interface FriendTabInterface {
  type: FriendTabType
  title: string
}

export interface GifInterface {
  url: string
  preview: string
}

export interface GraphInterface {
  name: string
  total: number
}

export interface GuidelinesInterface {
  icon: any
  link: string
  title: string
  text?: string
}

export interface InfluencerInterface {
  icon: string
  link: string
  name: string
  subscribers: string
}

export interface InvoiceInterface {
  invoice_pdf: string
}

export interface LandingCoreInterface {
  title: string
  text: string
  icon: any
}

export interface LandingInfluencerInterface {
  title: string
  text: string
  link: string
  icon: string
  platform: any
}

export interface LinkInterface {
  link: any
  title: string
  action?: any
  text?: string
  icon?: JSX.Element
}

export interface LinkIconInterface {
  link: string
  icon: any
  title?: string
  text?: string
}

export interface LinkTextInterface {
  link: string
  title: string
  text: string
}

export interface LinkGroupInterface {
  title: string
  data: LinkInterface[]
}

export interface LiveCategoryInterface {
  handle: string
  avatar: string
  banner: string
  name: string
  description: string
  followers: number
  viewers: number
}

export interface MeetCreatorInterface {
  userName: string
  avatar: string
  handle: string
  verified: boolean
  professional: boolean
  type: MeetCreatorType
  priceFrom: number
  priceTo: number
  audioCalls: boolean
  videoCalls: boolean
  videoGreetings: boolean
  country: string
}

export interface MeetCreatorCategoryInterface {
  title: string
  type: MeetCreatorType
}

export interface MeetDeliveryInterface {
  type: MeetDeliveryType
  price: number
}

export interface MeetLocationInterface {
  title: string
  icon: JSX.Element
  recommended: boolean
  type: MeetLocationType
}

export interface MeetMediaInterface {
  link: string
  name: string
  avatar: string
  status: string
}

export interface MeetProductInterface {
  title: string
  text: string
  price: number
  type: MeetProductType
  link: string
}

export interface MeetPronounInterface {
  type: GenderType
  pronoun: string
}

export interface MeetPurposesInterface {
  type: MeetPurposesType
  price: number
  selected: boolean
}

export interface MeetReviewInterface {
  stars: number
  review: string
  avatar: string
  name: string
  type: MeetProductType
}

export interface MeetSpotInterface {
  date: number
  timeFrom: number
  timeTo: number
}

export interface MentionData {
  name: string
  link?: string
  avatar?: string
}

export interface MessageInterface {
  avatar: any
  userName: string
  id: string
  userid: string
  creator: boolean
  message: any
  created: number
  type: MessageType
  handle: string
  log: boolean
  system: boolean
}

export interface MessageRoomInterface {
  id: string
  access: number
  avatar: string
  avatars: string[]
  brand: boolean
  group: boolean
  messages: MessageInterface[]
  name: string
  users: string[]
  handle?: string
  verified: boolean
  created: number
  master: string
  subscription: boolean
}

export interface MessageBundleInterface {
  avatar: any
  userName: string
  id: string
  userid: string
  creator: boolean
  messages: MessageContentInterface[]
  created: number
  day: boolean
  handle: string
  log: boolean
}

export interface MessageContentInterface {
  id: string
  content: any
  created: number
  type: MessageType
  child_info?: ProfileInterface
  parent_info?: ProfileInterface
}

export interface MessageFriendRequestInterface {
  icon: string
  name: string
  handle: string
  id: number
}

export interface MessageSubscriptionInterface {
  icon: string
  name: string
  tier: number
  fan: number
}

export interface ModalCallInterface {
  active: boolean
  group: boolean
  people: CallPersonInterface[]
}

export interface ModalVideoInterface {
  icon: any
  title: string
  text: string
  video: VideoInterface
}

export interface NavLinkInterface {
  link: string
  title: string
  icon: any
}

export interface NotificationInterface {
  dms: boolean
  donations: boolean
  mentions: boolean
  posts: boolean
}

export interface NotificationToastInterface {
  title: string
  message: string
  url: string
}

export interface NumberInterface {
  title?: string
  text?: string
  icon?: JSX.Element
  number: number
}

export interface NumberIconInterface {
  number: number
  icon: any
}

export interface OfferInterface {
  link: string
  picture: string
  name_short: string
  description: string
  payout: number
  device: string
}

export interface OfferHistoryInterface {
  link: string
  picture: string
  name_short: string
  type: string
  payout: number
  date: string
}

export interface OptionInterface {
  link: string
  title: string
  text: string
  icon: any
  type: ApplicationUsageType
}

export interface OptionIconInterface {
  text: string
  icon: any
  title?: string
}

export interface OptionTypeInterface {
  title: string
  type: any
}

export interface OrderInterface {
  products: PropercoinsCartInterface[]
  state: string
}

export interface PageInterface {
  title: string
  link: string
  icon: any
  dropdown?: LinkInterface[]
}

export interface ParameterInterface {
  param: string
}

export interface PaymentTableInterface {
  product: string
  method: JSX.Element
  date: string
  amount: number
}

export interface ProfileInterface {
  id: string
  avatar: string
  banner: string
  biography: string
  userName: string
  verified: boolean
  handle: string
  favCategoryList?: string[]
}

export interface ProfileBrandInterface extends ProfileInterface {
  name: string
  stats: BrandStatsInterface
  fans: number
  subscribers: number
  follower: boolean
  subscriber: boolean
  socials: BrandSocialInterface[]
  friends: ProfileFriendsInterface
}

export interface ProfileFanInterface {
  fan: ProfileInterface
  id: string
}

export interface ProfileFriendsInterface {
  avatars: string[]
  name: string
  count: number
}

export interface ProfileDropdownInterface {
  admin: boolean
  balance: number
  brands: ProfileBrandInterface[]
  creator: boolean
  email: string
  name: string
}

export interface ProfileSubscribeInterface extends ProfileInterface {
  stats: ProfileSubscribeStatsInterface
}

export interface ProfileSubscribeStatsInterface {
  followers: number
  subscribers: number
}

export interface PropercoinsInterface {
  id: string
  amount: number
  price: number
  sale: boolean
  sale_price: number
  icon: string
}

export interface PropercoinsCartInterface {
  id: string
  type: ProductType
  icon: string
  product: string
  price: number
  sale: boolean
  sale_price: number
  count: number
  locked: boolean
}

export interface ProperPayInterface {
  title: string
  type: ProperPayType
}

export interface ProperPayMethodInterface {
  title: string
  text: string
  icon: any
  icons: any[]
  type: ProperPayMethodType
}

export interface ProperPayTaskInterface {
  title: string
  text: string
  icon: any
  link: string
  status: ProperPayStatusType
}

export interface PropsInterface {
  authenticated: boolean
  brand: string
  cart: PropercoinsCartInterface[]
  functions: any
  path: string
  theme: number
  themeSystem: boolean
  token: string
  user: UserInterface
}

export interface RelationInterface {
  friends: boolean
  blocked: boolean
}

export interface SetupSlideInterface {
  title: string
  text: string
  type: SetupSlideType
}

export interface SetupSlideSuccessInterface {
  title: string
  text: string
  image: string
  type: SetupSlideSuccessType
}

export interface SetupContentInterface {
  title: string
  icon: any
  type: ContentType
}

export interface SetupCreatorInterface {
  avatar: string
  name: string
  verified: boolean
  id: string
}

export interface SignupInterface {
  link: string
  icon: any
}

export interface SizeInterface {
  width: number | undefined
  height: number | undefined
}

export interface SocialInterface {
  instagram: SocialMediaInterface
  spotify: SocialMediaInterface
  tiktok: SocialMediaInterface
  twitch: SocialMediaInterface
  twitter: SocialMediaInterface
  youtube: SocialMediaInterface
}

export interface SocialMediaInterface {
  url: string
  name: string
}

export interface StatisticInterface {
  title: string
  text: string
  statistic: string
}

export interface StoryInterface {
  avatar: string
  userName: string
  verified: boolean
  handle: string
  new: boolean
  stories: StoryBrandInterface[]
  id: string
  userid: string
}

export interface StoryBrandInterface {
  id: string
  createdAt: number
  url: string
  type: string
}

export interface SubscribeInterface {
  user: ProfileInterface
  created: number
}

export interface SubscriptionInterface {
  profile: ProfileInterface
  followers?: number
  subscribers?: number
}

export interface SubscriptionDetailsInterface {
  id: string
  profile: ProfileInterface
  tier: SubscriptionTierType
  tierName: string
  price: number
  renew: boolean
  trial: boolean
  date: number
}

export interface SubscriptionInfoInterface {
  created: number
  id: string
  name: string
  price: number
  state: SubscriptionStateType
  tier: SubscriptionTierType
  mail: string
  current_period_end: number
  current_period_start: number
}

export interface SubscriptionManageInterface {
  id: string
  avatar: string
  banner: string
  biography: string
  userName: string
  verified: boolean
  handle: string
  invoices: SubscriptionInvoiceInterface[]
  subscription: SubscriptionInfoInterface
}

export interface SubscriptionFeatureInterface {
  title: string
  icon: any
  type: SubscriptionFeatureType
}

export interface SubscriptionInvoiceInterface {
  created: number
  invoice_pdf: string
  number: string
}

export interface SubscriptionPeriodInterface {
  title: string
  text: string
  type: PeriodType
}

export interface SubscriptionPaymentInterface {
  methods: PaymentType[]
  free: boolean
  fee: number
  type: SubscriptionPaymentType
}

export interface SubscriptionSlideInterface {
  title: string
  text: any
  type: SubscriptionSlideType
}

export interface SubscriptionTierInterface {
  id: string
  price: number
  free: boolean
  features: SubscriptionFeatureType[]
  type: SubscriptionTierType
}

export interface TabInterface {
  type: any
  title: JSX.Element
  icon?: JSX.Element
  count?: number
  action: any
  disabled?: boolean
}

export interface TeamInterface {
  icon: string
  name: string
  title: string
  linkedin: string
  twitter: string
}

export interface ThemeInterface {
  type: ThemeType
  title: string
  icon: any
}

export interface TierInterface {
  id: string
  priceId: string
  tierName: string
  tierLevel: SubscriptionTierType
  image: string
  price: number
  perks: TierPerkInterface[]
  popular: boolean
}

export interface TierPerkInterface {
  name: string
  included: string[]
  selected: boolean
}

export interface TippingInterface {
  icon: any
  title: string
  type: TippingType
}

export interface TippingUserInterface {
  id: string
  user: ProfileInterface
  coins: number
  amount: number
  type: TippingType
  tier: SubscriptionTierType
  message: string
  rank: number
  creator: string
}

export interface TippingTotalInterface {
  user: ProfileInterface
  coins: number
  money: number
}

export interface TitleInterface {
  title: string
  text?: string
  type?: any
  emoji?: string
}

export interface TitleIconInterface {
  title: string
  icon: any
  text?: any
  type?: any
}

export interface TitleTextInterface {
  title: string
  text: string
}

export interface TooltipInterface {
  type: TooltipType
  userName: string
  message: any
  avatar: any
  id: string
  created: string
  link: string
  typeMessage: MessageType
  url: string
}

export interface TransactionBillingInterface {
  type: string
  amount: number
  created: number
  sessionid: string
  invoices: InvoiceInterface[]
}

export interface TwoFactorOptionInterface {
  title: string
  text: string
  icon: JSX.Element
  links: LinkInterface[]
}

export interface UserInterface extends EgxUserInterface {
  id: string
  admin: boolean
  avatar: string
  banner: string
  biography: string
  creator: boolean
  handle: string
  verified: boolean
  userId: string
}

export interface UserTypeInterface {
  type: UserType
}

export interface VideoInterface {
  title: string
  length: string
  id: string
}

export interface WalletInterface {
  wallet: number
  created: number
  id: string
  updated: number
}

export interface DropdownFaqsInterface {
  title: string
  content: string
}
