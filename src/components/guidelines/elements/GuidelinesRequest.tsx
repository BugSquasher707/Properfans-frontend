import { URL } from "libs/constants"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const GuidelinesRequest = () => {
  return (
    <>
      <div className="flex w-full flex-wrap rounded-4 bg-purple-10 p-20">
        <div className="mb-12 w-full text-14 font-bold text-black">Request changes to the guideline</div>
        <div className="mb-20 w-full text-14 text-grey-40 md:mb-30">
          If you believe we are missing something in our Fake Engagement guideline, please submit a request for a
          change. Our team will review it within 72 hours
        </div>
        <ButtonPurple action={URL.HOME} title={"Submit Request"} />
      </div>
    </>
  )
}

export default GuidelinesRequest
