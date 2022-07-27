import React, { useState } from "react"
import "assets/styles/css/slickSlider.css"

const WikiUsage = () => {
  const [usage] = useState([
    "Video greetings",
    "Products",
    "Tipping",
    "Video calls",
    "Video greetings",
    "Subscriptions"
  ])

  return (
    <>
      <div className="relative w-full rounded-4 bg-purple p-20 md:p-30 lg:p-50 xl:p-100">
        <div className="pattern absolute top-0 left-0 h-full w-full bg-repeat opacity-5"></div>
        <div className="relative w-full">
          <div className="mb-16 w-full text-center text-14 text-white">Propercoins Usage</div>
          <div className="mb-30 w-full text-center text-32 font-black text-white lg:mb-50 xl:mb-80">
            Where can propercoins be used?
          </div>
          <div className="grid w-full grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-3 xl:gap-30">
            {usage.map((entry: string, key: number) => (
              <div key={key} className="w-full rounded-4 bg-white py-40 px-10 shadow-lg">
                <div className="w-full text-center text-14 font-bold text-purple">{entry}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default WikiUsage
