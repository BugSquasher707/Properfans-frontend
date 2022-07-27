import WrapperLanding from "components/wrappers/WrapperLanding"
import { useProps } from "contexts/PropsContext"
import { OverlayType } from "libs/enums"
import React from "react"
import { useHistory } from "react-router"
import ButtonWhite from "utils/buttons/colors/ButtonWhite"

const NotFound = () => {
  const { setOverlay } = useProps()

  const history = useHistory()

  const onButton = () => {
    setOverlay(OverlayType.Default)
    history.goBack()
  }

  return (
    <>
      <WrapperLanding>
        <div className="grid w-full grid-cols-1">
          <div className="w-full text-center text-[160px] font-bold leading-[160px] text-white">404</div>
          <div className="w-full text-center text-[42px] font-bold leading-[42px] text-white-40">Page not found</div>
        </div>
        <div className="flex w-full justify-center">
          <ButtonWhite action={onButton} title={"Go back"} small />
        </div>
      </WrapperLanding>
    </>
  )
}

export default NotFound
