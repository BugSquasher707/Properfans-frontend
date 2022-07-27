import MeetStep from "components/meet/elements/MeetStep"
import React from "react"
import CheckListDot from "utils/lists/CheckListDot"

const MeetOrderStepPrivacy = ({
  index,
  privacy,
  handlerPrivacy
}: {
  index: number
  privacy: boolean
  handlerPrivacy: any
}) => {
  return (
    <>
      <div className="grid w-full grid-cols-1">
        <MeetStep
          index={index}
          text={"Do you want to allow the creator to feature your video greeting on his/her profile?"}
          title={"Privacy setting"}
          required
        />
        <div className="justify-start4 flex items-center space-x-[2px]">
          <button className="flex items-center justify-center space-x-[14px]" onClick={() => handlerPrivacy(true)}>
            <CheckListDot active={privacy} />
            <div className="text-14 font-bold text-black">Yes</div>
          </button>
          <button className="flex items-center justify-center space-x-[14px]" onClick={() => handlerPrivacy(false)}>
            <CheckListDot active={!privacy} />
            <div className="text-14 font-bold text-black">No, I don&apos;t like it</div>
          </button>
        </div>
      </div>
    </>
  )
}

export default MeetOrderStepPrivacy
