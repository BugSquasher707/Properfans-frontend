import FanPostImagesGrid from "components/fan/feed/FanPostImagesGrid"
import FanPostMessage from "components/fan/feed/FanPostMessage"
import { URL } from "libs/constants"
import { FeedInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdImage } from "react-icons/md"
import { useHistory } from "react-router-dom"
import AudioPlayer from "utils/video/AudioPlayer"
import VideoPlayer from "utils/video/VideoPlayer"

const FanPostContent = ({ post, small, fullscreen }: { post: FeedInterface; small: boolean; fullscreen: boolean }) => {
  const history = useHistory()

  const [count, setCount] = useState(0)

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    if (post.message && post.message.blocks && post.message.blocks.length > 0) {
      const value = post.message.blocks.map((block: any) => (!block.text.trim() && "\n") || block.text).join("\n")

      setCount(value.trim().length)
    } else {
      setCount(0)
    }
  }

  return (
    <>
      <div
        className="grid w-full grid-cols-1 gap-8 md:gap-14"
        onClick={() => (fullscreen ? "" : history.push(URL.FAN.POST.replace(":id", post.id)))}
      >
        {small ? (
          <>
            {post.type === "video" || post.type === "image" ? (
              <div className="flex h-100 w-full items-center justify-center rounded-4 bg-grey-4">
                <MdImage className="text-24 text-grey-20" />
              </div>
            ) : (
              ""
            )}
            {post.message && count > 0 ? <FanPostMessage fullscreen={fullscreen} post={post} small={small} /> : ""}
          </>
        ) : (
          <>
            {post.type === "video" && post.urls && post.urls.length > 0 ? (
              <VideoPlayer pre={false} video={post.urls[0]} />
            ) : (
              ""
            )}
            {post.type === "audio" && post.urls && post.urls.length > 0 ? <AudioPlayer audio={post.urls[0]} /> : ""}
            {post.type === "image" && post.urls && post.urls.length > 0 ? (
              <FanPostImagesGrid fullscreen={fullscreen} images={post.urls} />
            ) : (
              ""
            )}
            {post.message && count > 0 ? <FanPostMessage fullscreen={fullscreen} post={post} small={small} /> : ""}
          </>
        )}
      </div>
    </>
  )
}

export default FanPostContent
