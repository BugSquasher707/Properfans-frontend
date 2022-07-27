import { TabInterface } from "libs/interfaces"
import React from "react"
import { useHistory } from "react-router-dom"

const TabsRound = ({ link, tabs, type }: { link?: boolean; tabs: TabInterface[]; type: any }) => {
  const history = useHistory()

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
      <div className="flex w-full items-center justify-center space-x-[10px] sm:justify-start">
        {tabs.map((tab: TabInterface, key: number) => (
          <button
            key={key}
            className={`flex h-36 w-[84px] items-center justify-center space-x-[8px] rounded-full border-1 border-grey-12 px-16 text-12 font-bold text-black xs:w-100 ${
              type === tab.type ? "bg-purple-10" : "bg-white"
            }`}
            onClick={() => onToggle(tab)}
          >
            {tab.title}
          </button>
        ))}
      </div>
    </>
  )
}

export default TabsRound
