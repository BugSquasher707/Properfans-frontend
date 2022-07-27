import React from "react"
import { MdError } from "react-icons/md"

const GuidelinesWarning = ({ text }: { text: JSX.Element }) => {
  return (
    <>
      <div className="mb-20 grid w-full grid-cols-[auto,1fr] items-center gap-20 rounded-4 bg-red-10 p-20 md:mb-40">
        <MdError className="text-24 text-red" />
        <div className="w-full text-14 text-red">{text}</div>
      </div>
    </>
  )
}

export default GuidelinesWarning
