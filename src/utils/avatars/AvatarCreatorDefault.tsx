import { ReactComponent as Ava } from "assets/img/ava.svg"
import React from "react"

const AvatarCreatorDefault = ({ creator }: { creator: boolean }) => {
  return <Ava className={`fill-current text-grey-12 ${creator ? "h-36 w-36" : "h-42 w-42"}`} />
}

export default AvatarCreatorDefault
