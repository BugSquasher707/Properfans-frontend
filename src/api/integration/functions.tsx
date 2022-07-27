import { DATE, URL } from "libs/constants"
import { PasswordType, PeriodType, SubscriptionTierType } from "libs/enums"
import { SizeInterface } from "libs/interfaces"
import moment from "moment"
import React, { useEffect, useRef, useState } from "react"
import { IoMdFlag, IoMdTrophy } from "react-icons/io"

export const capitalizeString = (text: string) => {
  return text && text.length > 2 ? text.charAt(0).toUpperCase() + text.slice(1) : ""
}

export const onTimeout = async (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export const onFrameBottom = (page: string) => {
  if (page.includes(URL.POLICIES.BASE)) {
    return "bottom-0"
  } else {
    return "bottom-60"
  }
}

export const onPlural = (count: number) => {
  return count === 1 ? "" : "s"
}

export const onSortCoins = (arr: any[]) => {
  return arr.sort((a, b) => (a.coins < b.coins ? 1 : -1))
}

export const onSortCreated = (arr: any[]) => {
  return arr.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
}

export const onSortName = (arr: any[]) => {
  return arr.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1))
}

export const onSortNumbers = (arr: any[]) => {
  return arr.sort((a, b) => (a > b ? 1 : -1))
}

export const onSortUsername = (arr: any[]) => {
  return arr.sort((a, b) => (a.userName.toLowerCase() > b.userName.toLowerCase() ? 1 : -1))
}

export const openLink = (event: any, link: string) => {
  event.preventDefault()
  window.open(link)
}

export const openLinkExtern = (link: string) => {
  window.open(link)
}

export const openUrl = (event: any, link: string) => {
  event.preventDefault()
  window.location.replace(link)
}

export const openUrlExtern = (link: string) => {
  window.location.replace(link)
}

export const parseBuffer = (arr: Buffer) => {
  return btoa(arr.reduce((data, byte) => data + String.fromCharCode(byte), ""))
}

export const parseCountries = (zones: string[]) => {
  return zones.sort().map((zone) => ({ link: zone, title: zone, icon: <IoMdFlag /> }))
}

export const parseDate = (number: number) => {
  if (moment(number * 1000).format(DATE.SHORT) === moment().format(DATE.SHORT)) {
    return "Today"
  } else if (
    moment(number * 1000)
      .add(1, "days")
      .format(DATE.SHORT) === moment().format(DATE.SHORT)
  ) {
    return "Yesterday"
  }
  return `${moment(number * 1000).format(DATE.SHORT)}`
}

export const parseGain = (number: number) => {
  return !isFinite(number) || number === null ? 0 : number
}

export const parseImage = (data: string, type: string) => {
  const base64ImageString = Buffer.from(data, "binary").toString("base64")

  return `data:${type};base64,${base64ImageString}`
}

export const parseNumber = (number: number) => {
  if (number >= 999999) {
    return `${Math.round(number / 100000) / 10}M`
  } else if (number >= 999) {
    return `${Math.round(number / 100) / 10}K`
  } else {
    return `${number}`
  }
}

export const urltoFile = (url: string, filename: string, mimeType: string) => {
  return fetch(url)
    .then(function (res) {
      return res.arrayBuffer()
    })
    .then(function (buf) {
      return new File([buf], filename, { type: mimeType })
    })
}

export const parseMinutes = (number: number) => {
  const seconds = Math.round(number)

  return `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? "0" : ""}${seconds % 60}`
}

export const parseTier = (type: SubscriptionTierType) => {
  return SubscriptionTierType[type].replace("Tier", "")
}

export const parseTierType = (id: number) => {
  let tier = SubscriptionTierType.Tier0

  switch (id) {
    case 0:
      tier = SubscriptionTierType.Tier0
      break
    case 1:
      tier = SubscriptionTierType.Tier1
      break
    case 2:
      tier = SubscriptionTierType.Tier2
      break
    case 3:
      tier = SubscriptionTierType.Tier3
      break
    case 4:
      tier = SubscriptionTierType.Tier4
      break
  }

  return tier
}

export const parsePrice = (number: number, period: PeriodType) => {
  let price = 0

  switch (period) {
    case PeriodType.Weekly:
      price = number / 4
      break
    case PeriodType.Monthly:
      price = number
      break
    case PeriodType.Yearly:
      price = number * 12
      break
  }

  return price.toFixed(2)
}

