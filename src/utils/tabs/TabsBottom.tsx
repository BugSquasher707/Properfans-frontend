import { TabInterface } from "libs/interfaces"
import React from "react"
import { useHistory } from "react-router-dom"

const TabsBottom = ({ link, tabs, type }: { link?: boolean; tabs: TabInterface[]; type: any }) => {
  const history = useHistory()

  const onAction = (action: any, tab: any) => {
    if (link) {
      history.push(action)
    } else {
      action(tab)
    }
  }

  const onIcon = (tab: TabInterface) => {
    return tab.type === type ? "first:text-purple" : "first:text-grey-20"
  }

  return (
    <>
      <div className="flex w-full items-center justify-center space-x-[10px] border-b-1 border-grey-10">
        {tabs.map((tab: TabInterface, key: number) => (
          <button
            key={key}
            className={`-mb-1 flex items-center justify-center space-x-[6px] border-b-2 p-14 text-14 font-bold ${
              tab.type === type ? "border-purple text-black" : "border-transparent text-grey-40"
            }`}
            onClick={() => (tab.disabled ? null : onAction(tab.action, tab.type))}
          >
            {tab.count ? <span className="flex items-center text-purple">{tab.count}</span> : ""}
            {tab.icon ? (
              <div className={`mr-4 flex items-center first:w-16 first:text-16 ${onIcon(tab)}`}>{tab.icon}</div>
            ) : (
              ""
            )}
            {tab.title}
          </button>
        ))}
      </div>
    </>
  )
}

export default TabsBottom
