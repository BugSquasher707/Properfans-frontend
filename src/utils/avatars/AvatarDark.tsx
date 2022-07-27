import { ReactComponent as Ava } from "assets/img/ava.svg"
import React from "react"

const AvatarDark = ({ dark }: { dark: boolean }) => {
  return <Ava className={`h-42 w-42 rounded-full ${dark ? "bg-grey-10" : "bg-white-20"}`} />
}

export default AvatarDark
