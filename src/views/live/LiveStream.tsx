import React from "react"

const LiveStream = () => {
  return (
    <>
      <div className="grid w-full grid-cols-[1fr,auto] items-start">
        <div className="grid w-full grid-cols-1">
          <div className="aspect-w-16 aspect-h-9 w-full bg-black"></div>
        </div>
        <div className="w-[320px]"></div>
      </div>
    </>
  )
}

export default LiveStream
