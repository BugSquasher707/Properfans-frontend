import { ReactComponent as Ava } from "assets/img/ava.svg"
import React, { useState } from "react"

const Avatar = ({ size, color, groupSize }: { size?: number; color?: string; groupSize?: number }) => {
  const [width] = useState(size ? `w-${size}` : "w-32")
  const [height] = useState(size ? `h-${size}` : "h-32")

  const [hoverWidth] = useState(groupSize ? `group-hover:w-${size}` : "")
  const [hoverHeight] = useState(groupSize ? `group-hover:h-${size}` : "")

  const [text] = useState(color ? `text-${color}` : "text-grey-12")

  return <Ava className={`${width} ${height} ${text} ${hoverWidth} ${hoverHeight} fill-current`} />
}

export default Avatar
