import { ReactComponent as Skrill } from "assets/img/skrill.svg"
import React from "react"
import Loader from "react-loader-spinner"

const ModalSkrillLoading = () => {
  return (
    <>
      <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 py-30 shadow-sm dark:shadow-none lg:w-300">
        <div className="center mb-22 h-90 w-full">
          <div className="center h-90 w-90 overflow-hidden rounded-full">
            <div className="absolute h-90 w-90">
              <Loader color="rgba(137, 88, 225, 1)" height={90} type="Oval" width={90} />
            </div>
            <Skrill className="h-14 fill-current text-black" />
          </div>
        </div>
        <div className="mb-20 w-full text-center text-16 font-bold text-black md:mb-24">
          Skrill checkout is loading..
        </div>
        <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-30">
          The next step (of checkout) will be done through © Skrill gateway
        </div>
        <button className="w-full text-center text-14 font-bold text-grey-40 hover:text-black">Cancel</button>
      </div>
    </>
  )
}

export default ModalSkrillLoading
