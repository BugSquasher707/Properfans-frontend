import FanTagTile from "components/discover/FanTagTile"
import { FanDiscoverTagInterface } from "libs/interfaces"
import React, { useEffect, useRef, useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const FanTagSection = ({ handles }: { handles: FanDiscoverTagInterface[] }) => {
  const ref = useRef<HTMLDivElement>(null)
  const [visibleNext, setVisibleNext] = useState(false)
  const [visiblePrev, setVisiblePrev] = useState(false)

  const scrollSlide = (num: number) => {
    if (ref.current) {
      ref.current.scrollLeft += num
      setVisibleNext(ref.current.scrollWidth > ref.current.scrollLeft + ref.current.clientWidth)
      setVisiblePrev(ref.current.scrollLeft > 0)
    }
  }

  useEffect(() => {
    if (!ref.current) {
      return
    }
    setVisibleNext(ref.current.scrollWidth > ref.current.scrollLeft + ref.current.clientWidth)
    setVisiblePrev(ref.current.scrollLeft > 0)
  }, [ref])

  return (
    <div>
      <h2 className="mt-0 mb-4 text-24 font-black text-black">Tags</h2>
      <p className="font-14 mt-0 mb-30 text-grey-40">Trending hashtags at the moment</p>
      <div className="relative mb-50 h-[68px] w-full">
        {visiblePrev && (
          <>
            <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-[108px] bg-gradient-to-l from-transparent to-white"></div>
            <button
              className="absolute left-0 top-20 z-30 flex h-28 w-28 items-center justify-center rounded-full border-2 border-grey-12 bg-white"
              onClick={() => scrollSlide(-80)}
            >
              <MdKeyboardArrowLeft className="text-20 text-grey-20" />
            </button>
          </>
        )}
        <div className="relative h-full w-full rounded-20">
          <div ref={ref} className="absolute top-0 left-0 h-full w-full overflow-x-scroll">
            <div className="flex w-max items-center space-x-18">
              {handles.map((handle, key) => (
                <FanTagTile key={key} handle={handle} />
              ))}
            </div>
          </div>
        </div>
        {visibleNext && (
          <>
            <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-[108px] bg-gradient-to-r from-transparent to-white"></div>
            <button
              className="absolute right-0 top-20 z-30 flex h-28 w-28 items-center justify-center rounded-full border-2 border-grey-12 bg-white"
              onClick={() => scrollSlide(80)}
            >
              <MdKeyboardArrowRight className="text-20 text-grey-20" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default FanTagSection
