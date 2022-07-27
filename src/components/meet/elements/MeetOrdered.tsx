import { MeetProductType } from "libs/enums"
import React from "react"
import { FaPhoneSquare } from "react-icons/fa"
import { IoLogoYoutube } from "react-icons/io"

const MeetOrdered = ({ type }: { type: MeetProductType }) => {
  return (
    <>
      {
        {
          [MeetProductType.AudioCall]: (
            <>
              <FaPhoneSquare className="text-16 text-grey-20" />
              Audio Call
            </>
          ),
          [MeetProductType.VideoCall]: (
            <>
              <IoLogoYoutube className="text-16 text-grey-20" />
              Video Call
            </>
          ),
          [MeetProductType.VideoGreeting]: (
            <>
              <IoLogoYoutube className="text-16 text-grey-20" />
              Video Greeting
            </>
          )
        }[type]
      }
    </>
  )
}

export default MeetOrdered
