import FanPostSideCreatorProfile from "components/fan/post/side/FanPostSideCreatorProfile"
import Wrapper from "components/wrappers/Wrapper"
import { FeedInterface } from "libs/interfaces"
import React from "react"

const FanPostSideCreator = ({ post }: { post: FeedInterface }) => {
  return (
    <>
      <div className="mb-20 w-full select-none text-14 font-bold text-grey-40">Creator Post</div>
      <FanPostSideCreatorProfile post={post} />
      <div className="mt-10 flex w-full items-center space-x-[6px]">
        <div className="text-12 text-grey-40">Posted {post.date} ago</div>
        <Wrapper open={post.tier > 0}>
          <div className="h-4 w-4 rounded-full bg-grey-20"></div>
          <div className="text-12 text-grey-40">Limited post</div>
        </Wrapper>
      </div>
    </>
  )
}

export default FanPostSideCreator
