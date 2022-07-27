import Wrapper from "components/wrappers/Wrapper"
import React from "react"
import { MdPlayCircleFilled } from "react-icons/md"

const VideoPlayIcon = ({ title, length, setPlaying }: { title?: string; length?: string; setPlaying: any }) => {
  return (
    <>
      <button
        className="z-10 flex h-full w-full items-center justify-center bg-purple"
        onClick={() => setPlaying(true)}
      >
        <div className="absolute top-0 left-0 bottom-0 w-full">
          <img alt="" src={"/gradients/gradient_bg.png"} />
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="relative h-40 w-40 rounded-full shadow-md">
            <MdPlayCircleFilled className="absolute -top-4 -left-4 text-48 text-white" />
          </div>
          <Wrapper open={title ? true : false}>
            <div className="absolute top-10 left-10 text-14 font-bold text-white md:top-18 md:left-18">{title}</div>
          </Wrapper>
          <Wrapper open={length ? true : false}>
            <div className="absolute bottom-10 left-10 text-14 font-bold text-white opacity-40 md:bottom-18 md:left-18">
              {length}
            </div>
          </Wrapper>
        </div>
      </button>
    </>
  )
}

export default VideoPlayIcon
