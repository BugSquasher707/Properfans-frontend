import Wrapper from "components/wrappers/Wrapper"
import { TabInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import NumberFormat from "react-number-format"
import { useHistory } from "react-router-dom"
import TabsMobile from "utils/tabs/TabsMobile"

const Tabs = ({ link, tabs, type }: { link?: boolean; tabs: TabInterface[]; type: any }) => {
  const history = useHistory()

  const [open, setOpen] = useState(false)

  const onAction = (action: any, tab: any) => {
    if (link) {
      history.push(action)
    } else {
      action(tab)
    }
  }

  const onToggle = (tab: TabInterface) => {
    if (!tab.disabled) {
      onAction(tab.action, tab.type)
    }
  }

  return (
    <>
      <div className="w-full">
        <div className="relative w-full">
          <div className="relative flex w-max min-w-full flex-wrap rounded-4 bg-grey-6 lg:flex-nowrap">
            <button
              className="group absolute top-0 right-0 flex h-36 w-full items-center justify-end lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <div className="flex h-36 w-36 items-center justify-center">
                <MdKeyboardArrowDown
                  className={`transform text-grey-40 group-hover:text-black ${open ? "rotate-[180deg]" : ""}`}
                />
              </div>
            </button>
            {tabs.map((tab: TabInterface, key: number) => (
              <button
                key={key}
                className={`flex h-36 w-full min-w-[80px] items-center justify-center space-x-[8px] rounded-4 border-1 px-16 text-12 font-bold text-black ${
                  type === tab.type
                    ? "border-grey-12 bg-white shadow-sm dark:shadow-none"
                    : "border-transparent opacity-40"
                } ${tab.type !== type ? "hidden lg:flex" : ""}`}
                onClick={() => onToggle(tab)}
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
        </div>
      </div>
      <Wrapper open={open}>
        <TabsMobile handler={setOpen} handlerToggle={onToggle} open={open} tabs={tabs} type={type} />
      </Wrapper>
    </>
  )
}

export default Tabs
