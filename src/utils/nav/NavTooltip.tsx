import Wrapper from "components/wrappers/Wrapper"
import { URL } from "libs/constants"
import { TooltipType } from "libs/enums"
import { TooltipInterface } from "libs/interfaces"
import React, { useState } from "react"
import { useHistory } from "react-router"
import NavTooltipButton from "utils/nav/NavTooltipButton"
import NavTooltipDropdown from "utils/nav/NavTooltipDropdown"

const NavTooltip = ({
  content,
  type,
  done,
  loaded,
  handlerAll,
  handlerVisited,
  handlerPage
}: {
  content: TooltipInterface[]
  type: TooltipType
  done: boolean
  loaded: boolean
  handlerAll: any
  handlerVisited: any
  handlerPage: any
}) => {
  const [open, setOpen] = useState(false)

  const history = useHistory()

  const onOpen = () => {
    setOpen(true)
  }

  const onLink = () => {
    const newLink = type === TooltipType.Message ? URL.CHAT.BASE : URL.FAN.NOTIFICATIONS

    history.push(newLink)
  }

  return (
    <div className="center relative h-28 w-28 items-start lg:w-20">
      <div className="w-full">
        <div className="hidden lg:flex">
          <NavTooltipButton content={content} handler={onOpen} type={type} />
        </div>
        <div className="flex lg:hidden">
          <NavTooltipButton content={content} handler={onLink} type={type} />
        </div>
        <Wrapper open={open}>
          <NavTooltipDropdown
            content={content}
            done={done}
            handler={setOpen}
            handlerAll={handlerAll}
            handlerPage={handlerPage}
            handlerVisited={handlerVisited}
            loaded={loaded}
            type={type}
          />
        </Wrapper>
      </div>
    </div>
  )
}

export default NavTooltip
