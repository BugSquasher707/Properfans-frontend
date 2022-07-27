import React from "react"
import { MdPauseCircleFilled, MdPlayCircleFilled } from "react-icons/md"

const VideoPlayerClean = ({ playing, setPlaying }: { playing: boolean; setPlaying: any }) => {
  return (
    <>
      <button
        className="absolute left-0 bottom-0 z-20 flex h-full w-full items-center justify-center opacity-0 hover:opacity-100"
        onClick={() => setPlaying(!playing)}
      >
        <div className="relative h-40 w-40 rounded-full shadow-md">
          {playing ? (
            <MdPauseCircleFilled className="absolute -top-4 -left-4 text-48 text-white" />
          ) : (
            <MdPlayCircleFilled className="absolute -top-4 -left-4 text-48 text-white" />
          )}
        </div>
      </button>
    </>
  )
}

export default VideoPlayerClean
