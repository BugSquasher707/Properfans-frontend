import Wrapper from "components/wrappers/Wrapper"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { MdFullscreen } from "react-icons/md"

const VideoStream = ({ stream, clean, audio }: { stream: MediaStream; clean?: boolean; audio?: boolean }) => {
  const ref = useRef<HTMLDivElement>(null)
  const player = useRef<HTMLVideoElement>(null)

  const [dimensions, setDimensions] = useState([0, 0])

  const [width, setWidth] = useState("100%")
  const [height, setHeight] = useState("0px")

  const [fullscreen, setFullscreen] = useState(false)

  useEffect(() => {
    if (player.current && stream) {
      player.current.srcObject = stream
    }
  }, [stream])

  useEffect(() => {
    setSize()
    document.addEventListener("keydown", (e) => escFunction(e), false)
  }, [])

  useEffect(() => {
    setSize()
  }, [fullscreen, dimensions, width, height])

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize)
    updateSize()
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  const escFunction = (e: any) => {
    if (e.keyCode === 27) {
      setFullscreen(false)
    }
  }

  const updateSize = () => {
    setDimensions([window.innerWidth, window.innerHeight])
  }

  const setSize = () => {
    if (ref.current) {
      const heightMax = dimensions[1] - 100
      const wide = dimensions[0] * 9 > heightMax * 16

      const heightNormal = (ref.current.clientWidth * 9) / 16

      const heightFullscreen = wide ? heightMax : (ref.current.clientWidth / 16) * 9
      const widthFullscreen = wide ? (ref.current?.clientHeight / 9) * 16 : dimensions[0]

      setHeight(`${fullscreen ? heightFullscreen : heightNormal}px`)
      setWidth(fullscreen ? `${widthFullscreen}px` : "100%")
    }
  }

  return (
    <>
      <div
        className={`light-r ${
          fullscreen
            ? "fixed top-0 left-0 z-50 flex h-screen w-screen items-center justify-center bg-black py-50"
            : "h-full w-full"
        }`}
      >
        <div
          ref={ref}
          className="light-r relative overflow-hidden rounded-4 bg-black"
          style={{ width: width, height: audio ? "50px" : height }}
        >
          <video ref={player} height={height} width={width} autoPlay />
          <Wrapper open={!clean}>
            <div
              className={`absolute left-0 bottom-0 z-20 h-full w-full ${audio ? "" : "opacity-0 hover:opacity-100"}`}
            >
              <div
                className={`absolute left-0 bottom-0 h-80 w-full bg-gradient-to-t from-grey-40 to-transparent ${
                  audio ? "hidden" : ""
                }`}
              ></div>
              <div className="absolute left-0 bottom-0 flex h-50 w-full items-center justify-end space-x-[10px] p-10">
                <Wrapper open={!audio}>
                  <button
                    className="group flex h-30 w-30 items-center justify-center rounded-4 hover:bg-white-10"
                    onClick={() => setFullscreen(!fullscreen)}
                  >
                    <MdFullscreen className="text-24 text-white group-hover:text-purple" />
                  </button>
                </Wrapper>
              </div>
            </div>
          </Wrapper>
        </div>
        <Wrapper open={fullscreen}>
          <button
            className="absolute bottom-0 left-0 flex h-50 w-full items-center justify-center gap-10 p-20"
            onClick={() => setFullscreen(false)}
          >
            <div className="text-white-40">Press</div>
            <div className="flex h-24 items-center rounded-4 bg-white-10 px-8 text-14 font-bold text-white">ESC</div>
            <div className="text-white-40">to exit fullscreen mode</div>
          </button>
        </Wrapper>
      </div>
    </>
  )
}

export default VideoStream
