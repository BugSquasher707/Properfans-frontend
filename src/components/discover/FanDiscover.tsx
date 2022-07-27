import { getContentCategories } from "api/endpoints/fanDiscover"
import FanDiscoverTile from "components/discover/FanDiscoverTile"
import { useProps } from "contexts/PropsContext"
import { FanDiscoverCategoryInterface } from "libs/interfaces"
import React, { useEffect, useRef, useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const FanDiscoverSection = ({ value, handler }: { value: any; handler: any }) => {
  const { token } = useProps()

  const ref = useRef<HTMLDivElement>(null)
  const [visibleNext, setVisibleNext] = useState(false)
  const [visiblePrev, setVisiblePrev] = useState(false)

  const [categories, setcategories] = useState<FanDiscoverCategoryInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = async () => {
    const result = await getContentCategories(token)
    if (result.data) {
      setcategories(result.data)
      handler(result.data[0].category)
    }
  }

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
      <h2 className="mt-0 mb-4 text-24 font-black text-black">Discover</h2>
      <p className="font-14 mt-0 mb-30 text-grey-40">Follow categories you&apos;re interested in</p>
      <div className="relative mb-50 h-[108px] w-full">
        {visiblePrev && (
          <>
            <div className="pointer-events-none absolute top-0 left-0 z-20 h-full w-[108px] bg-gradient-to-l from-transparent to-white"></div>
            <button
              className="absolute left-0 top-40 z-30 flex h-28 w-28 items-center justify-center rounded-full border-2 border-grey-12 bg-white"
              onClick={() => scrollSlide(-102)}
            >
              <MdKeyboardArrowLeft className="text-20 text-grey-20" />
            </button>
          </>
        )}
        <div className="relative w-full rounded-20">
          <div ref={ref} className="absolute top-0 left-0 w-full overflow-x-scroll">
            <div className="flex w-max items-center space-x-18">
              {categories.map((category: FanDiscoverCategoryInterface, key: number) => (
                <div key={key} onClick={() => handler(category.category)}>
                  <FanDiscoverTile key={key} active={value === category.category} category={category} />
                </div>
              ))}
            </div>
          </div>
        </div>
        {visibleNext && (
          <>
            <div className="pointer-events-none absolute top-0 right-0 z-20 h-full w-[108px] bg-gradient-to-r from-transparent to-white"></div>
            <button
              className="absolute right-0 top-40 z-30 flex h-28 w-28 items-center justify-center rounded-full border-2 border-grey-12 bg-white"
              onClick={() => scrollSlide(102)}
            >
              <MdKeyboardArrowRight className="text-20 text-grey-20" />
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default FanDiscoverSection
