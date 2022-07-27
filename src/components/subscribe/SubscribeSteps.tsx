import SubscribeStepItem from "components/subscribe/SubscribeStepItem"
import React from "react"

const SubscribeSteps = ({ count, step, handler }: { count: number; step: number; handler: any }) => {
  return (
    <>
      <div className="grid w-full grid-cols-3 gap-8">
        {[...Array(count)].map((e, key) => (
          <SubscribeStepItem key={key} handler={handler} index={key + 1} step={step} />
        ))}
      </div>
    </>
  )
}

export default SubscribeSteps
