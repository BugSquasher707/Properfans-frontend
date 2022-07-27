import Wrapper from "components/wrappers/Wrapper"
import React from "react"

const CreatorTitle = ({ title, right }: { title: string; right?: React.ReactNode }) => {
  return (
    <>
      <div
        className={`grid w-full items-center justify-between gap-12 text-14 font-bold text-black ${
          right ? "grid-cols-1 sm:grid-cols-[auto,1fr]" : "grid-cols-1"
        }`}
      >
        {title}
        <Wrapper open={right}>
          <div className="ml-auto w-full sm:w-auto">{right}</div>
        </Wrapper>
      </div>
      <div className="my-12 w-full border-b-1 border-grey-6 sm:my-16"></div>
    </>
  )
}

export default CreatorTitle
