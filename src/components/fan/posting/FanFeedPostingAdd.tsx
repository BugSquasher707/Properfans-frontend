import { URL } from "libs/constants"
import React from "react"
import ButtonWhite from "utils/buttons/colors/ButtonWhite"

const FanFeedPostingAdd = () => {
  return (
    <>
      <div className="w-full rounded-4 bg-gradient-to-r from-purple to-green p-20">
        <div className="mb-10 w-full text-center text-18 font-bold text-white sm:text-22">
          Create a club to start posting!
        </div>
        <div className="flex w-full justify-center">
          <div className="w-[312px] max-w-full">
            <div className="mb-20 w-full text-center text-14 font-semibold text-white-40">
              Once you create your club, you&apos;ll be able to start creating content and have properfans{" "}
              <span className="font-normal">💜</span>
            </div>
            <ButtonWhite action={URL.CREATOR.CLUB.ADD} title={"Create your club"} full />
          </div>
        </div>
      </div>
    </>
  )
}

export default FanFeedPostingAdd
