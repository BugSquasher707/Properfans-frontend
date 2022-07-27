import { TooltipInterface } from "libs/interfaces"
import React from "react"
import { useHistory } from "react-router"
import Avatar from "utils/avatars/Avatar"

const NavNotification = ({ data, handler, index }: { data: TooltipInterface; handler: any; index: number }) => {
  const history = useHistory()

  return (
    <div
      className="group my-2 grid w-full cursor-pointer grid-cols-[auto,1fr] gap-12 rounded-4 p-12 hover:bg-grey-6"
      onClick={() => {
        handler(index)
        data.url ? history.push(data.url) : ""
      }}
    >
      <div className="items-center py-4">
        {data.avatar ? <img alt="" className="h-24 w-24 rounded-full" src={data.avatar} /> : <Avatar size={24} />}
      </div>
      <div className="w-full">
        <div className="mb-8 text-12 text-grey-40">
          <span className="font-bold text-black">{data.userName}</span> {data.message}
        </div>
        <div className="text-9 text-grey-40">{data.created}</div>
      </div>
    </div>
  )
}

export default NavNotification
