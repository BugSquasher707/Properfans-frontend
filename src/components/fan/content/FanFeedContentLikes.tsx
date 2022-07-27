import { parseDate } from "api/integration/functions"
import ChatAvatarDm from "components/chat/avatar/ChatAvatarDm"
import { DATE, URL } from "libs/constants"
import { ActivityType } from "libs/enums"
import { ActivityInterface } from "libs/interfaces"
import moment from "moment"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const FanFeedContentLikes = ({ likes }: { likes: ActivityInterface[] }) => {
  const [feed, setFeed] = useState<ActivityInterface[]>([])

  useEffect(() => {
    setFeed(likes)
  }, [likes])

  // useEffect(() => {
  //   if (feed && feed.length === 0) {
  //     return
  //   }

  //   // TODO - Add socketContents

  //   const eventHandlerLikes = (data: any) => {
  //     console.log(data)
  //   }

  //   const eventHandlerCommentAdd = (data: any) => {
  //     console.log(data)
  //   }

  //   const eventHandlerCommentRemove = (data: any) => {
  //     console.log(data)
  //   }

  //   // socketContent.on("likes", eventHandlerLikes)
  //   // socketContent.on("commentPost", eventHandlerCommentAdd)
  //   // socketContent.on("commentDelete", eventHandlerCommentRemove)

  //   return () => {
  //     // socketContent.off("likes", eventHandlerLikes)
  //     // socketContent.off("commentPost", eventHandlerCommentAdd)
  //     // socketContent.off("commentDelete", eventHandlerCommentRemove)
  //   }
  // }, [feed])

  return (
    <>
      {feed && feed.length > 0 ? (
        <div className="grid w-full grid-cols-1 text-black lg:gap-14">
          <div className="flex h-10 w-full bg-grey-4 lg:hidden"></div>
          {feed.map((post: ActivityInterface, key: number) => (
            <Link
              key={key}
              className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-16 border-b-[10px] border-grey-3 p-12 dark:shadow-none sm:p-20 lg:rounded-4 lg:border-1 lg:shadow-md lg:dark:border-grey-12"
              to={URL.FAN.POST.replace(":id", post.postid)}
            >
              <div
                className={`flex h-42 w-42 items-center justify-center overflow-hidden rounded-full ${
                  post.brand.verified ? "bg-gradient-to-r from-purple to-green" : ""
                }`}
              >
                <ChatAvatarDm avatar={post.brand.avatar} verified={post.brand.verified} />
              </div>
              <div className="w-full text-14 font-bold text-black">
                <span className="text-purple">{post.user.userName}</span>{" "}
                {
                  {
                    [ActivityType.Comment]: "commented on",
                    [ActivityType.Like]: "liked"
                  }[post.type]
                }{" "}
                <span className="text-purple">{post.brand.userName}</span>
              </div>
              <div className="grid grid-cols-1 gap-4">
                <div className="text-right text-12 font-bold text-purple">{moment(post.created).format(DATE.TIME)}</div>
                <div className="text-right text-12 font-bold text-grey-40">{parseDate(post.created / 1000)}</div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="h-100 w-full text-14 font-bold text-grey-40"></div>
      )}
    </>
  )
}

export default FanFeedContentLikes
