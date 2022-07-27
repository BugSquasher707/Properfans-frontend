import CreatorBrandPicker from "components/creator/wrapper/CreatorBrandPicker"
import CreatorSideMenu from "components/creator/wrapper/CreatorSideMenu"
import NavMenu from "components/nav/NavMenu"
import React from "react"

const CreatorSideLinks = () => {
  return (
    <>
      <div className="relative grid h-screen w-full max-w-full grid-cols-1 items-start overflow-y-auto bg-white py-20 lg:py-30 xl:bg-transparent 2xl:py-40">
        <div className="absolute top-0 bottom-0 right-0 border-r-1 border-grey-6 xl:top-40 xl:bottom-40"></div>
        <div className="grid w-full grid-cols-1 items-start gap-20 px-12 xs:px-20 sm:gap-30 2xl:gap-40 2xl:px-40">
          <div className="w-full">
            <NavMenu />
          </div>
          <div className="w-full">
            <CreatorBrandPicker />
          </div>
          <div className="w-full">
            <CreatorSideMenu />
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatorSideLinks
