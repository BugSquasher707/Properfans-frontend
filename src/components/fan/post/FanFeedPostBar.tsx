import { likePost, unLikePost } from "api/endpoints/props"
import { onPlural } from "api/integration/functions"
import FanFeedPostTier from "components/fan/post/FanFeedPostTier"
import ModalLikes from "components/modals/fan/ModalLikes"
import { useProps } from "contexts/PropsContext"
import { FeedInterface, FeedLikeInterface } from "libs/interfaces"
import React, { useState } from "react"
import { BiComment } from "react-icons/bi"
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io"
import Avatar from "utils/avatars/Avatar"

const FanFeedPostBar = ({
  small,
  post,
  index,
  open,
  handler,
  handlerLike,
  handlerLoad,
  handlerPage,
  isPostLiked,
  setIsPostLiked
}: {
  small: boolean
  post: FeedInterface
  index: number
  open: boolean
  handler: any
  handlerLike: any
  handlerLoad?: any
  handlerPage?: any,
  isPostLiked: boolean,
  setIsPostLiked: any
}) => {
  const { token, user } = useProps()

  const [openLikes, setOpenLikes] = useState(false)

  const onLike = async () => {
    const data = {
      userId: user.id
    }

    const result = await likePost(token, data, post.id)

    if (result.status) {
      handlerLike(index)
      handlerLoad()
      handlerPage()
    }
  }

  const onUnLike = async () => {
    setIsPostLiked(false)

    const data = {
      userId: user.id
    }

    const result = await unLikePost(token, data, post.id)

    if (result.status) {
      handlerLike(index)
      handlerLoad()
      handlerPage()
    }
  }

  return (
    <>
      <div className="grid w-full grid-cols-[auto,1fr] items-center gap-8">
        <button
          className={`flex w-full items-center space-x-[8px] ${!post.redacted ? "group" : ""}`}
          onClick={() => (!post.redacted ? handler(!open) : "")}
        >
          <BiComment className="text-18 text-grey-20 group-hover:text-purple" />
          <div className="text-left text-12 font-bold text-grey-40 group-hover:text-purple">{post.count.comments}</div>
        </button>
        <div className="flex w-full items-center justify-between space-x-[8px]">
          <div className="flex w-full items-center space-x-[8px]">
            <button
              className={`flex items-center justify-center space-x-[6px] ${!post.redacted ? "group" : ""}`}
              onClick={() => (!small && !post.redacted ? (!isPostLiked ? onLike() : onUnLike()) : null)}
            >
              {isPostLiked ? (
                <IoMdHeart className="text-20 text-purple" />
              ) : (
                <IoMdHeartEmpty className="text-20 text-grey-20 group-hover:text-purple" />
              )}
              <div className="flex text-left text-14 font-bold text-grey-40 group-hover:text-purple lg:hidden">
                {post.count.likes}
              </div>
            </button>
            <button
              className={`group hidden w-full items-center gap-10 lg:grid ${
                post.likes.length > 0 ? "grid-cols-[auto,1fr]" : "grid-cols-1"
              }`}
              onClick={() => (!small ? setOpenLikes(true) : null)}
            >
              {post.likes.length > 0 ? (
                <>
                  {post.likes[0].userName ? (
                    <>
                      <div className="flex flex-row-reverse">
                        {post.likes.map((like: FeedLikeInterface, key: number) => (
                          <div key={key} className="relative h-22 w-22">
                            <div className="absolute -top-2 -left-2 flex h-26 w-26 items-center justify-center rounded-full bg-white">
                              {like.avatar ? (
                                <img alt="" className="h-20 w-20 rounded-full" src={like.avatar} />
                              ) : (
                                <Avatar size={22} />
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="w-full truncate overflow-ellipsis text-left text-12 font-bold text-grey-40 group-hover:text-purple">
                        Liked by <span className="font-bold">{post.likes[0].userName}</span> and{" "}
                        <span className="font-bold">{post.count.likes - 1}</span> others
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="w-full truncate overflow-ellipsis text-left text-12 font-bold text-grey-40 group-hover:text-purple">
                        {post.count.likes} like{onPlural(post.count.likes)}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <div className="w-full text-left text-12 font-bold text-grey-40 group-hover:text-purple">
                  <span className="font-bold">{post.count.likes}</span> likes
                </div>
              )}
            </button>
          </div>
          <div className="flex lg:hidden">
            <FanFeedPostTier post={post} />
          </div>
        </div>
      </div>
      <ModalLikes handler={setOpenLikes} open={openLikes} post={post} />
    </>
  )
}

export default FanFeedPostBar
