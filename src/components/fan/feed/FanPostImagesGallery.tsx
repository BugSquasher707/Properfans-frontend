import Wrapper from "components/wrappers/Wrapper"
import React, { useEffect, useState } from "react"
import { AiFillCaretLeft, AiFillCaretRight, AiOutlineLoading3Quarters } from "react-icons/ai"
import { IoMdCloseCircle } from "react-icons/io"
import { useSwipeable } from "react-swipeable"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch"

const FanPostImagesGallery = ({ images, index, handler }: { images: string[]; index: number; handler: any }) => {
  const [active, setActive] = useState(index)
  const [toggling, setToggling] = useState(false)

  useEffect(() => {
    document.addEventListener("keyup", (e) => onKey(e, active), false)

    return () => {
      document.removeEventListener("keyup", (e) => onKey(e, active), false)
    }
  }, [active])

  useEffect(() => {
    if (active < 0) {
      setActive(images.length - 1)
    } else if (active >= images.length) {
      setActive(0)
    }

    setToggling(true)
  }, [active])

  useEffect(() => {
    setToggling(false)
  }, [toggling])

  const swipeable = useSwipeable({
    onSwipedLeft: () => {
      setActive(active + 1)
    },
    onSwipedRight: () => {
      setActive(active - 1)
    }
  })

  const onKey = (e: any, index: number) => {
    if (e.keyCode === 27) {
      onClose()
    } else if (e.keyCode === 37 || e.keyCode === 40) {
      setActive(index - 1)
    } else if (e.keyCode === 38 || e.keyCode === 39) {
      setActive(index + 1)
    }
  }

  const onClose = () => {
    handler(-1)
  }

  return (
    <>
      <Wrapper open={index >= 0}>
        <div
          {...swipeable}
          className="light-r fixed top-0 left-0 bottom-0 z-50 h-screen w-screen min-w-[300px] bg-black px-20 pb-50 pt-50"
        >
          <button
            className="absolute top-10 right-10 flex h-30 w-30 items-center justify-center rounded-4 hover:bg-white-10"
            onClick={() => onClose()}
          >
            <IoMdCloseCircle className="text-20 text-white" />
          </button>
          <div className="flex h-full w-full items-center justify-center">
            <div className="fixed top-0 left-0 h-full w-full cursor-pointer" onClick={() => onClose()}></div>
            {!toggling && images[active] ? (
              <TransformWrapper>
                <TransformComponent>
                  <img
                    alt=""
                    className="relative z-50 max-h-full w-full max-w-full rounded-10 rounded-4 border-1 border-grey-12 object-contain"
                    src={images[active]}
                  />
                </TransformComponent>
              </TransformWrapper>
            ) : (
              <AiOutlineLoading3Quarters className="animate-spin text-20 text-purple" />
            )}
          </div>
          <div className="absolute bottom-0 left-0 flex h-50 w-full items-center justify-center space-x-[10px] p-20">
            <div className="text-12 text-white-40 xs:text-14 sm:text-16">
              Image {active + 1}/{images.length}, use
            </div>
            <button
              className="flex h-24 items-center rounded-4 bg-white-10 px-8 text-14 font-bold text-white"
              onClick={() => setActive(active - 1)}
            >
              <AiFillCaretLeft />
            </button>
            <button
              className="flex h-24 items-center rounded-4 bg-white-10 px-8 text-14 font-bold text-white"
              onClick={() => setActive(active + 1)}
            >
              <AiFillCaretRight />
            </button>
            <div className="text-12 text-white-40 xs:text-14 sm:text-16">and</div>
            <button
              className="flex h-24 items-center rounded-4 bg-white-10 px-8 text-14 font-bold text-white"
              onClick={() => onClose()}
            >
              ESC
            </button>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default FanPostImagesGallery
