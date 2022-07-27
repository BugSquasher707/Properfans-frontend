import { useTransition, animated } from "@react-spring/web"
import { useProps } from "contexts/PropsContext"
import { spring } from "libs/constants"
import { ThemeType } from "libs/enums"
import React from "react"

const ModalWrapper = ({
  children,
  open,
  handler,
  full
}: {
  children: any
  open: boolean
  handler: any
  full?: boolean
}) => {
  const { theme } = useProps()

  const transition = useTransition(open, {
    config: spring,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 }
  })

  return (
    <>
      {transition((style: any, item: boolean) => {
        return item ? (
          <animated.div
            className={`fixed top-0 left-0 z-50 flex h-screen w-screen min-w-[300px] justify-center ${
              full ? "items-end sm:items-center" : "items-center"
            }`}
            style={style}
          >
            <div className={`relative z-20 max-h-screen overflow-y-auto ${full ? "" : "p-20 sm:p-30 md:p-50"}`}>
              <div
                className={`fixed top-0 left-0 z-10 h-full w-full cursor-pointer ${
                  theme === ThemeType.Dark ? "bg-black-14 opacity-80" : "bg-grey-40"
                }`}
                onClick={() => handler(false)}
              ></div>
              <div className="modal-wrapper fixed bottom-0 left-0 z-10 max-h-[100vh] w-full overflow-auto lg:relative lg:bottom-auto lg:left-auto lg:w-auto">
                <div className="rounded-b-0 w-full overflow-hidden rounded-t-[16px] lg:rounded-t-4 lg:rounded-b-4">
                  {children}
                </div>
              </div>
            </div>
          </animated.div>
        ) : (
          <></>
        )
      })}
    </>
  )
}

export default ModalWrapper
