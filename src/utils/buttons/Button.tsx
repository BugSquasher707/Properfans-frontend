import Wrapper from "components/wrappers/Wrapper"
import React, { useState } from "react"

const Button = ({
  title,
  icon,
  pre,
  small,
  colorRing,
  colorBg,
  colorBgHover,
  colorText,
  light
}: {
  title: string | JSX.Element
  icon?: JSX.Element
  pre?: string
  small?: boolean
  colorRing: string
  colorBg: string
  colorBgHover?: string
  colorText: string
  light?: boolean
}) => {
  const [height] = useState(small ? "h-46" : "h-42")

  return (
    <div
      className={`center active:ring-6 w-full cursor-pointer gap-8 rounded-full px-20 active:ring ${height} ${colorBg} ${colorBgHover} ${colorRing}`}
    >
      <Wrapper open={pre}>
        <div className={`select-none text-14 font-bold ${colorText} ${light ? "light-r" : ""}`}>{pre}</div>
      </Wrapper>
      {icon}
      <div className={`select-none text-14 font-bold ${colorText} ${light ? "light-r" : ""}`}>{title}</div>
    </div>
  )
}

export default Button
