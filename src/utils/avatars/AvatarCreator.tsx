import React from "react"

const AvatarCreator = ({ icon, creator }: { icon: string; creator: boolean }) => {
  return <img alt="" className={`rounded-full ${creator ? "h-36 w-36" : "h-42 w-42"}`} src={icon} />
}

export default AvatarCreator
