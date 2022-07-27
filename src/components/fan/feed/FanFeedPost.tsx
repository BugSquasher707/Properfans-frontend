import { getSinglePost } from "api/endpoints/fanPost"
import { checkPostLike } from "api/endpoints/props"
import { onSortCreated } from "api/integration/functions"
import FanFeedPostBottom from "components/fan/feed/FanFeedPostBottom"
import FanFeedPostComment from "components/fan/feed/FanFeedPostComment"
import FanPostContent from "components/fan/feed/FanPostContent"
import FanPostLocked from "components/fan/feed/FanPostLocked"
import FanFeedPostBar from "components/fan/post/FanFeedPostBar"
import FanFeedPostTop from "components/fan/post/FanFeedPostTop"
import Wrapper from "components/wrappers/Wrapper"
import WrapperPagination from "components/wrappers/WrapperPagination"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { FeedCommentInterface, FeedInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { Link, useHistory } from "react-router-dom"

const FanFeedPost = ({
  post,
  index,
  small,
  fullscreen,
  handlerLike,
  handlerComments,
  handlerGift,
  handlerLoad,
  handlerPage
}: {
  post: FeedInterface
  index: number
  small: boolean
  fullscreen: boolean
  handlerLike: any
  handlerComments: any
  handlerGift?: any
  handlerLoad?: any
  handlerPage?: any
}) => {
  const { token, user } = useProps()

  const history = useHistory()

  const [commentsVisible, setCommentsVisible] = useState<FeedCommentInterface[]>([])
  const [openComment, setOpenComment] = useState(false)

  const [done, setDone] = useState(false)
  const [loaded, setLoaded] = useState(true)

  const [isPostLiked, setIsPostLiked] = useState(false)

  const onLoad = async () => {
    const resultLiked = await checkPostLike(token, post.id, user.id)

    if(resultLiked.status) {
      setIsPostLiked(resultLiked.liked)
    }
  }

  useEffect(() => {
    onLoad()
    setLoaded(true)
  }, [])

  useEffect(() => {
    onLoad()
  }, [post])

  useEffect(() => {
    if (post.comments) {
      setCommentsVisible(!openComment ? post.comments.slice(0, 3) : post.comments)
    }
  }, [post, openComment])

  const onPage = async (page: number) => {
    if (page === 1) {
      return
    }

    const result = await getSinglePost(token, post.id)

    if (result.data) {
      onAppend(result.data.comments)
    }
  }

  const onAppend = async (res: any) => {
    setLoaded(true)

    if (res && res.length === 0) {
      setDone(true)
    } else {
      handlerComments(index, res)
    }
  }

  const onRemove = (index: number) => {
    setCommentsVisible(commentsVisible.filter((comment: FeedCommentInterface, key: number) => key !== index))
  }

  const onCommentsClass = () => {
    const commentsClass = `comments ${openComment ? "open" : ""}`

    return fullscreen ? commentsClass : ""
  }

  const onPost = () => {
    history.push(URL.FAN.POST.replace(":id", post.id))
  }

  return (
    <>
      <div className={`w-full ${fullscreen ? "" : "pb-4 lg:pt-2"} `}>
        <div
          className={`relative grid w-full grid-cols-1 bg-white ${
            !fullscreen && !small
              ? "border-t-[10px] border-grey-3 py-20 dark:shadow-none lg:rounded-4 lg:border-1 lg:border-grey-12 lg:p-20 lg:shadow-md lg:dark:border-grey-12"
              : ""
          } ${small ? "rounded-4 dark:shadow-none lg:p-20 lg:shadow-md" : ""}`}
        >
          <div className="grid w-full flex-grow grid-cols-1 items-stretch gap-12">
            <Wrapper open={!fullscreen || (fullscreen && !openComment)}>
              <div className="grid w-full grid-cols-1 items-start">
                <div className="grid w-full grid-cols-1 items-start gap-20">
                  <FanFeedPostTop fullscreen={fullscreen} handlerGift={handlerGift} post={post} small={small} />
                  <div className="w-full">
                    <Wrapper open={post.redacted}>
                      <FanPostLocked post={post} />
                    </Wrapper>
                    <Wrapper open={!post.redacted}>
                      <FanPostContent fullscreen={fullscreen} post={post} small={small} />
                    </Wrapper>
                  </div>
                </div>
              </div>
            </Wrapper>
            <div className="grid w-full grid-cols-1 items-end">
              <div className="grid w-full grid-cols-1 items-start gap-12 md:gap-20">
                <Wrapper open={!fullscreen || (fullscreen && !openComment)}>
                  <div className="w-full">
                    <FanFeedPostBar
                      handler={setOpenComment}
                      handlerLike={handlerLike}
                      handlerLoad={handlerLoad}
                      handlerPage={handlerPage}
                      index={index}
                      isPostLiked={isPostLiked}
                      open={openComment}
                      post={post}
                      setIsPostLiked={setIsPostLiked}
                      small={small}
                    />
                  </div>
                </Wrapper>
                <Wrapper open={!small}>
                  {commentsVisible && commentsVisible.length > 0 ? (
                    <>
                      <div className={`scroller grid w-full grid-cols-1 gap-20 overflow-y-auto ${onCommentsClass()}`}>
                        <div className="w-full">
                          <div className="grid w-full grid-cols-1 gap-10">
                            <WrapperPagination
                              button={
                                <div className="flex w-full cursor-pointer items-center justify-center text-12 font-bold text-grey-40 hover:text-black">
                                  Load more comments
                                </div>
                              }
                              closed={!(fullscreen && openComment && !done)}
                              count={commentsVisible.length}
                              done={done}
                              handlerPage={onPage}
                              items={"comments"}
                              loaded={loaded}
                              top={false}
                            >
                              {onSortCreated(commentsVisible)
                                .filter((_, key: number) => (fullscreen && openComment) || key < 3)
                                .map((comment: FeedCommentInterface, key: number) => (
                                  <FanFeedPostComment
                                    key={key}
                                    comment={comment}
                                    handler={onRemove}
                                    handlerLoad={handlerLoad}
                                    handlerPage={handlerPage}
                                    index={key}
                                  />
                                ))}
                            </WrapperPagination>
                          </div>
                        </div>
                      </div>
                      <Wrapper open={fullscreen}>
                        <button
                          className="flex w-full items-center justify-center text-12 font-bold text-grey-40 hover:text-black"
                          onClick={() => setOpenComment(!openComment)}
                        >
                          {openComment ? "Close comments" : "Show more comments"}
                        </button>
                      </Wrapper>
                    </>
                  ) : (
                    ""
                  )}
                  <Wrapper open={!fullscreen && !post.redacted}>
                    <Link
                      className="flex w-full items-center justify-center text-12 text-grey-40 hover:font-bold hover:text-black"
                      to={URL.FAN.POST.replace(":id", post.id)}
                    >
                      View post
                    </Link>
                  </Wrapper>
                  <Wrapper open={fullscreen || openComment || (post.locked && post.subscription !== undefined)}>
                    <FanFeedPostBottom
                      fullscreen={fullscreen}
                      handler={handlerComments}
                      handlerLoad={handlerLoad}
                      handlerPage={handlerPage}
                      index={index}
                      openComment={openComment}
                      post={post}
                    />
                  </Wrapper>
                </Wrapper>
              </div>
            </div>
          </div>
          <Wrapper open={small}>
            <button className="absolute top-0 left-0 z-10 h-full w-full" onClick={() => onPost()}></button>
          </Wrapper>
        </div>
      </div>
    </>
  )
}

export default FanFeedPost
