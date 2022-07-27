import SetupStepItem from "components/setup/SetupStepItem"
import React from "react"

const SetupSteps = ({ count, step }: { count: number; step: number }) => {
  return (
    <>
      <div className="grid w-full grid-cols-2 flex-wrap gap-12 md:grid-cols-3 lg:grid-cols-1 lg:gap-6">
        {[...Array(count)].map((e, key) => (
          <SetupStepItem key={key} index={key + 1} last={key + 1 !== count} step={step} />
        ))}
      </div>
    </>
  )
}

export default SetupSteps
