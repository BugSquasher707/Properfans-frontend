import { ReactComponent as ProperfansWhite } from "assets/img/properfans_white.svg"
import React, { useEffect, useRef, useState } from "react"
import { MdClose } from "react-icons/md"

const StoryWrapper = ({ children, title, handler }: { children: any; title: string; handler: any }) => {
  const ref = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState(300)

  useEffect(() => {
    window.addEventListener("resize", onResize)
  }, [])

  useEffect(() => {
    onResize()
  }, [ref])

  const onResize = () => {
    if (ref.current) {
      setWidth((ref.current.clientHeight / 16) * 9)
    }
  }

  return (
    <>
      <div className="light-r fixed top-0 left-0 z-50 !m-0 flex h-full w-full items-center justify-center bg-black p-0 sm:p-20 sm:pt-60 sm:pb-60">
        <div ref={ref} className="flex h-full w-full items-center justify-center">
          <div className="fixed top-0 left-0 bottom-0 w-full" onClick={() => handler(false)}></div>
          <button
            className="free fixed top-0 right-0 z-50 hidden h-40 w-40 items-center justify-center sm:flex lg:h-60 lg:w-60"
            onClick={() => handler(false)}
          >
            <MdClose className="text-24 text-white" />
          </button>
          <div
            className="scroll relative flex max-h-full max-w-full items-start overflow-auto sm:min-w-0"
            style={{ width: `${width}px` }}
          >
            {children}
          </div>
          <div className="absolute left-0 bottom-0 hidden w-full items-center justify-center gap-12 p-20 sm:flex">
            <div className="text-12 text-white-40">{title}</div>
            <ProperfansWhite className="h-24 w-[105px]" />
          </div>
        </div>
      </div>
    </>
  )
}

export default StoryWrapper
