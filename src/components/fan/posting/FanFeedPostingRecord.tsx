import { parseMinutes, useInterval } from "api/integration/functions"
import Wrapper from "components/wrappers/Wrapper"
import { RecordType } from "libs/enums"
import React, { useEffect, useState } from "react"
import { IoMdCloseCircle } from "react-icons/io"
import { MdDone, MdError, MdFiberManualRecord, MdStop } from "react-icons/md"
import { VscLoading } from "react-icons/vsc"
import { useReactMediaRecorder } from "react-media-recorder"
import AudioPlayer from "utils/video/AudioPlayer"
import VideoPlayer from "utils/video/VideoPlayer"
import VideoStream from "utils/video/VideoStream"

const FanFeedPostingRecord = ({ video, handler, handlerAdd }: { video: boolean; handler: any; handlerAdd: any }) => {
  const [type, setType] = useState(RecordType.Idle)

  const [time, setTime] = useState(0)
  const [title, setTitle] = useState(<></>)
  const [text, setText] = useState(<></>)

  const { status, startRecording, stopRecording, clearBlobUrl, mediaBlobUrl, previewStream } = useReactMediaRecorder({
    video: video
  })

  useEffect(() => {
    setType(RecordType.Idle)
  }, [])

  useEffect(() => {
    clearBlobUrl()
    setType(RecordType.Idle)
    setTitle(onTitle())
  }, [video])

  useEffect(() => {
    setType(onType())
  }, [status])

  useEffect(() => {
    setTitle(onTitle())
    setText(onText())
  }, [type])

  useEffect(() => {
    if (type === RecordType.Recording) {
      setText(onText())
    }
  }, [time])

  useInterval(
    () => {
      setTime(time + 1)
    },
    type === RecordType.Recording ? 1000 : null
  )

  const onType = () => {
    switch (status) {
      case "acquiring_media":
        return RecordType.AcquiringMedia
      case "idle":
        return RecordType.Idle
      case "recording":
        return RecordType.Recording
      case "stopped":
        return RecordType.Stopped
      default:
        return RecordType.Error
    }
  }

  const onTitle = () => {
    switch (type) {
      case RecordType.AcquiringMedia:
        return <>Loading</>
      case RecordType.Error:
        return <>An error occured</>
      case RecordType.Idle:
        return <>{video ? "Video" : "Audio"} recording</>
      case RecordType.Recording:
        return (
          <>
            <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-20">
              <MdFiberManualRecord className="text-12 text-red" />
            </div>
            Recording
          </>
        )
      case RecordType.Stopped:
        return <>View recording</>
    }
  }

  const onText = () => {
    switch (type) {
      case RecordType.AcquiringMedia:
        return <>Preserving resources</>
      case RecordType.Error:
        return <>Please try again</>
      case RecordType.Idle:
        return <>Press the button</>
      case RecordType.Recording:
        return <>{parseMinutes(time)}</>
      case RecordType.Stopped:
        return <>Add recording to post</>
    }
  }

  const onAction = () => {
    switch (type) {
      case RecordType.AcquiringMedia:
        return null
      case RecordType.Error:
        return setType(RecordType.Idle)
      case RecordType.Idle:
        return startRecording()
      case RecordType.Recording:
        return stopRecording()
      case RecordType.Stopped:
        return onAdd()
      default:
        return setType(RecordType.Idle)
    }
  }

  const onAdd = async () => {
    if (mediaBlobUrl) {
      const mediaBlob = await fetch(mediaBlobUrl).then((response) => response.blob())
      const file = new File([mediaBlob], video ? "recording.mp4" : "recording.wav", {
        type: video ? "video/mp4" : "audio/wav"
      })
      handlerAdd(file)
      handler(false)
    }
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-10 p-2">
        <div className="grid grid-cols-[auto,1fr,auto] items-center gap-10 rounded-4 bg-grey-3 p-16">
          <button
            className="flex h-36 w-36 items-center justify-center rounded-full
                  bg-purple shadow-md first:text-16 first:text-white dark:shadow-none"
            onClick={() => onAction()}
          >
            {
              {
                [RecordType.AcquiringMedia]: <VscLoading className="animate-spin" />,
                [RecordType.Error]: <MdError />,
                [RecordType.Idle]: <MdFiberManualRecord />,
                [RecordType.Recording]: <MdStop />,
                [RecordType.Stopped]: <MdDone />
              }[type]
            }
          </button>
          <div className="grid w-full grid-cols-1 gap-4">
            <div className="flex w-full items-center justify-start space-x-[6px] text-14 font-bold text-black">
              {title}
            </div>
            <div className="w-full text-12 font-bold text-grey-40">{text}</div>
          </div>
          <button className="flex items-center" onClick={() => handler(false)}>
            <IoMdCloseCircle className="text-18 text-grey-40 hover:text-black" />
          </button>
        </div>
        <Wrapper open={type === RecordType.Stopped}>
          {mediaBlobUrl ? (
            <>
              {mediaBlobUrl && video ? (
                <VideoPlayer audio={!video} light={!video} pre={false} video={mediaBlobUrl} />
              ) : (
                <AudioPlayer audio={mediaBlobUrl} />
              )}
            </>
          ) : (
            ""
          )}
        </Wrapper>
        {video && previewStream && type === RecordType.Recording ? <VideoStream stream={previewStream} /> : ""}
      </div>
    </>
  )
}

export default FanFeedPostingRecord