export const parseTimeAgo = (date: number) => {
  return `${moment(date).fromNow(true)}`
}

export const parseTimeZones = (zones: string[]) => {
  return zones.sort().map((zone) => ({ link: zone, title: zone, icon: <IoMdFlag /> }))
}

export const parseTrophy = (key: number) => {
  let trophy

  switch (key) {
    case 0:
      trophy = <IoMdTrophy className="text-14 text-gold" />
      break
    case 1:
      trophy = <IoMdTrophy className="text-14 text-purple" />
      break
    case 2:
      trophy = <IoMdTrophy className="text-14 text-grey-20" />
      break
  }

  return trophy
}

export const parseUrl = (path: string) => {
  const category = path.split("/").filter((item: string) => item)[0]
  let specific

  if (path === URL.FAN.FEED) {
    specific = "feed"
  } else if (path === URL.FAN.SHOP) {
    specific = "shop"
  } else if (path === URL.FAN.CLUBS.BASE || path === URL.FAN.CLUBS.FOLLOWING || path === URL.FAN.CLUBS.SUBSCRIPTIONS) {
    specific = "clubs"
  } else if (path === URL.POLICIES.DISCLAIMER) {
    specific = "disclaimer"
  } else if (path === URL.POLICIES.PRIVACY) {
    specific = "privacy"
  } else if (path === URL.POLICIES.TERMS) {
    specific = "service"
  }

  if (category === "c") {
    specific = "club"
  } else if (category === "u") {
    specific = "user"
  }

  return specific ? specific : category
}

export const roundNumber = (num: number) => {
  return Math.round((num + Number.EPSILON) * 100) / 100
}

export const validateSignUp = (email: string, password: string, passwordRepeat: string, emailCheck: boolean) => {
  const format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

  if (password.length < 8) {
    return PasswordType.Characters
  } else if (!(/[a-z]/.test(password) && /[A-Z]/.test(password))) {
    return PasswordType.UpperCase
  } else if (!/\d/.test(password)) {
    return PasswordType.Number
  } else if (!format.test(password)) {
    return PasswordType.Special
  } else if (password !== passwordRepeat) {
    return PasswordType.Equal
  } else if (emailCheck && !validateEmail(email)) {
    return PasswordType.Email
  } else {
    return PasswordType.Perfect
  }
}

export const validateScore = (type: PasswordType) => {
  const scores = {
    [PasswordType.Characters]: 0,
    [PasswordType.UpperCase]: 20,
    [PasswordType.Number]: 40,
    [PasswordType.Special]: 60,
    [PasswordType.Equal]: 80,
    [PasswordType.Email]: 80,
    [PasswordType.Perfect]: 100
  }

  return scores[type]
}

export const validateTip = (type: PasswordType) => {
  const scores = {
    [PasswordType.Characters]: "at least 8 characters",
    [PasswordType.UpperCase]: "include uppercase and lowercase characters",
    [PasswordType.Number]: "include number",
    [PasswordType.Special]: "include special character",
    [PasswordType.Equal]: "passwords should be the same",
    [PasswordType.Email]: "enter a valid email",
    [PasswordType.Perfect]: "passwords are perfect!"
  }

  return scores[type]
}

export const validateError = (type: PasswordType) => {
  const scores = {
    [PasswordType.Characters]: "Password should be at least 8 characters",
    [PasswordType.UpperCase]: "Password should include uppercase and lowercase characters",
    [PasswordType.Number]: "Password should include a number",
    [PasswordType.Special]: "Password should include a special character",
    [PasswordType.Equal]: "Passwords should be the same",
    [PasswordType.Email]: "Enter a valid email",
    [PasswordType.Perfect]: "Passwords are perfect"
  }

  return scores[type]
}

export const validateEmail = (value: string) => {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(value).toLowerCase())
}

export const validatePhone = (value: string) => {
  // TODO: Phone validation
  return value ? true : false
}

export const validateLetters = (value: string) => {
  const re = /[a-zA-Z]/g
  return re.test(String(value).toLowerCase())
}

export const validateLettersNumbers = (value: string) => {
  const re = /^[0-9a-zA-Z]+$/
  return re.test(String(value).toLowerCase())
}

export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delay === null) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])
}

export const useWindowSize = (): SizeInterface => {
  const [windowSize, setWindowSize] = useState<SizeInterface>({
    width: undefined,
    height: undefined
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}
