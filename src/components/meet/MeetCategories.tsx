import MeetCategory from "components/meet/elements/MeetCategory"
import { MeetCreatorType } from "libs/enums"
import { MeetCreatorCategoryInterface } from "libs/interfaces"
import React, { useRef, useState } from "react"
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md"

const MeetCategories = ({ value, handler }: { value: MeetCreatorType; handler: any }) => {
  const ref = useRef<HTMLDivElement>(null)

  const [categories] = useState<MeetCreatorCategoryInterface[]>([
    { title: "All", type: MeetCreatorType.All },
    { title: "Actors", type: MeetCreatorType.Actors },
    { title: "Artists", type: MeetCreatorType.Artists },
    { title: "Athletes", type: MeetCreatorType.Athletes },
    { title: "Comedians", type: MeetCreatorType.Comedians },
    { title: "Influencers", type: MeetCreatorType.Influencers },
    { title: "Musicians", type: MeetCreatorType.Musicians },
    { title: "Politicians", type: MeetCreatorType.Politicians },
    { title: "Streamers", type: MeetCreatorType.Streamers },
    { title: "Tiktokers", type: MeetCreatorType.Tiktokers },
    { title: "Youtubers", type: MeetCreatorType.Youtubers }
  ])

  const scrollLeft = () => {
    if (ref.current) {
      ref.current.scrollLeft = 0
    }
  }

  const scrollSlide = (num: number) => {
    if (ref.current) {
      ref.current.scrollLeft += num
    }
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-[auto,1fr,auto]">
        <button
          className="hidden h-40 w-40 items-center justify-center rounded-full hover:bg-grey-6 sm:flex"
          onClick={() => scrollSlide(-200)}
        >
          <MdKeyboardArrowLeft className="text-20 text-grey-20" />
        </button>
        <div className="relative h-40 w-full rounded-20">
          <div ref={ref} className="absolute top-0 left-0 w-full overflow-x-scroll rounded-20">
            <div className="flex w-max items-center space-x-[6px]">
              {categories
                .filter((category: MeetCreatorCategoryInterface) => category.type === value)
                .map((category: MeetCreatorCategoryInterface, key: number) => (
                  <div
                    key={key}
                    className="flex"
                    onClick={() => {
                      scrollLeft()
                      handler(MeetCreatorType.All)
                    }}
                  >
                    <MeetCategory key={key} category={category} active />
                  </div>
                ))}
              {categories
                .filter((category: MeetCreatorCategoryInterface) => category.type !== value)
                .map((category: MeetCreatorCategoryInterface, key: number) => (
                  <div
                    key={key}
                    className="flex"
                    onClick={() => {
                      scrollLeft()
                      handler(category.type)
                    }}
                  >
                    <MeetCategory active={false} category={category} />
                  </div>
                ))}
            </div>
          </div>
        </div>
        <button
          className="hidden h-40 w-40 items-center justify-center rounded-full hover:bg-grey-6 sm:flex"
          onClick={() => scrollSlide(200)}
        >
          <MdKeyboardArrowRight className="text-20 text-grey-20" />
        </button>
      </div>
    </>
  )
}

export default MeetCategories
