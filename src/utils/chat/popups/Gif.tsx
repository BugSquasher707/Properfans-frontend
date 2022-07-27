import { GifInterface } from "libs/interfaces"
import React from "react"

const Gif = ({ gif, send }: { gif: GifInterface; send: any }) => {
  return (
    <>
      <button
        className="group aspect-w-16 aspect-h-9 relative w-full select-none text-16 hover:bg-grey-3"
        onClick={() => send(gif)}
      >
        <img
          alt=""
          className="absolute top-[50%] left-[50%] min-h-full min-w-full translate-x-[-50%] translate-y-[-50%] transform rounded-4 group-hover:hidden"
          src={gif.preview}
        />
        <img
          alt=""
          className="absolute top-[50%] left-[50%] hidden min-h-full min-w-full translate-x-[-50%] translate-y-[-50%] transform rounded-4 group-hover:flex"
          src={gif.url}
        />
      </button>
    </>
  )
}

export default Gif
