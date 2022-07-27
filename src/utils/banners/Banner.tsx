import React from "react"

const Banner = ({
  grey,
  purple,
  full,
  height
}: {
  grey?: boolean
  purple?: boolean
  full?: boolean
  height?: string
}) => {
  return (
    <div
      className={`absolute top-0 left-0 w-full overflow-hidden bg-white ${full ? "lg:rounded-t-4" : "rounded-t-4"}  ${
        height ?? "h-120"
      }`}
    >
      <div
        className={`absolute top-0 -bottom-1 w-full bg-gradient-to-b ${
          grey ? "from-grey-20 to-grey-2" : "from-grey-20 to-white"
        } ${purple ? "from-grey-80 to-purple" : "to-white"}`}
      ></div>
    </div>
  )
}

export default Banner
