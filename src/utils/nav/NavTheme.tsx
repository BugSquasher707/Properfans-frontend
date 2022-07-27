import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { ThemeType } from "libs/enums"
import { ThemeInterface } from "libs/interfaces"
import React, { useState } from "react"
import { IoMdMoon, IoMdSunny } from "react-icons/io"

const NavTheme = () => {
  const { themeSelected, user, setThemeSelected } = useProps()

  const [themes] = useState([
    {
      type: ThemeType.Light,
      title: "Light mode",
      icon: <IoMdSunny />
    },
    {
      type: ThemeType.Dark,
      title: "Dark mode",
      icon: <IoMdMoon />
    }
  ])

  return (
    <>
      <Wrapper open={!user.syncThemeCompanyProducts}>
        <button
          className="relative hidden rounded-full bg-grey-6 lg:flex"
          onClick={() => setThemeSelected(themeSelected === ThemeType.Light ? ThemeType.Dark : ThemeType.Light)}
        >
          <div
            className={`absolute top-0 left-0 h-34 w-34 rounded-full border-2 border-grey-6 bg-white transition-spacing duration-300 lg:w-40 ${
              themeSelected === ThemeType.Light ? "" : "ml-34 lg:ml-40"
            }`}
          ></div>
          {themes.map((item: ThemeInterface, key: number) => (
            <div key={key} className="relative flex h-34 w-34 items-center justify-center rounded-full lg:w-40">
              <span
                className={`flex items-center ${themeSelected === item.type ? "first:text-black" : "text-grey-20"}`}
              >
                {item.icon}
              </span>
            </div>
          ))}
        </button>
      </Wrapper>
    </>
  )
}

export default NavTheme
