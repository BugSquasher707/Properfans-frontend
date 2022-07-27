import { URL } from "libs/constants"

export const onSwipeToLeft = (path: string) => {
  if (path.includes(URL.FAN.FEED)) {
    return true
  }

  return false
}

export const onSwipeToRight = (path: string) => {
  if (path.includes("/c/")) {
    return true
  }

  return false
}
