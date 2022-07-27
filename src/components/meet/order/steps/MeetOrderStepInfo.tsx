import MeetStep from "components/meet/elements/MeetStep"
import Wrapper from "components/wrappers/Wrapper"
import { GenderType, MeetGreetingType, UploadContentType } from "libs/enums"
import { TitleInterface } from "libs/interfaces"
import React, { useState } from "react"
import { AiFillInfoCircle } from "react-icons/ai"
import { IoMdCheckmark } from "react-icons/io"
import DropdownLight from "utils/dropdowns/DropdownLight"
import DropzoneFiles from "utils/dropzone/DropzoneFiles"

const MeetOrderStepInfo = ({
  index,
  files,
  greeting,
  pronoun,
  message,
  handlerFiles,
  handlerGreeting,
  handlerPronoun,
  handlerMessage
}: {
  index: number
  files: File[]
  greeting: TitleInterface
  pronoun: TitleInterface
  message: string
  handlerFiles: any
  handlerGreeting: any
  handlerPronoun: any
  handlerMessage: any
}) => {
  const [genders] = useState<TitleInterface[]>([
    { type: GenderType.Select, title: "Select" },
    { type: GenderType.Man, title: "👨 He/him" },
    { type: GenderType.Woman, title: "👧 She/her" },
    { type: GenderType.Other, title: "Other" }
  ])

  const [greetings] = useState<TitleInterface[]>([
    { type: MeetGreetingType.Birthday, title: "🎉 Birthday" },
    { type: MeetGreetingType.Greeting, title: "💭 Question" },
    { type: MeetGreetingType.Questions, title: "👋 Greeting" }
  ])

  return (
    <>
      <div className="grid w-full grid-cols-1">
        <MeetStep index={index} text={""} title={"Select what your video greeting should be about"} required />
        <div className="grid w-full grid-cols-1 gap-40">
          <div className="grid w-full grid-cols-1 gap-24">
            <div className="grid grid-cols-1 items-center justify-start gap-10 md:grid-cols-3">
              {greetings.map((option: TitleInterface, key: number) => (
                <button
                  key={key}
                  className={`grid grid-cols-[1fr,auto] items-center justify-center gap-14 rounded-4 border-1 p-20 ${
                    greeting.type === option.type ? "border-grey-12 bg-white" : "border-transparent bg-grey-3"
                  }`}
                  onClick={() => handlerGreeting(option)}
                >
                  <div className="w-full text-left text-14 font-bold text-black">{option.title}</div>
                  <div className="flex w-30">
                    <Wrapper open={greeting.type === option.type}>
                      <IoMdCheckmark className="text-18 text-purple" />
                    </Wrapper>
                  </div>
                </button>
              ))}
            </div>
            <div className="grid w-full grid-cols-1 gap-12">
              <div className="text-14 text-grey-40">Desired pronoun</div>
              <div className="grid w-full grid-cols-1 sm:grid-cols-2">
                <DropdownLight handler={handlerPronoun} options={genders} title={pronoun.title} />
              </div>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 gap-12">
            <div className="text-14 text-grey-40">Request message (optional)</div>
            <div className="w-full rounded-4 bg-grey-3 p-16">
              <textarea
                className="h-[100px] resize-none text-14 font-bold text-black"
                id=""
                name="message"
                placeholder={"Request message"}
                value={message}
                onChange={(e) => handlerMessage(e.target.value)}
              ></textarea>
            </div>
            <DropzoneFiles
              content={UploadContentType.Pictures}
              files={files}
              handler={handlerFiles}
              handlerContent={null}
              multiple={false}
            />
          </div>
          <div className="grid w-full grid-cols-[auto,1fr] items-center gap-18 rounded-4 bg-purple-10 p-20">
            <AiFillInfoCircle className="text-20 text-purple" />
            <div className="w-full text-14 font-bold text-grey-40">
              To help the creator record the best video greeting for you make sure to{" "}
              <span className="text-black">describe your needs</span>.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MeetOrderStepInfo
