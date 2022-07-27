import React from "react"

const SubscribeStepItem = ({ index, step, handler }: { index: number; step: number; handler: any }) => {
  return (
    <>
      <button className="grid w-full grid-cols-1 gap-16" onClick={() => (index < step ? handler(step) : null)}>
        <div className={`w-full text-center text-14 text-white ${index === step ? "font-bold" : "opacity-40"}`}>
          Step {index}
        </div>
        <div className={`h-3 w-full rounded-4 ${index <= step ? "bg-white" : "bg-grey-20"}`}></div>
      </button>
    </>
  )
}

export default SubscribeStepItem
