import React from "react"

const GuidelinesImportant = ({ text }: { text: JSX.Element }) => {
  return (
    <>
      <div className="mb-20 w-full text-14 text-grey-40">
        <span className="font-bold text-black">Important:</span> {text}
      </div>
    </>
  )
}

export default GuidelinesImportant
