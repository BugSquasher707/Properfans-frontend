import Wrapper from "components/wrappers/Wrapper"
import React from "react"
import { IoMdCheckmark } from "react-icons/io"

const MeetFilterLink = ({
  icon,
  title,
  active,
  handler
}: {
  icon: JSX.Element
  title: string
  active: boolean
  handler: any
}) => {
  return (
    <>
      <button
        className={`group grid h-44 w-full cursor-pointer grid-cols-[auto,1fr,auto] items-center gap-12 rounded-4 px-12 hover:bg-grey-6 ${
          active ? "bg-grey-6" : ""
        }`}
        onClick={() => handler(!active)}
      >
        <div className="flex">{icon}</div>
        <div className="w-full text-left text-14 font-bold text-black">{title}</div>
        <div className="flex">
          <Wrapper open={active}>
            <IoMdCheckmark className="text-18 text-purple" />
          </Wrapper>
        </div>
      </button>
    </>
  )
}

export default MeetFilterLink
