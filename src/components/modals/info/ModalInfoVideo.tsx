import { ModalVideoInterface } from "libs/interfaces"
import React from "react"
import ModalWrapper from "utils/modals/ModalWrapper"
import VideoPlayer from "utils/video/VideoPlayer"

const ModalInfoVideo = ({ data, open, handler }: { data: ModalVideoInterface; open: boolean; handler: any }) => {
  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 py-30 shadow-sm dark:shadow-none lg:w-450">
          <div className="center mb-20 h-40 w-full">
            <div className="center h-40 w-40 rounded-full bg-purple">{data.icon}</div>
          </div>
          <div className="mb-20 w-full text-center text-16 font-bold text-black md:mb-24">{data.title}</div>
          <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-30">{data.text}</div>
          <div className="mb-20 w-full md:mb-30">
            <VideoPlayer
              length={data.video.length}
              title={data.video.length}
              video={"https://bradmax.com/static/video/tears_of_steel.mp4"}
              pre
            />
          </div>
          <button className="w-full text-center text-14 font-bold text-grey-40 hover:text-black" onClick={handler}>
            Close
          </button>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalInfoVideo
