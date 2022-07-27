import React from "react"

const AvatarLeaderboard = ({ icon, big }: { icon: string; big: boolean }) => {
  return <img alt="" className={`rounded-full ${big ? "h-80 w-80" : "h-60 w-60"}`} src={icon} />
}

export default AvatarLeaderboard
