import React from "react"
import Avatar from "utils/avatars/Avatar"

const MeetAvatar = ({ icon }: { icon: string }) => {
  return (
    <>
      <div className="center relative mb-16 h-72 w-full">
        {icon ? <img alt="" className="h-100 w-100 overflow-hidden rounded-full" src={icon} /> : <Avatar size={100} />}
      </div>
    </>
  )
}

export default MeetAvatar
