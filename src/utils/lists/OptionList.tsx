import { openLink } from "api/integration/functions"
import { OptionInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"

const OptionList = ({
  options,
  active,
  handler
}: {
  options: OptionInterface[]
  active: boolean[]
  handler: (key: number) => void
}) => {
  const shadow = (ke: number) => {
    return active[ke] ? "dark:shadow-none shadow-lg" : ""
  }

  return (
    <>
      <div className="w-full">
        {options.map((option: OptionInterface, key: number) => (
          <button
            key={key}
            className={`mb-10 grid w-full grid-cols-1 gap-12 rounded-4 border-1 p-20 ${shadow(key)} ${
              active[key] ? "border-purple" : "border-grey-12"
            }`}
            onClick={() => {
              handler(key)
            }}
          >
            <div className="flex w-full items-center justify-start space-x-[8px] text-14 font-bold text-black">
              {option.icon}
              <div className="text-14 font-bold text-black">{option.title}</div>
            </div>
            <div className="w-full text-left text-12 text-grey-40">{option.text}</div>
            <div className="hidden w-full flex-wrap gap-20">
              <Link
                className="text-12 font-bold text-purple"
                target="_blank"
                to="route"
                onClick={(event) => {
                  openLink(event, option.link)
                }}
              >
                Learn more
              </Link>
            </div>
          </button>
        ))}
      </div>
    </>
  )
}

export default OptionList
