import React from "react"

const BannerFilled = ({
  banner,
  full,
  grey,
  purple,
  height
}: {
  banner: string
  full?: boolean
  grey?: boolean
  purple?: boolean
  height?: string
}) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full overflow-hidden bg-white ${full ? "lg:rounded-t-4" : "rounded-t-4"} ${
        height ?? "h-[144px]"
      }`}
    >
      <img
        alt=""
        className="absolute top-[50%] left-[50%] min-h-full w-full min-w-full translate-x-[-50%] translate-y-[-50%] transform object-cover opacity-30"
        src={banner}
      />
      <div
        className={`absolute top-0 -bottom-1 w-full bg-gradient-to-b from-white-0 ${
          grey ? "to-[#fafafa] dark:to-[#0a0a0a]" : "to-white"
        } ${purple ? "to-purple dark:to-purple" : "to-white"}`}
      ></div>
    </div>
  )
}

export default BannerFilled
