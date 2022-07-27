import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import React from "react"
import NumberFormat from "react-number-format"

const FanPostSideTooltip = ({ totalMoney, totalPropercoins }: { totalMoney: number; totalPropercoins: number }) => {
  return (
    <>
      <div className="absolute top-0 left-0 z-20 h-full w-full cursor-pointer"></div>
      <div className="absolute right-2 top-46 z-20 hidden w-[180px] group-hover:flex">
        <div className="absolute top-0 right-6 h-14 w-14 translate-y-[-50%] rotate-[45deg] transform rounded-1 border-l-1 border-t-1 border-grey-12 bg-white dark:border-black-14 dark:bg-black-14"></div>
        <div className="w-full rounded-4 border-1 border-grey-12 bg-white p-14 shadow-md dark:border-black-14 dark:bg-black-14 dark:shadow-none">
          <div className="mb-10 w-full text-12 font-bold text-black">Tipped by</div>
          <div className="grid w-full grid-cols-1 gap-10">
            <div className="grid w-full grid-cols-[auto,1fr] gap-10">
              <div className="mt-2 h-10 w-10 rounded-full bg-purple"></div>
              <div className="grid w-full grid-cols-1 gap-2">
                <div className="mb-4 w-full text-12 font-bold text-black">Propercoins</div>
                <div className="grid w-full grid-cols-[auto,1fr] items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center">
                    <Propercoin className="h-16 w-16 fill-current text-grey-40" />
                  </div>
                  <div className="text-12 text-grey-40">
                    <NumberFormat displayType={"text"} value={totalPropercoins * 100} thousandSeparator />
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden w-full">
              <div className="w-full border-b-1 border-grey-12"></div>
              <div className="grid w-full grid-cols-[auto,1fr] gap-10">
                <div className="mt-2 h-10 w-10 rounded-full bg-green"></div>
                <div className="grid w-full grid-cols-1 gap-2">
                  <div className="mb-4 w-full text-12 font-bold text-black">Real-world currency</div>
                  <div className="text-12 text-grey-40">
                    <NumberFormat displayType={"text"} prefix={"$"} value={totalMoney} thousandSeparator />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FanPostSideTooltip
