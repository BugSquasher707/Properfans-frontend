import React from "react"

const SkeletonPost = () => {
  return (
    <>
      <div className="grid w-full grid-cols-1 gap-20 rounded-4 bg-grey-2 p-20">
        <div className="flex w-full items-center justify-between space-x-[14px]">
          <div className="flex items-center space-x-[14px]">
            <div className="h-32 w-32 animate-pulse rounded-full bg-grey-6"></div>
            <div className="hidden h-8 w-74 animate-pulse rounded-4 bg-grey-6 md:flex"></div>
          </div>
          <div className="flex items-center space-x-[14px]">
            <div className="h-8 w-24 animate-pulse rounded-4 bg-grey-6"></div>
            <div className="h-28 w-100 animate-pulse rounded-4 bg-grey-6"></div>
          </div>
        </div>
        <div className="h-[260px] w-full animate-pulse rounded-4 bg-grey-6"></div>
        <div className="grid w-full grid-cols-1 gap-14">
          <div className="h-8 w-full animate-pulse rounded-4 bg-grey-6"></div>
          <div className="h-8 w-full animate-pulse rounded-4 bg-grey-6"></div>
        </div>
        <div className="grid w-full grid-cols-[auto,1fr] gap-14">
          <div className="h-22 w-52 animate-pulse rounded-4 bg-grey-6"></div>
          <div className="h-22 w-full animate-pulse rounded-4 bg-grey-6"></div>
        </div>
        <div className="grid w-full grid-cols-1 gap-6">
          <div className="grid w-full grid-cols-[auto,1fr] items-end gap-10">
            <div className="h-32 w-32 animate-pulse rounded-full bg-grey-6"></div>
            <div className="h-40 w-full animate-pulse rounded-t-4 rounded-br-4 bg-grey-6"></div>
          </div>
          <div className="grid w-full grid-cols-[auto,1fr] items-end gap-10">
            <div className="h-32 w-32 animate-pulse rounded-full bg-grey-6"></div>
            <div className="h-40 w-full animate-pulse rounded-t-4 rounded-br-4 bg-grey-6"></div>
          </div>
        </div>
        <div className="flex w-full justify-center">
          <div className="h-8 w-100 animate-pulse rounded-full bg-grey-6"></div>
        </div>
      </div>
    </>
  )
}

export default SkeletonPost
