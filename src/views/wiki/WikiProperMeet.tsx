import MeetCreators from "components/wiki/meet/MeetCreators"
import { URL } from "libs/constants"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

import mockup from "../../assets/img/meet/mockup.png"
import NavWiki from "../../components/nav/NavWiki"

const WikiProperCoins = () => {
  return (
    <>
      <NavWiki />
      <div className="light-r hero-meet min-h-screen z-0 flex w-full flex-wrap pt-120 pb-60">
        <div className=" p-side flex w-full justify-center">
          <div className="relative grid w-full max-w-screen-xl grid-cols-[2fr,1fr] gap-40 lg:gap-60">
            <div className="flex w-full flex-col justify-center gap-20">
              <div className="w-full text-6xl font-extrabold text-white">
                Meet your <span className="text-pink">favourite creators</span>
              </div>
              <div className="w-full text-16 text-white lg:w-[75%]">
                A small in-built properfans solution, where fans can purchase exclusive calls and video greetings from
                top properfans creators.
              </div>
              <div className="mt-16 max-w-[180px]">
                <ButtonPurple action={URL.HOME} title={"Explore"} />
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <img alt="" src={mockup} />
            </div>
          </div>
        </div>
      </div>
      <div className="light-r p-side page mt-0 flex w-full justify-center bg-white pt-120 dark:bg-black">
        <div className="flex w-full max-w-screen-xl flex-wrap items-center gap-80 md:gap-100 lg:gap-180">
          <MeetCreators />
        </div>
      </div>
    </>
  )
}

export default WikiProperCoins
