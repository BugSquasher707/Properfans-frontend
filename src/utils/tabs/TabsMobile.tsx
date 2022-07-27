import { useTransition, animated } from "@react-spring/web"
import Wrapper from "components/wrappers/Wrapper"
import { spring } from "libs/constants"
import { TabInterface } from "libs/interfaces"
import React from "react"
import NumberFormat from "react-number-format"
import TooltipShade from "utils/modals/TooltipShade"

const TabsMobile = ({
  open,
  tabs,
  type,
  handler,
  handlerToggle
}: {
  open: boolean
  tabs: TabInterface[]
  type: any
  handler: any
  handlerToggle: any
}) => {
  const transitionMenu = useTransition(open, {
    config: spring,
    from: { opacity: 0, transform: "translateY(100%)" },
    enter: { opacity: 1, transform: "translateY(0%)" },
    leave: { opacity: 0, transform: "translateY(100%)" }
  })

  return (
    <>
      <TooltipShade handler={handler} open={open} />
      {transitionMenu((style: any, item: boolean) => {
        return item ? (
          <animated.div
            className="rounded-t-16 fixed bottom-0 left-0 z-50 max-h-[calc(100vh-80px)] w-full overflow-auto bg-white p-20"
            style={style}
          >
            <div className="grid w-full grid-cols-1 gap-10">
              {tabs.map((tab: TabInterface, key: number) => (
                <button
                  key={key}
                  className={`flex h-36 w-full min-w-[80px] items-center justify-center space-x-[8px] rounded-4 px-16 text-12 font-bold text-black hover:bg-grey-3 ${
                    type === tab.type ? "bg-grey-3" : ""
                  }`}
                  onClick={() => {
                    handler(false)
                    handlerToggle(tab)
                  }}
                >
                  <Wrapper open={tab.count !== undefined}>
                    <div className="text-12 font-bold text-purple">
                      <NumberFormat className="text-12" displayType={"text"} value={tab.count} thousandSeparator />
                    </div>
                  </Wrapper>
                  <span className={`${tab.disabled ? "line-through" : ""}`}>{tab.title}</span>
                  {tab.disabled ? (
                    <div className="flex h-18 items-center rounded-4 bg-grey-20 px-4 text-10 text-white">Soon</div>
                  ) : (
                    ""
                  )}
                </button>
              ))}
            </div>
          </animated.div>
        ) : (
          <></>
        )
      })}
    </>
  )
}

export default TabsMobile
