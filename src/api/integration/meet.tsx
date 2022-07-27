import { URL } from "libs/constants"
import { MeetDeliveryType, MeetProductType, MeetPurposesType } from "libs/enums"
import React from "react"
import { IoMdCheckmark } from "react-icons/io"

export const onMeetLink = (type: MeetProductType, param: string) => {
  let link = ""

  switch (type) {
    case MeetProductType.AudioCall:
      link = URL.MEET.ORDER.AUDIOCALL
      break
    case MeetProductType.VideoCall:
      link = URL.MEET.ORDER.VIDEOCALL
      break
    case MeetProductType.VideoGreeting:
      link = URL.MEET.ORDER.VIDEOGREETING
      break
  }

  return link.replace(":param", param)
}

export const onMeetDeliveryContent = (type: MeetDeliveryType) => {
  let content

  switch (type) {
    case MeetDeliveryType.Standard:
      content = (
        <>
          48 hours <span className="text-14 font-normal text-grey-40"> - Standard</span>
        </>
      )
      break
    case MeetDeliveryType.Express:
      content = (
        <>
          24 hours <span className="text-14 font-normal text-grey-40"> - Express</span>
        </>
      )
      break
    case MeetDeliveryType.Rush:
      content = (
        <>
          12 hours <span className="text-14 font-normal text-grey-40"> - Rush</span>
        </>
      )
      break
  }

  return content
}

export const onMeetPurposesContent = (type: MeetPurposesType) => {
  let content

  switch (type) {
    case MeetPurposesType.Commercial:
      content = (
        <>
          <span className="w-full text-left">This license will allow you to use the footage for purposes such as:</span>
          <span className="grid grid-cols-[auto,1fr] items-center gap-6 text-purple">
            <IoMdCheckmark className="text-16 text-purple" /> Brand advertisment
          </span>
          and
          <span className="grid grid-cols-[auto,1fr] items-center gap-6 text-purple">
            <IoMdCheckmark className="text-16 text-purple" /> On digital or printed media
          </span>
          etc.
        </>
      )
      break
    case MeetPurposesType.Replay:
      content = (
        <>
          <span className="w-full text-left">Once your call with the creator is finished you have an ability to:</span>
          <span className="grid grid-cols-[auto,1fr] items-center gap-6 text-purple">
            <IoMdCheckmark className="text-16 text-purple" /> Replay call
          </span>
          and
          <span className="grid grid-cols-[auto,1fr] items-center gap-6 text-purple">
            <IoMdCheckmark className="text-16 text-purple" /> Download the call file.
          </span>
        </>
      )
      break
  }

  return content
}

export const onMeetTitle = (type: MeetProductType, article: boolean) => {
  let title

  switch (type) {
    case MeetProductType.AudioCall:
      title = `${article ? "an" : ""} audio call`
      break
    case MeetProductType.VideoCall:
      title = `${article ? "a" : ""} video call`
      break
    case MeetProductType.VideoGreeting:
      title = `${article ? "a" : ""} video greeting`
      break
  }

  return title
}

export const onMeetPagesTitle = (type: MeetProductType) => {
  let title

  switch (type) {
    case MeetProductType.AudioCall:
      title = "Calls"
      break
    case MeetProductType.VideoCall:
      title = "Calls"
      break
    case MeetProductType.VideoGreeting:
      title = "Video Greeting"
      break
  }

  return title
}

export const onMeetPurposesTitle = (type: MeetPurposesType) => {
  let title

  switch (type) {
    case MeetPurposesType.Commercial:
      title = "Comercial permissions for brand / business"
      break
    case MeetPurposesType.Replay:
      title = "Ability to replay the call"
      break
  }

  return title
}
