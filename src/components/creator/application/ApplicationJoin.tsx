import { ApplicationTabType } from "libs/enums"
import React from "react"
import { FaClipboardCheck } from "react-icons/fa"
import { FiCheck } from "react-icons/fi"
import ButtonGrey from "utils/buttons/colors/ButtonGrey"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import TextAreaTall from "utils/inputs/TextAreaTall"

const ApplicationJoin = ({
  handler,
  submit,
  value,
  setter
}: {
  handler: any
  submit: any
  value: string
  setter: any
}) => {
  const parseAnswer = (answer: string) => {
    setter(answer.slice(0, 2600))
  }

  return (
    <>
      <div className="align-start flex w-520 max-w-full flex-wrap">
        <div className="center mb-30 h-40 w-full">
          <FaClipboardCheck className="text-40 text-purple" />
        </div>
        <div className="mb-12 w-full text-center text-24 font-bold text-black">Why do you want to join Properfans?</div>
        <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-40">
          It&apos;s very important for us to choose the right people to become creators on Properfans as we highly value
          our users (fans). Use the input field below and let us know your feelings
        </div>
        <div className="mb-12 w-full text-14 text-grey-40">Your comment (optional)</div>
        <div className="mb-20 w-full md:mb-40">
          <TextAreaTall data={{ title: "Your answer…" }} handler={parseAnswer} value={value} />
        </div>
        <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2">
          <ButtonGrey action={handler(ApplicationTabType.Monetize)} title={"Previous Step"} full />
          <ButtonPurple
            action={submit}
            icon={<FiCheck className="text-14 text-white" />}
            title={"Send Finished Application"}
            full
          />
        </div>
      </div>
    </>
  )
}

export default ApplicationJoin
