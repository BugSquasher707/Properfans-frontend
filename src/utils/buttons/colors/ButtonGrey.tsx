import React from "react"
import Button from "utils/buttons/Button"
import ButtonWrapper from "utils/buttons/ButtonWrapper"

const ButtonGrey = ({
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
        colorBg={"bg-grey-6"}
        colorBgHover={"hover:bg-grey-6"}
        colorRing={"ring-grey-3"}
        colorText={"text-black"}
        icon={icon}
        pre={pre}
        small={small}
        title={title}
      />
    </ButtonWrapper>
  )
}

export default ButtonGrey
