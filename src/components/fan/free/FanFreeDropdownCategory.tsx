import { TitleIconInterface } from "libs/interfaces"
import React from "react"
import { FiCheck } from "react-icons/fi"
import { MdFileDownload } from "react-icons/md"
import { RiSurveyFill } from "react-icons/ri"
import PopupWrapper from "utils/elements/PopupWrapper"

const FanFreeDropdownCategory = ({
  open,
  handler,
  category,
  handlerCategory
}: {
  open: boolean
  handler: any
  category: string
  handlerCategory: any
}) => {
  const categories = [
    { title: "Apps", icon: <MdFileDownload /> },
    { title: "Surveys", icon: <RiSurveyFill /> }
  ]

  return (
    <>
      <PopupWrapper handler={handler} open={open}>
        <div className="absolute top-50 left-0 z-20 w-full rounded-4 border-1 border-grey-12 bg-white p-6 shadow-md dark:shadow-none">
          {categories.map((cat: TitleIconInterface, key: number) => (
            <button
              key={key}
              className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-12 rounded-4 px-14 py-10 hover:bg-grey-6"
              onClick={() => {
                handler(false)
                category === cat.title ? handlerCategory("") : handlerCategory(cat.title)
              }}
            >
              <div className="flex h-20 w-20 items-center justify-center first:text-20 first:text-grey-40">
                {cat.icon}
              </div>
              <div className="w-full text-left text-14 font-bold text-black">{cat.title}</div>
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-4 ${
                  category === cat.title ? "bg-purple" : "border-1 border-grey-12 shadow-sm"
                }`}
              >
                <FiCheck className={`text-14 text-white ${category === cat.title ? "flex" : "hidden"}`} />
              </div>
            </button>
          ))}
        </div>
      </PopupWrapper>
    </>
  )
}

export default FanFreeDropdownCategory
