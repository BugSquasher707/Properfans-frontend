import { SubscriptionSlideType } from "libs/enums"
import React from "react"
import ButtonNext from "utils/buttons/setup/ButtonNext"
import ButtonPrevious from "utils/buttons/setup/ButtonPrevious"

const SubscribeButtons = ({ type, handlers }: { type: SubscriptionSlideType; handlers: any }) => {
  return (
    <>
      {
        {
          [SubscriptionSlideType.Tier]: (
            <>
              <ButtonPrevious allowed={false} handler={{}} />
              <ButtonNext handler={handlers.stepUp} title="Next" />
            </>
          ),
          [SubscriptionSlideType.Payment]: (
            <>
              <ButtonPrevious allowed={true} handler={handlers.stepDown} />
              <ButtonNext handler={handlers.onPayment} title="Next" />
            </>
          ),
          [SubscriptionSlideType.Completed]: ""
        }[type]
      }
    </>
  )
}

export default SubscribeButtons
