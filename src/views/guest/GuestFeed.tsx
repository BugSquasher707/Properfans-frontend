import FanFeatured from "components/fan/FanFeatured"
import FanFeedContent from "components/fan/FanFeedContent"
import FanStories from "components/fan/FanStories"
import GuestBox from "components/guest/GuestBox"
import WrapperGuest from "components/wrappers/WrapperGuest"
import React from "react"

const GuestFeed = () => {
  return (
    <>
      <WrapperGuest>
        <div className="relative grid w-full grid-cols-1 items-start gap-20 md:gap-40 lg:grid-cols-[auto,1fr]">
          <div className="stick w-[240px] items-start lg:flex">
            <GuestBox />
          </div>
          <div className="w-full">
            <div className="relative grid w-full grid-cols-1 items-start gap-20 md:gap-40 xl:grid-cols-[1fr,auto]">
              <div className="grid w-full grid-cols-1 gap-10 sm:gap-20">
                <FanStories />
                <FanFeedContent />
              </div>
              <div className="stick hidden w-full xl:flex xl:w-[240px]">
                <FanFeatured />
              </div>
            </div>
          </div>
        </div>
      </WrapperGuest>
    </>
  )
}

export default GuestFeed
