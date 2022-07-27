import React from "react"
import Button from "utils/buttons/Button"
import ButtonWrapper from "utils/buttons/ButtonWrapper"

const ButtonPurple = ({
  title,
  icon,
  pre,
  action,
  full,
  small,
  square
}: {
  title: string | JSX.Element
  icon?: JSX.Element
  pre?: string
  action: string | (() => void)
  full?: boolean
  small?: boolean
  square?: boolean
}) => {
  return (
    <ButtonWrapper action={action} full={full} small={small} square={square}>
      <Button
        colorBg={"bg-purple"}
        colorBgHover={"hover:bg-purple-dark"}
        colorRing={"ring-purple-10"}
        colorText={"text-white"}
        icon={icon}
        pre={pre}
        small={small}
        title={title}
      />
    </ButtonWrapper>
  )
}

export default ButtonPurple
