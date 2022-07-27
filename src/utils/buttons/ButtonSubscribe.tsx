import { ReactComponent as Subs } from "assets/img/subs.svg"
import React from "react"

const ButtonSubscribe = () => {
  return (
    <>
      <div className="relative h-36 w-full cursor-pointer overflow-hidden rounded-4 bg-purple active:ring-3 active:ring-purple-20 hover:bg-purple-dark">
        <img alt="" className="absolute min-h-full min-w-full" src={"/gradients/gradient_button.png"} />
        <div className="relative flex h-36 w-full items-center justify-center gap-8 px-10 text-14 font-bold text-white">
          <Subs className="fill-current text-white" />
          Subscribe
        </div>
      </div>
    </>
  )
}

export default ButtonSubscribe
