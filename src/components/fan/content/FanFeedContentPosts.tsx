import FanFeedPost from "components/fan/feed/FanFeedPost"
import SkeletonPost from "components/skeleton/SkeletonPost"
import { FeedCommentInterface, FeedInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"

const FanFeedContentPosts = ({ posts, handlerPage }: {
  posts: FeedInterface[]
  handlerPage: any
}) => {
  const [feed, setFeed] = useState<FeedInterface[]>([])

  useEffect(() => {
    setFeed(posts)
  }, [posts])

  // useEffect(() => {
  //   if (feed && feed.length === 0) {
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

  //   socketContent?.on("likes", eventHandlerLikes)
  //   socketContent?.on("commentPost", eventHandlerCommentAdd)
  //   socketContent?.on("commentDelete", eventHandlerCommentRemove)

  //   return () => {
  //     socketContent?.off("likes", eventHandlerLikes)
  //     socketContent?.off("commentPost", eventHandlerCommentAdd)
  //     socketContent?.off("commentDelete", eventHandlerCommentRemove)
  //   }
  // }, [feed])

  // const onNewLikes = (id: string, likes: number) => {
  //   const newFeed = [...feed]
  //   const key = newFeed
  //     .map((post: FeedInterface, ke: number) => (post.id === id ? ke : -1))
  //     .filter((ke: any) => ke >= 0)[0]

  //   if (key >= 0) {
  //     const newPost = { ...newFeed[key] }

  //     newPost.count.likes = likes
  //     newFeed[key] = newPost

  //     setFeed(newFeed)
  //   }
  // }

  const onToggleLike = (key: number) => {
    const newFeed = [...feed]
    const newPost = { ...newFeed[key] }

    newPost.liked = !newPost.liked
    newFeed[key] = newPost

    setFeed(newFeed)
  }

  // const onNewComment = (id: string, comment: FeedCommentInterface, count: number) => {
  //   const newFeed = [...feed]
  //   const key = newFeed
  //     .map((post: FeedInterface, ke: number) => (post.id === id ? ke : -1))
  //     .filter((ke: any) => ke >= 0)[0]

  //   if (key >= 0) {
  //     const newPost = { ...newFeed[key] }

  //     newPost.count.comments = count
  //     newPost.comments = [comment, ...newPost.comments].slice(0, newPost.comments.length)
  //     newFeed[key] = newPost

  //     setFeed(newFeed)
  //   }
  // }

  const onNewComments = (key: number, comments: FeedCommentInterface) => {
    const newFeed = [...feed]
    const newPost = { ...newFeed[key] }

    newPost.count.comments = newPost.count.comments + 1
    newPost.comments = newPost.comments.concat(comments)
    newFeed[key] = newPost

    setFeed(newFeed)
  }

  // const onDeleteComment = (id: string, comment: FeedCommentInterface, count: number) => {
  //   const newFeed = [...feed]
  //   const key = newFeed
  //     .map((post: FeedInterface, ke: number) => (post.id === id ? ke : -1))
  //     .filter((ke: any) => ke >= 0)[0]

  //   if (key >= 0) {
  //     const newPost = { ...newFeed[key] }

  //     newPost.count.comments = count
  //     newPost.comments = newPost.comments.filter((com: FeedCommentInterface) => com.id !== comment.id)
  //     newFeed[key] = newPost

  //     setFeed(newFeed)
  //   }
  // }

  return (
    <>
      {feed && feed.length > 0 ? (
        <div className="grid w-full grid-cols-1 text-black lg:gap-14">
          {feed.map((post: FeedInterface, key: number) => (
            <FanFeedPost
              key={key}
              fullscreen={false}
              handlerComments={onNewComments}
              handlerLike={onToggleLike}
              handlerPage={handlerPage}
              index={key}
              post={post}
              small={false}
            />
          ))}
        </div>
      ) : (
        <SkeletonPost />
      )}
    </>
  )
}

export default FanFeedContentPosts
