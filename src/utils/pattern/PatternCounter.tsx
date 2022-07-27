import { TitleTextInterface } from "libs/interfaces"
import React from "react"

const PatternCounter = ({ data }: { data: TitleTextInterface }) => {
  return (
    <>
      <div className="relative w-full rounded-4 bg-purple px-14 pt-46 pb-14">
        <div className="pattern absolute top-0 left-0 h-full w-full bg-repeat opacity-5"></div>
        <div className="relative w-full">
          <div className="mb-40 flex w-full items-center justify-center space-x-[6px]">
            <div className="center hidden h-40 px-6 text-16 font-bold text-black">$</div>
            {data.text.split("").map((element: string, key: number) =>
              element !== "," ? (
                <div
                  key={key}
                  className="center flex h-40 w-34 rounded-4 bg-white text-14 font-bold text-black shadow-md"
                >
                  {element}
                </div>
              ) : (
                <div key={key} className="center -mx-2 h-40 text-14 font-bold text-black">
                  {element}
                </div>
              )
            )}
          </div>
          <div className="flex h-28 w-full items-center border-l-2 border-black pl-14 text-14 text-white">
            {data.title}
          </div>
        </div>
      </div>
    </>
  )
}

export default PatternCounter
