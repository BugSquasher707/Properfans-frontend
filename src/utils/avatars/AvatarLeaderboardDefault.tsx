import { ReactComponent as Ava } from "assets/img/ava.svg"
import React from "react"

const AvatarLeaderboardDefault = ({ big }: { big: boolean }) => {
  return <Ava className={`rounded-full fill-current text-grey-12 ${big ? "h-80 w-80" : "h-60 w-60"}`} />
}

export default AvatarLeaderboardDefault
