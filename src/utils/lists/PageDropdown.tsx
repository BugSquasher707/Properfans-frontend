import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { LinkInterface, PageInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import { Link } from "react-router-dom"

const PageDropdown = ({ page, line, minimized }: { page: PageInterface; line: boolean; minimized: boolean }) => {
  const { path } = useProps()

  const [open, setOpen] = useState(false)
  const [active] = useState(
    page.dropdown && page.dropdown.filter((item: LinkInterface) => item.link === path).length > 0
  )

  return (
    <>
      <div className="relative grid w-full grid-cols-1 gap-10">
        <button
          className={`group grid h-44 w-full cursor-pointer items-center rounded-4 hover:bg-purple-10 ${
            minimized
              ? "grid-cols-1 gap-0 px-0 xl:grid-cols-[auto,1fr,auto] xl:gap-12 xl:px-12"
              : "grid-cols-[auto,1fr,auto] gap-12 px-12"
          } ${active ? "bg-purple-10" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <div
            className={`h-16  group-hover:first:text-purple ${
              minimized ? "flex w-full justify-center xl:w-16" : "w-16"
            } ${active ? "first:text-purple" : "first:text-grey-20"}`}
          >
            {page.icon}
          </div>
          <div
            className={`w-full select-none text-left font-bold ${minimized ? "hidden xl:flex" : ""} ${
              active || open ? "text-purple" : "text-black group-hover:text-purple"
            }`}
          >
            {page.title}
          </div>
          <div className="hidden h-16 w-16 xl:flex">
            <MdKeyboardArrowDown className={`text-16 ${open ? "rotate-180 transform text-purple" : "text-grey-20"}`} />
          </div>
        </button>
        <Wrapper open={page.dropdown && open}>
          <div className={`grid w-full ${line ? "grid-cols-[auto,1fr] gap-4 xl:gap-10" : "grid-cols-1"}`}>
            <div className="pl-0 xl:pl-[19px]">
              <div className="h-full w-2 rounded-full bg-grey-6"></div>
            </div>
            <div className="grid w-full grid-cols-1 gap-4">
              {page.dropdown && open ? (
                <div className="grid w-full grid-cols-1 gap-4">
                  {page.dropdown.map((item: LinkInterface, key: number) => (
                    <Link
                      key={key}
                      className={`flex w-full items-center rounded-4 p-4 ${
                        line ? "h-38 px-0 xl:h-46 xl:px-16" : "h-36 pl-36"
                      } ${
                        path === item.link
                          ? "bg-purple-10 text-purple"
                          : "text-grey-40 hover:bg-purple-10 hover:text-purple"
                      }`}
                      to={item.link}
                    >
                      <div className="hidden text-14 font-bold xl:flex">{item.title}</div>
                    </Link>
                  ))}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default PageDropdown
