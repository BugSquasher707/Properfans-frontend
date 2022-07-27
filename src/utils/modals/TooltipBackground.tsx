import React from "react"

const TooltipBackground = ({ handler, grad }: { handler: any; grad?: boolean }) => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 z-30 h-screen w-screen cursor-pointer lg:cursor-auto lg:bg-transparent ${
          grad ? "bg-gradient-to-t from-grey-40 to-transparent" : "bg-grey-40"
        }`}
        onClick={() => handler(false)}
      ></div>
    </>
  )
}

export default TooltipBackground
