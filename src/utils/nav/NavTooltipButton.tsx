import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { TooltipType } from "libs/enums"
import { TooltipInterface } from "libs/interfaces"
import React from "react"
import { FaBell } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const NavTooltipButton = ({
  content,
  type,
  handler
}: {
  content: TooltipInterface[]
  type: TooltipType
  handler: any
}) => {
  const { path } = useProps()

  return (
    <button className="center h-28 w-full cursor-pointer" onClick={() => handler(true)}>
      <div className="center group w-28 lg:w-20">
        {
          {
            [TooltipType.Message]: (
              <MdEmail
                className={`text-24 group-hover:text-purple lg:text-20 lg:group-hover:text-black ${
                  path === URL.CHAT.BASE ? "text-purple lg:text-black" : "text-grey-20"
                }`}
              />
            ),
            [TooltipType.Notification]: (
              <FaBell
                className={`text-24 group-hover:text-purple lg:text-20 lg:group-hover:text-black ${
                  path === URL.NOTIFICATIONS.BASE ? "text-purple lg:text-black" : "text-grey-20"
                }`}
              />
            )
          }[type]
        }
      </div>
      <Wrapper open={content.length > 0}>
        <div className="center absolute -top-2 right-2 h-16 w-16 translate-x-[50%] transform select-none rounded-full border-2 border-white bg-purple text-8 font-bold text-white">
          {content.length}
        </div>
      </Wrapper>
    </button>
  )
}

export default NavTooltipButton
