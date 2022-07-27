import MeetFilterLink from "components/meet/filter/MeetFilterLink"
import React from "react"
import { IoMdPlayCircle } from "react-icons/io"
import { MdPhone, MdVideocam } from "react-icons/md"

const MeetFilterType = ({
  audioCalls,
  videoCalls,
  videoGreetings,
  handlerAudioCalls,
  handlerVideoCalls,
  handlerVideoGreetings
}: {
  audioCalls: boolean
  videoCalls: boolean
  videoGreetings: boolean
  handlerAudioCalls: any
  handlerVideoCalls: any
  handlerVideoGreetings: any
}) => {
  return (
    <>
      <div className="mb-40 grid w-full grid-cols-1 gap-8">
        <MeetFilterLink
          active={audioCalls}
          handler={handlerAudioCalls}
          icon={<MdPhone className="text-18 text-grey-20 group-hover:text-black" />}
          title={"Audio Calls"}
        />
        <MeetFilterLink
          active={videoCalls}
          handler={handlerVideoCalls}
          icon={<MdVideocam className="text-18 text-grey-20 group-hover:text-black" />}
          title={"Video Calls"}
        />
        <MeetFilterLink
          active={videoGreetings}
          handler={handlerVideoGreetings}
          icon={<IoMdPlayCircle className="text-18 text-grey-20 group-hover:text-black" />}
          title={"Video Greetings"}
        />
      </div>
    </>
  )
}

export default MeetFilterType
