import { toastSuccess } from "api/integration/toaster"
import MeetStep from "components/meet/elements/MeetStep"
import React from "react"

const MeetOrderStepNotify = ({ index, email, handlerEmail }: { index: number; email: string; handlerEmail: any }) => {
  return (
    <>
      <div className="grid w-full grid-cols-1">
        <MeetStep
          index={index}
          required={false}
          text={"Enter your email address down below to receive updates about the order"}
          title={"Get order updates"}
        />
        <div className="grid grid-cols-[1fr,auto] items-center justify-start gap-12 rounded-4 bg-grey-3 p-5 pl-15">
          <input
            className="w-full text-14 font-semibold text-black"
            placeholder={"Enter email address"}
            type="text"
            value={email}
            onChange={(e) => handlerEmail(e.target.value)}
          />
          <button
            className=" flex h-36 items-center rounded-4 bg-purple px-22 text-14 font-bold text-white"
            onClick={() => toastSuccess("Successfully set notification email address")}
          >
            Notify Me
          </button>
        </div>
      </div>
    </>
  )
}

export default MeetOrderStepNotify
