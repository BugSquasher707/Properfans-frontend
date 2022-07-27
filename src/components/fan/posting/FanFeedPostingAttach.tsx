import Wrapper from "components/wrappers/Wrapper"
import { UploadContentType } from "libs/enums"
import { DropdownInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdAddCircle, MdImage, MdKeyboardVoice, MdVideocam } from "react-icons/md"
import TooltipBackground from "utils/modals/TooltipBackground"

const FanFeedPostingAttach = ({
  handlerDrop,
  handlerRecord,
  handlerContent
}: {
  handlerDrop: any
  handlerRecord: any
  handlerContent: any
}) => {
  const [open, setOpen] = useState(false)

  const onAudio = () => {
    handlerRecord(true)
    handlerContent(UploadContentType.Audio)
  }

  const onVideo = () => {
    handlerRecord(true)
    handlerContent(UploadContentType.Video)
  }

  const [attach] = useState<DropdownInterface[]>([
    {
      link: handlerDrop,
      param: UploadContentType.Pictures,
      title: "Attach Media",
      icon: <MdImage className="text-black" />
    },
    {
      link: onVideo,
      param: true,
      title: "Record Video",
      icon: <MdVideocam className="text-black" />
    },
    {
      link: onAudio,
      param: true,
      title: "Record Audio",
      icon: <MdKeyboardVoice className="text-black" />
    }
  ])

  return (
    <>
      <div className="relative">
        <button
          className={`group flex h-36 items-center space-x-[6px] rounded-4 bg-grey-3 px-12 text-14 font-bold text-grey-40 hover:bg-grey-6 hover:text-black ${
            open ? "bg-grey-6 text-black" : ""
          }`}
          onClick={() => setOpen(true)}
        >
          <MdAddCircle className={`text-16 group-hover:text-black ${open ? "text-black" : "text-grey-20"}`} />
          <span className="text-14 font-bold text-grey-40 group-hover:text-black">Attach</span>
        </button>
        <Wrapper open={open}>
          <TooltipBackground handler={setOpen} />
          <div
            className="absolute bottom-48 left-0 z-40 mt-10 w-[165px] cursor-pointer rounded-4 border-1 border-grey-12 bg-white px-6 py-4 shadow-md dark:shadow-none"
            onClick={() => setOpen(false)}
          >
            {attach.map((option: DropdownInterface, key: number) => (
              <button
                key={key}
                className="group my-2 flex h-36 w-full items-center justify-start space-x-[10px] rounded-4 px-14 hover:bg-grey-6"
                onClick={() => option.link(option.param)}
              >
                <div className="flex items-center opacity-20 group-hover:opacity-100">{option.icon}</div>
                <div className="text-14 font-bold text-black">{option.title}</div>
              </button>
            ))}
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default FanFeedPostingAttach
