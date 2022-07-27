import { ReactComponent as StarDeca } from "assets/img/star_deca.svg"
import { MeetProductType } from "libs/enums"
import React from "react"
import { IoMdPlayCircle } from "react-icons/io"
import { MdPhone } from "react-icons/md"

const MeetStar = ({ type }: { type: MeetProductType }) => {
  return (
    <>
      <div className="relative flex h-44 w-44 items-center justify-center">
        <StarDeca className="absolute top-0 left-0 h-44 w-44" />
        {
          {
            [MeetProductType.AudioCall]: <MdPhone className="relative text-20 text-white" />,
            [MeetProductType.VideoCall]: <MdPhone className="relative text-20 text-white" />,
            [MeetProductType.VideoGreeting]: <IoMdPlayCircle className="relative text-20 text-white" />
          }[type]
        }
      </div>
    </>
  )
}

export default MeetStar
