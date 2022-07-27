import React from "react"
import { IoMdClose } from "react-icons/io"

const ModalClose = ({ handler }: { handler: any }) => {
  return (
    <>
      <button
        className="group flex h-30 w-30 items-center justify-center rounded-full border-1 border-grey-6 bg-grey-3 hover:bg-grey-20"
        onClick={() => handler(false)}
      >
        <IoMdClose className="text-grey-20 group-hover:text-black" />
      </button>
    </>
  )
}

export default ModalClose
