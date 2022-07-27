import { parseTier } from "api/integration/functions"
import { ProperPayType } from "libs/enums"
import { ProperPayInterface, TierInterface } from "libs/interfaces"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const ModalProperPaySummary = ({
  slide,
  tier,
  method,
  handlers
}: {
  slide: ProperPayInterface
  tier: TierInterface
  method: string
  handlers: any
}) => {
  return (
    <>
      <div className="w-full">
        <div className="mb-20 w-full text-14 text-grey-40 sm:mb-26">Summary</div>
        <div className="mb-20 grid w-full grid-cols-1 gap-16 sm:mb-40 md:mb-60">
          <div className="flex w-full items-center justify-between">
            <div className="text-14 text-grey-40">Order</div>
            <div className="text-14 font-bold text-black">1x Tier {parseTier(tier.tierLevel)} Subscription</div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="text-14 text-grey-40">Method</div>
            <div className="text-14 font-bold text-black">{method}</div>
          </div>
          <div className="flex w-full items-center justify-between">
            <div className="text-14 text-grey-40">Service fees</div>
            <div className="text-14 font-bold text-black">$0.00</div>
          </div>
        </div>
        <div className="mb-20 w-full border-b-1 border-dashed border-grey-10 sm:mb-26"></div>
        <div className="mb-20 flex w-full items-center justify-between sm:mb-40">
          <div className="text-14 font-bold text-black">Total</div>
          <div className="text-14 font-bold text-purple">FREE</div>
        </div>
        {
          {
            [ProperPayType.Select]: (
              <>
                <div className="mb-10 w-full">
                  <ButtonPurple action={handlers.stepUp} title={"Continue"} full />
                </div>
                <button
                  className="flex h-42 w-full items-center justify-center text-14 font-bold text-grey-40 hover:text-black"
                  onClick={() => handlers.handler()}
                >
                  Cancel
                </button>
              </>
            ),
            [ProperPayType.Tasks]: (
              <>
                <div className="mb-10 w-full">
                  <ButtonPurple action={() => null} title={"Waiting for Tasks"} full />
                </div>
                <button
                  className="flex h-42 w-full items-center justify-center text-14 font-bold text-grey-40 hover:text-black"
                  onClick={() => handlers.stepDown()}
                >
                  Back
                </button>
              </>
            ),
            [ProperPayType.Payment]: ""
          }[slide.type]
        }
      </div>
    </>
  )
}

export default ModalProperPaySummary
