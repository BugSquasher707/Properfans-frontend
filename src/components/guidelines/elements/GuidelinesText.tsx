import React from "react"

const GuidelinesText = ({ text }: { text: JSX.Element }) => {
  return (
    <>
      <div className="mb-20 w-full text-14 leading-[18px] text-grey-40 md:mb-40">{text}</div>
    </>
  )
}

export default GuidelinesText
