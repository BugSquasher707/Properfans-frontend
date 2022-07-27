import Overlays from "components/modals/context/Overlays"
import { useProps } from "contexts/PropsContext"
import { OverlayType } from "libs/enums"
import React from "react"

const WrapperRoute = ({ children }: { children: any }) => {
  const { overlay } = useProps()

  return <>{overlay !== OverlayType.Default ? <Overlays /> : children}</>
}

export default WrapperRoute
