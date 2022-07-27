import { useProps } from "contexts/PropsContext"
import { LinkInterface } from "libs/interfaces"
import React from "react"

const MenuButton = ({ link, active }: { link: LinkInterface; active: boolean }) => {
  const { setOverlay } = useProps()

  return (
    <>
      <button className="group flex h-full w-full items-center justify-center" onClick={() => setOverlay(link.link)}>
        <div className="grid w-full grid-cols-1 gap-4">
          <div className="flex w-full justify-center">
            <div
              className={`flex first:text-22 group-hover:first:text-purple ${
                active ? "first:text-purple" : "first:text-grey-20"
              }`}
            >
              {link.icon}
            </div>
          </div>
          <div
            className={`w-full text-center text-12 font-bold group-hover:text-black ${
              active ? "text-black" : "text-grey-40"
            }`}
          >
            {link.title}
          </div>
        </div>
      </button>
    </>
  )
}

export default MenuButton
