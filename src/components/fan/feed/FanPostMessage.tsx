import DraftContent from "components/draft/DraftContent"
import { FeedInterface } from "libs/interfaces"
import React, { useEffect, useRef, useState } from "react"

const FanPostMessage = ({ post, small, fullscreen }: { post: FeedInterface; small: boolean; fullscreen: boolean }) => {
  const ref = useRef<HTMLInputElement>(null)

  const [readMore, setReadMore] = useState(false)
  const [openReadMore, setOpenReadMore] = useState(false)

  useEffect(() => {
    if (ref.current && ref.current.clientHeight > 42) {
      setReadMore(true)
    }
  }, [])

  return (
    <>
      <div ref={ref} className="draft relative w-full">
        <div
          className={`text-14 font-semibold leading-[32px] text-black ${small ? "line-clamp-1" : ""} ${
            readMore && !openReadMore && !fullscreen && !small ? "lg:line-clamp-2" : ""
          }`}
        >
          <DraftContent content={post.message} />
        </div>
        {readMore && !openReadMore && !fullscreen && !small ? (
          <button
            className="absolute bottom-0 right-0 hidden bg-white pl-10 text-14 font-bold text-purple lg:flex"
            onClick={() => setOpenReadMore(!openReadMore)}
          >
            Read more
          </button>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default FanPostMessage
