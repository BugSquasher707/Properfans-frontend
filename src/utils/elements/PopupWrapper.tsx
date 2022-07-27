import Wrapper from "components/wrappers/Wrapper"
import React from "react"
import TooltipBackground from "utils/modals/TooltipBackground"

const PopupWrapper = ({ children, open, handler }: { children?: any; open: boolean; handler: any }) => {
  return (
    <>
      <Wrapper open={open}>
        <TooltipBackground handler={handler} />
        <div className="relative z-40">{children}</div>
      </Wrapper>
    </>
  )
}

export default PopupWrapper
