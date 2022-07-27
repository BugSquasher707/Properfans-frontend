import { onMeetDeliveryContent } from "api/integration/meet"
import MeetStep from "components/meet/elements/MeetStep"
import { MeetDeliveryType } from "libs/enums"
import { MeetDeliveryInterface } from "libs/interfaces"
import React from "react"
import NumberFormat from "react-number-format"
import CheckListDot from "utils/lists/CheckListDot"

const MeetOrderStepDelivery = ({
  index,
  delivery,
  handlerDelivery,
  deliveries
}: {
  index: number
  delivery: MeetDeliveryType
  handlerDelivery: any
  deliveries: MeetDeliveryInterface[]
}) => {
  return (
    <>
      <div className="grid w-full grid-cols-1">
        <MeetStep
          index={index}
          required={false}
          text={"Do you plan to use the video greeting for marketing or commercial purposes?"}
          title={"Commercial purposes (optional)"}
        />
        <div className="grid grid-cols-1 items-center justify-start gap-10 md:grid-cols-2">
          {deliveries.map((del: MeetDeliveryInterface, key: number) => (
            <button
              key={key}
              className={`grid w-full grid-cols-[auto,1fr,auto] items-center justify-center gap-14 rounded-4 border-1 p-20 ${
                del.type === delivery ? "border-grey-12 bg-white" : "border-transparent bg-grey-3"
              }`}
              onClick={() => handlerDelivery(del.type)}
            >
              <CheckListDot active={del.type === delivery} />
              <div className="flex w-full flex-wrap items-start justify-start gap-4 text-14 font-bold text-black">
                {onMeetDeliveryContent(del.type)}
              </div>
              <div className="flex">
                <NumberFormat
                  className="text-14 font-bold text-purple"
                  displayType={"text"}
                  prefix={"+ $"}
                  value={del.price}
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

export default MeetOrderStepDelivery
