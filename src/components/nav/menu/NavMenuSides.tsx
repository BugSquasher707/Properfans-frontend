import React from "react"
import { IoGrid } from "react-icons/io5"
import DropdownLogoLinks from "utils/dropdowns/DropdownLogoLinks"

const NavMenuSides = ({ handlerSides }: { handlerSides: any }) => {
  return (
    <>
      <div className="w-full rounded-t-4 border-t-1 border-grey-12 bg-white p-20 shadow-md dark:shadow-none">
        <button
          className="flex w-full items-center justify-start space-x-[12px] py-6"
          onClick={() => handlerSides(false)}
        >
          <IoGrid className="text-16 text-grey-40 group-hover:text-black" />
          <div className="text-left text-14 font-bold text-grey-40">Jump to menu</div>
        </button>
        <div className="my-12 w-full border-b-1 border-grey-6"></div>
        <div className="cols-1 grid w-full gap-20">
          <DropdownLogoLinks />
        </div>
      </div>
    </>
  )
}

export default NavMenuSides
