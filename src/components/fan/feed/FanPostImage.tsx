import Wrapper from "components/wrappers/Wrapper"
import React, { useRef, useState } from "react"
import { IoMdCloseCircle, IoMdExpand } from "react-icons/io"
import { MdImage, MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const FanPostImage = ({
  image,
  w,
  h,
  end,
  upload,
  index,
  handlerDelete,
  handlerActive,
  handlerMove
}: {
  image: string
  w: number
  h: number
  end?: number
  upload?: boolean
  index: number
  handlerDelete?: any
  handlerActive: any
  handlerMove?: any
}) => {
  const ref = useRef<HTMLImageElement>(null)

  const [wide, setWide] = useState(false)

  const onLoad = () => {
    if (ref.current) {
      setWide(ref.current.naturalWidth * h > ref.current.naturalHeight * w)
    }
  }

  return (
    <>
      <div className="group absolute top-0 bottom-0 w-full cursor-pointer overflow-hidden rounded-4">
        <div className="relative h-full bg-grey-3" onClick={() => (upload ? null : handlerActive(index))}>
          {!image ? (
            <div
              className={`absolute top-[50%] left-[50%] !max-w-none translate-x-[-50%] translate-y-[-50%] transform ${
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
              className={`absolute top-[50%] left-[50%] min-h-full min-w-full translate-x-[-50%] translate-y-[-50%] transform ${
                wide ? "h-full" : "w-full"
              }`}
              alt=""
              src={image}
              onLoad={() => onLoad()}
            />
          )}
        </div>
        {upload && handlerDelete ? (
          <div className="absolute top-0 left-0 hidden h-full w-full items-start bg-grey-40 p-10 group-hover:flex">
            <div className="flex w-full items-center justify-between">
              <div className="flex items-center space-x-[4px]">
                <button
                  className="flex h-30 w-30 items-center justify-center rounded-4 hover:bg-white-10"
                  onClick={() => handlerActive(index)}
                >
                  <IoMdExpand className="text-20 text-white" />
                </button>
                <Wrapper open={index > 0}>
                  <button
                    className="flex h-30 w-30 items-center justify-center rounded-4 hover:bg-white-10"
                    onClick={() => handlerMove(index, -1)}
                  >
                    <MdKeyboardArrowLeft className="text-20 text-white" />
                  </button>
                </Wrapper>
                <Wrapper open={end && end > 0 && index !== end}>
                  <button
                    className="flex h-30 w-30 items-center justify-center rounded-4 hover:bg-white-10"
                    onClick={() => handlerMove(index, 1)}
                  >
                    <MdKeyboardArrowRight className="text-20 text-white" />
                  </button>
                </Wrapper>
              </div>
              <div className="flex items-center space-x-[4px]">
                <button
                  className="flex h-30 w-30 items-center justify-center rounded-4 hover:bg-white-10"
                  onClick={() => (upload && handlerDelete ? handlerDelete(index) : null)}
                >
                  <IoMdCloseCircle className="text-20 text-white" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default FanPostImage
