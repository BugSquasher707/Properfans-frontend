import { FanDiscoverTagInterface } from "libs/interfaces"
import React from "react"
import { FaHashtag } from "react-icons/fa"

const FanTagTile = ({ handle }: { handle: FanDiscoverTagInterface }) => {
  return (
    <div className="group flex cursor-pointer items-center rounded-4 border-1 border-grey-10 bg-white p-12 pr-16">
      <div className="mr-16 flex h-42 w-42 items-center justify-center rounded-full bg-grey-10 text-grey-20 group-hover:bg-purple-10 group-hover:text-purple">
        <FaHashtag />
      </div>
      <div className="font-bold">
        <p className="m-0 mb-6 text-14 text-black">#{handle.handle}</p>
        <p className="m-0 text-14 text-grey-40">{handle.posts} posts</p>
      </div>
    </div>
  )
}

export default FanTagTile
