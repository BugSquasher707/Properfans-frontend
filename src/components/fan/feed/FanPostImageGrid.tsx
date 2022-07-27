import React, { useRef, useState } from "react"
import { MdImage } from "react-icons/md"
import { VscLoading } from "react-icons/vsc"

const FanPostImageGrid = ({
  image,
  w,
  h,
  plus,
  index,
  handlerImage
}: {
  image: string
  w?: number
  h?: number
  plus?: number
  index: number
  handlerImage: any
}) => {
  const ref = useRef<HTMLImageElement>(null)

  const [wide, setWide] = useState(false)
  const [locked] = useState(w && h ? true : false)

  const onLoad = () => {
    if (ref.current && w && h) {
      setWide(ref.current.naturalWidth * h > ref.current.naturalHeight * w)
    } else {
      setWide(false)
    }
  }

  return (
    <>
      <div
        className={`group w-full cursor-pointer overflow-hidden rounded-4 ${locked ? "absolute top-0 bottom-0" : ""}`}
      >
        <div
          className={`relative flex w-full items-start bg-grey-3 ${locked ? "h-full" : "min-h-[100px]"}`}
          onClick={() => handlerImage(index)}
        >
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transform">
            <VscLoading className="animate-spin text-24 text-purple-40" />
          </div>
          {!image ? (
            <div
              className={`absolute top-[50%] left-[50%] z-10 !max-w-none translate-x-[-50%] translate-y-[-50%] transform ${
                wide ? "h-full" : ""
              }`}
            >
              <div className="flex w-full items-center justify-center">
                <MdImage className="text-20 text-grey-40" />
              </div>
            </div>
          ) : (
            <img
              ref={ref}
              className={`rounded-4 ${
                locked
                  ? `absolute top-[50%] left-[50%] min-h-full min-w-full translate-x-[-50%] translate-y-[-50%] transform object-cover`
                  : "relative object-contain"
              } ${wide ? "h-full" : "w-full"}`}
              alt=""
              src={image}
              onLoad={() => onLoad()}
            />
          )}
          {plus && plus > 1 ? (
            <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center bg-grey-40 p-12 text-16 font-bold text-white">
              +{Math.abs(plus)}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  )
}

export default FanPostImageGrid
