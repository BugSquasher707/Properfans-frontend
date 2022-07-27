import { TitleTextInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { BiWorld } from "react-icons/bi"
import DropdownIcon from "utils/dropdowns/DropdownIcon"
import PopupWrapper from "utils/elements/PopupWrapper"
import NavLanguageItem from "utils/nav/NavLanguageItem"

const NavLanguage = () => {
  const [open, setOpen] = useState(false)

  const [language, setLanguage] = useState("EN")
  const [languageCode, setLanguageCode] = useState("en-US")

  const languages = [
    {
      title: "EN",
      text: "en-US"
    },
    {
      title: "NL",
      text: "nl-NL"
    }
  ]

  useEffect(() => {
    console.log(languageCode)
  }, [languageCode])

  return (
    <div className="center relative h-28 items-start">
      <div className="group w-56">
        <button className="flex h-28 cursor-pointer items-center" onClick={() => setOpen(!open)}>
          <div className="mr-6 flex items-center text-grey-40 group-hover:text-black">
            <BiWorld className="text-14" />
          </div>
          <div className="mr-6 select-none text-14 text-grey-40 group-hover:font-bold group-hover:text-black">
            {language}
          </div>
          <DropdownIcon open={open} />
        </button>
        <PopupWrapper handler={setOpen} open={open}>
          <div className="absolute z-20 pl-[50%]">
            <div className="mt-10 translate-x-[-50%] transform cursor-pointer rounded-4 border-1 border-grey-12 bg-white px-6 py-4 shadow-md">
              {languages.map((element: TitleTextInterface, key: number) => (
                <button
                  key={key}
                  onClick={() => {
                    setLanguage(element.title)
                    setLanguageCode(element.text)
                  }}
                >
                  <NavLanguageItem key={key} data={element} />
                </button>
              ))}
            </div>
          </div>
        </PopupWrapper>
      </div>
    </div>
  )
}

export default NavLanguage
