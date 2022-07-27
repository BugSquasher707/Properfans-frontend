import WrapperPagination from "components/wrappers/WrapperPagination"
import { TooltipType } from "libs/enums"
import { TooltipInterface } from "libs/interfaces"
import React from "react"
import NavMessage from "utils/nav/NavMessage"
import NavNotification from "utils/nav/NavNotification"

const NavTooltipDropdown = ({
  type,
  content,
  done,
  loaded,
  handler,
  handlerAll,
  handlerVisited,
  handlerPage
}: {
  type: TooltipType
  content?: TooltipInterface[]
  done: boolean
  loaded: boolean
  handler: any
  handlerAll: any
  handlerVisited: any
  handlerPage: any
}) => {
  return (
    <>
      <div className="hidden lg:flex">
        <div className="fixed top-0 left-0 z-10 h-screen w-screen" onClick={() => handler(false)}></div>
        <div className="absolute right-10 z-20 w-280 translate-x-[5%] transform lg:translate-x-[35%]">
          <div className="relative mt-16 w-full rounded-4 border-1 border-grey-12 bg-white px-14 py-14 pb-12 shadow-md dark:shadow-none">
            <div className="absolute -top-1 right-[5%] h-14 w-14 translate-x-[50%] translate-y-[-50%] rotate-45 transform rounded-1 border-l-1 border-t-1 border-grey-12 bg-white lg:right-[35%]"></div>
            <div className="between mb-12 w-full">
              <div className="select-none text-12 font-bold text-black">
                {
                  {
                    [TooltipType.Message]: "Direct Messages",
                    [TooltipType.Notification]: "Notifications"
                  }[type]
                }
              </div>
              <button
                className="select-none text-12 text-grey-40 hover:font-bold hover:text-black"
                onClick={() => handlerAll()}
              >
                Mark all as read
              </button>
            </div>
            {content ? (
              <WrapperPagination
                count={content.length}
                done={done}
                handlerPage={handlerPage}
                items={"notifications"}
                loaded={loaded}
                top={true}
              >
                {content && content.length > 0 ? (
                  <div className="mb-10 h-[160px] overflow-y-scroll">
                    {content.map((item: TooltipInterface, key: number) =>
                      item.type === TooltipType.Message ? (
                        <NavMessage key={key} data={item} handler={handlerVisited} index={key} />
                      ) : (
                        <NavNotification key={key} data={item} handler={handlerVisited} index={key} />
                      )
                    )}
                  </div>
                ) : (
                  ""
                )}
              </WrapperPagination>
            ) : (
              <div className="mb-10 flex h-[160px] w-full items-center justify-center text-12 font-bold text-grey-40">
                No new{" "}
                {
                  {
                    [TooltipType.Message]: "direct messages",
                    [TooltipType.Notification]: "notifications"
                  }[type]
                }
              </div>
            )}
            <button className="w-full select-none text-center text-12 text-grey-40 hover:font-bold hover:text-black">
              Load more
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavTooltipDropdown
