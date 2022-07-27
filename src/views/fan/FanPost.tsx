import { getSinglePost } from "api/endpoints/fanPost"
import { statusApi } from "api/endpoints/status"
import { onSortCoins } from "api/integration/functions"
import { mapPost, mapPostTips } from "api/integration/posts"
import FanFeedPost from "components/fan/feed/FanFeedPost"
import FanPostSide from "components/fan/post/side/FanPostSide"
import SkeletonPost from "components/skeleton/SkeletonPost"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { OverlayType } from "libs/enums"
import { FeedCommentInterface, FeedInterface, TippingUserInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useHistory, useParams } from "react-router"
import TooltipBackground from "utils/modals/TooltipBackground"

interface ParamInterface {
  id: string
}

const FanPost = () => {
  const { token, setOverlay } = useProps()

  const history = useHistory()

  const { id } = useParams<ParamInterface>()

  const [openGift, setOpenGift] = useState(false)

  const [donations, setDonations] = useState<TippingUserInterface[]>([])

  const [post, setPost] = useState<FeedInterface>()

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  useEffect(() => {
    // onLoad()
  }, [post])

  const onLoad = async () => {
    const resultPost = await getSinglePost(token, id)

    if (resultPost.data) {
      setPost(mounted && resultPost.data ? mapPost(resultPost.data) : null)
    } else {
      history.push(URL.FAN.FEED)
    }

    const resultDonations = await statusApi()

    if (resultDonations) {
      setDonations(
        mounted && resultDonations && resultDonations.length > 0 ? onSortCoins(mapPostTips(resultDonations)) : []
      )
    } else {
      setOverlay(OverlayType.NotFound)
    }
  }

  // const onUpdate = () => {
  //   if (!post) {
  //     return
  //   }
  //   const eventHandlerLikes = (data: any) => {
  //     onNewLikes(data.id, data.likes)
  //   }

  //   const eventHandlerCommentAdd = (data: any) => {
  //     onNewComment(data.id, data.comment, data.commentsLength)
  //   }

  //   const eventHandlerCommentRemove = (data: any) => {
  //     onDeleteComment(data.id, data.comment, data.commentsLength)
  //   }

  //   const eventHandlerTip = (data: any) => {
  //     onTip(data.postid, data)
  //   }

  //   socketContent.on("likes", eventHandlerLikes)
  //   socketContent.on("commentPost", eventHandlerCommentAdd)
  //   socketContent.on("commentDelete", eventHandlerCommentRemove)
  //   socketContent.on("tipPost", eventHandlerTip)

  //   return () => {
  //     socketContent.off("likes", eventHandlerLikes)
  //     socketContent.off("commentPost", eventHandlerCommentAdd)
  //     socketContent.off("commentDelete", eventHandlerCommentRemove)
  //     socketContent.on("tipPost", eventHandlerTip)
  //   }
  // }

  // const onNewLikes = (postId: string, likes: number) => {
  //   if (post && post.id === postId) {
  //     const newPost = { ...post }

  //     newPost.count.likes = likes ?? 0

  //     setPost(newPost)
  // }
  // }

  const onToggleLike = () => {
    if (post) {
      const newPost = { ...post }

      newPost.liked = !newPost.liked

      setPost(newPost)
    }
  }

  // const onNewComment = (postId: string, comment: FeedCommentInterface, count: number) => {
  //   if (post && post.id === postId) {
  //     const newPost = { ...post }
  //     newPost.count.comments = count
  //     newPost.comments = [comment, ...newPost.comments].slice(0, newPost.comments.length)
  //     setPost(newPost)
  //   }
  // }

  const onNewComments = (key: number, comments: FeedCommentInterface) => {
    if (post) {
      const newPost = { ...post }
      newPost.comments = newPost.comments.concat(comments)
      setPost(newPost)
    }
  }

  // const onDeleteComment = (postId: string, comment: FeedCommentInterface, count: number) => {
  //   if (post && post.id === postId) {
  //     const newPost = { ...post }

  //     newPost.count.comments = count
  //     newPost.comments = newPost.comments.filter((com: FeedCommentInterface) => com.id !== comment.id)

  //     setPost(newPost)
  //   }
  // }

  // const onTip = (postId: string, donation: any) => {
  //   if (post && post.id === postId) {
  //     const newDonation = mapPostTip(donation)

  //     setDonations((old) =>
  //       onSortCoins([newDonation, ...old.filter((don: TippingUserInterface) => don.id !== donation.id)])
  //     )
  //   }
  // }

  return (
    <>
      {post ? (
        <div className="grid max-h-full w-full grid-cols-1 items-start gap-20 md:gap-40 xl:grid-cols-[1fr,auto]">
          <div className="grid w-full grid-cols-1 gap-20">
            <FanFeedPost
              fullscreen={true}
              handlerComments={onNewComments}
              handlerGift={setOpenGift}
              handlerLike={onToggleLike}
              handlerLoad={onLoad}
              index={0}
              post={post}
              small={false}
            />
          </div>
          <Wrapper open={openGift}>
            <TooltipBackground handler={setOpenGift} />
          </Wrapper>
          <div
            className={`xl:rounded-t-0 fixed bottom-0 left-0 z-40 w-full bg-white p-12 xs:p-20 sm:p-30 xl:relative xl:z-auto xl:w-[240px] xl:p-0 ${
              openGift ? "flex rounded-t-[10px]" : "hidden xl:flex"
            }`}
          >
            <FanPostSide donations={donations} post={post} />
          </div>
        </div>
      ) : (
        <SkeletonPost />
      )}
    </>
  )
}

export default FanPost
