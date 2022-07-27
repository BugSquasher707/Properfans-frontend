import { onMeetPurposesContent, onMeetPurposesTitle } from "api/integration/meet"
import MeetStep from "components/meet/elements/MeetStep"
import { MeetPurposesInterface } from "libs/interfaces"
import React from "react"
import NumberFormat from "react-number-format"
import CheckListDot from "utils/lists/CheckListDot"

const MeetOrderStepPurposes = ({
  index,
  purposes,
  handlerPurposes
}: {
  index: number
  purposes: MeetPurposesInterface[]
  handlerPurposes: any
}) => {
  const onToggle = (key: number) => {
    const items = [...purposes]
    const item = { ...items[key] }

    item.selected = !item.selected
    items[key] = item

    handlerPurposes(items)
  }

  return (
    <>
      <div className="grid w-full grid-cols-1">
        <MeetStep
          index={index}
          required={false}
          text={"Do you plan to use the video greeting for marketing or commercial purposes?"}
          title={"Commercial purposes"}
        />
        <div className="grid grid-cols-1 items-center justify-start gap-10">
          {purposes.map((purpose: MeetPurposesInterface, key: number) => (
            <button
              key={key}
              className={`grid w-full grid-cols-[auto,1fr,auto] items-center justify-center gap-14 rounded-4 border-1 p-20 ${
                purpose.selected ? "border-grey-12 bg-white" : "border-transparent bg-grey-3"
              }`}
              onClick={() => onToggle(key)}
            >
              <CheckListDot active={purpose.selected} />
              <div className="grid w-full grid-cols-1 gap-14">
                <div className="w-full text-left text-14 font-bold text-black">{onMeetPurposesTitle(purpose.type)}</div>
                <div className="flex w-full flex-wrap items-start justify-start gap-4 text-14 font-bold text-grey-40">
                  {onMeetPurposesContent(purpose.type)}
                </div>
              </div>
              <div className="flex">
                <NumberFormat
                  className="text-14 font-bold text-purple"
                  displayType={"text"}
                  prefix={"+ $"}
                  value={purpose.price}
                  thousandSeparator
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </>
  )
}

export default MeetOrderStepPurposes
