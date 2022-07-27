import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { EGX, URL_EGX } from "ellingsenx/libs/constants"
import React, { useEffect, useRef, useState } from "react"
import { AiOutlineLoading } from "react-icons/ai"

const EgxLogin = ({ children }: { children: any }) => {
  const iframe = useRef<HTMLIFrameElement>(null)

  const { setTokenRefresh } = useProps()

  const [externalPopup, setExternalPopup] = useState<Window | null>()

  const [open, setOpen] = useState(false)

  const [width] = useState(300)
  const [height, setHeight] = useState(174)

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)

    function receiveMessage(event: any) {
      if (typeof event.data === "string" && event.data.length === 80) {
        if (!mounted && externalPopup) {
          setExternalPopup(null)
          return
        }

        if (event.origin !== EGX) {
          return
        }

        if (event.data) {
          setTokenRefresh(event.data)
        }
      } else if (typeof event.data === "number") {
        setHeight(event.data)
      }
    }

    window.addEventListener("message", receiveMessage, false)

    return () => {
      setMounted(false)

      window.removeEventListener("message", receiveMessage, false)
    }
  }, [])

  return (
    <>
      <div className="w-full" onClick={() => setOpen(true)}>
        {children}
      </div>
      <Wrapper open={open}>
        <div className="fixed top-0 left-0 right-0 bottom-0 z-[99999] p-0 sm:p-20">
          <div
            className="absolute top-0 left-0 h-full w-full backdrop-blur-sm backdrop-filter"
            onClick={() => setOpen(false)}
          ></div>
          <div className="relative z-10 rounded-12 bg-black" style={{ width: `${width}px`, height: `${height}px` }}>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform">
              <AiOutlineLoading className="animate-spin text-24 text-white" />
            </div>
            <iframe
              ref={iframe}
              className="relative !z-10 !block w-full overflow-hidden rounded-10"
              frameBorder="0"
              src={URL_EGX.CONNECT}
              style={{ width: `${width}px`, height: `${height}px` }}
            ></iframe>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default EgxLogin
