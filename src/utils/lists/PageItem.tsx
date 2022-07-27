import { useProps } from "contexts/PropsContext"
import { PageInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"

const PageItem = ({ page, minimized }: { page: PageInterface; minimized: boolean }) => {
  const { path } = useProps()

  return (
    <>
      <Link
        className={`group grid h-44 w-full cursor-pointer items-center justify-center rounded-4 hover:bg-purple-10 ${
          minimized
            ? "grid-cols-1 gap-0 px-0 xl:grid-cols-[auto,1fr] xl:gap-12 xl:px-12"
            : "grid-cols-[auto,1fr] gap-12 px-12"
        } ${path === page.link ? "bg-purple-10" : ""}`}
        to={page.link}
      >
        <div
          className={`h-16 group-hover:first:text-purple ${minimized ? "flex w-full justify-center xl:w-16" : "w-16"} ${
            path === page.link ? "first:text-purple" : "first:text-grey-20"
          }`}
        >
          {page.icon}
        </div>
        <div
          className={`w-full select-none font-bold group-hover:text-purple ${minimized ? "hidden xl:flex" : ""} ${
            path === page.link ? "text-purple" : "text-black"
          }`}
        >
          {page.title}
        </div>
      </Link>
    </>
  )
}

export default PageItem
