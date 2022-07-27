import { parseTier } from "api/integration/functions"
import { ReactComponent as Subs } from "assets/img/subs.svg"
import WrapperAbsolute from "components/wrappers/WrapperAbsolute"
import WrapperVerified from "components/wrappers/WrapperVerified"
import { URL } from "libs/constants"
import { FeedInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import Verified from "utils/icons/Verified"

const FanPostSideCreatorProfile = ({ post }: { post: FeedInterface }) => {
  return (
    <>
      <Link
        className="mb-6 grid w-full grid-cols-[auto,1fr] items-center gap-14 rounded-4 p-10 hover:bg-purple-10"
        to={URL.BRANDS.BASE.replace(":param", post.brand.handle)}
      >
        <div className="h-32 w-32 overflow-hidden rounded-full">
          {post.brand.avatar ? <img alt="" className="h-32 w-32" src={post.brand.avatar} /> : <Avatar />}
        </div>
        <div className="relative h-32 w-full">
          <WrapperAbsolute>
            <div className="flex w-full">
              <div className="relative max-w-full truncate overflow-ellipsis pr-20 text-14 font-bold text-black">
                {post.brand.userName}
                <WrapperVerified>{post.brand.verified ? <Verified size={16} /> : ""}</WrapperVerified>
              </div>
            </div>
            <div className="w-full text-12 font-bold text-grey-40">@{post.brand.handle}</div>
          </WrapperAbsolute>
        </div>
      </Link>
      <button className="group flex h-28 w-full items-center justify-center space-x-[8px] rounded-4 bg-purple-20 px-12 hover:bg-purple">
        <Subs className="fill-current text-purple group-hover:text-white" />
        <span className="text-12 font-bold text-purple group-hover:text-white">Tier {parseTier(post.tier)}</span>
      </button>
    </>
  )
}

export default FanPostSideCreatorProfile
