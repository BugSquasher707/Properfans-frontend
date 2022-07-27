import { ThemeType } from "libs/enums"
import { EmojiInterface, GifInterface, PropercoinsCartInterface } from "libs/interfaces"

const parseJson = (value: string) => {
  try {
    return value ? JSON.parse(value) : []
  } catch (err) {
    return []
  }
}

export const getterCookieConsent = (value: string) => {
  return value ? parseInt(value) : 0
}

export const setterCookieConsent = (handler: any, consent: number) => {
  handler("consent", consent, { path: "/" })
}

export const getterCart = (value: string) => {
  return parseJson(value)
}

export const setterCart = (handler: any, cart: PropercoinsCartInterface[]) => {
  handler("cart", JSON.stringify(cart), { path: "/" })
}

export const getterCoupon = (value: string) => {
  return value || ""
}

export const setterCoupon = (handler: any, coupon: string) => {
  handler("coupon", coupon, { path: "/" })
}

export const getterTheme = (value: string) => {
  return parseInt(value || `${ThemeType.Light}`)
}

export const setterTheme = (handler: any, theme: number) => {
  handler("theme", theme, { path: "/" })
}

export const getterToken = (value: string) => {
  return value || ""
}

export const setterToken = (handler: any, token: string) => {
  handler("token", token, { path: "/" })
}

export const getterThemeSystem = (value: string) => {
  return (value || "0") === "1"
}

export const setterThemeSystem = (handler: any, active: boolean) => {
  handler("theme_system", active ? "1" : "0", { path: "/" })
}

export const defaultTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? ThemeType.Dark : ThemeType.Light
}

export const getterRecentEmojis = (value: string) => {
  return parseJson(value)
}

export const setterRecentEmojis = (handler: any, value: string, emoji: EmojiInterface) => {
  const emojis = parseJson(value)

  emojis.unshift(emoji).filter((_: any, key: number) => key < 18)

  handler("emojis", JSON.stringify(emojis), { path: "/" })
}

export const getterRecentGifs = (value: string) => {
  return parseJson(value)
}

export const setterRecentGifs = (handler: any, value: string, gif: GifInterface) => {
  const gifs = parseJson(value)

  gifs.unshift(gif).filter((_: any, key: number) => key < 18)

  handler("gifs", JSON.stringify(gifs), { path: "/" })
}

export const getterBrand = (value: string) => {
  return value || ""
}

export const setterBrand = (handler: any, id: string) => {
  handler("brand", id, { path: "/" })
}

export const getterVolume = (value: string) => {
  return parseInt(value || "60")
}

export const setterVolume = (handler: any, volume: number) => {
  handler("volume", `${volume}`, { path: "/" })
}
