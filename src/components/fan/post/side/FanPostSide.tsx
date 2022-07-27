import FanPostSideCreator from "components/fan/post/side/FanPostSideCreator"
import FanPostSideTipping from "components/fan/post/side/FanPostSideTipping"
import { FeedInterface, TippingUserInterface } from "libs/interfaces"
import React from "react"

const FanPostSide = ({ donations, post }: { donations: TippingUserInterface[]; post: FeedInterface }) => {
  return (
    <>
      <div className="w-full">
        <FanPostSideCreator post={post} />
        <div className="my-30 w-full border-b-1 border-grey-6"></div>
        <FanPostSideTipping donations={donations} post={post} />
      </div>
    </>
  )
}

export default FanPostSide
