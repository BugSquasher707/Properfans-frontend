import React from "react"

const SkeletonStory = () => {
  return (
    <>
      <div className="grid w-70 animate-pulse grid-cols-1 gap-8">
        <div className="h-70 w-70 rounded-full bg-grey-6"></div>
        <div className="h-14 w-full rounded-4 bg-grey-6"></div>
      </div>
    </>
  )
}

export default SkeletonStory
