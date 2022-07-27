import React from "react"
import Button from "utils/buttons/Button"
import ButtonWrapper from "utils/buttons/ButtonWrapper"

const ButtonGradient = ({
  title,
  icon,
  pre,
  action,
  full,
  small,
  square,
  from,
  to,
  gradient
}: {
  title: string | JSX.Element
  icon?: JSX.Element
  pre?: string
  action: string | (() => void)
  full?: boolean
  small?: boolean
  square?: boolean
  from?: string
  to?: string
  gradient?: string
}) => {
  return (
    <ButtonWrapper action={action} full={full} small={small} square={square}>
      <Button
        colorBg={`${gradient ? gradient : "bg-gradient-to-br"} ${from ? from : "from-pink"} ${to ? to : "to-purple"}`}
        colorBgHover={""}
        colorRing={"ring-purple-10"}
        colorText={"text-white"}
        icon={icon}
        pre={pre}
        title={title}
        light
      />
    </ButtonWrapper>
  )
}

export default ButtonGradient
