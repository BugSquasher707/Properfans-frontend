import { UserType } from "libs/enums"
import { UserTypeInterface } from "libs/interfaces"
import React from "react"
import { CgArrowsV } from "react-icons/cg"
import { MdDashboard } from "react-icons/md"
import NavTypeItem from "utils/nav/NavTypeItem"

const NavType = ({ data }: { data: UserTypeInterface }) => {
  return (
    <div className="center relative h-28 items-start">
      <div className="group h-auto">
        <div className="between relative z-10 h-28 cursor-pointer rounded-4 bg-grey-6 px-10">
          <div className="center">
            <div className="center mr-6 w-12">
              <MdDashboard className="text-12 text-grey-30" />
            </div>
            <div className="mr-8 select-none text-12 font-bold text-black">{UserType[data.type]}</div>
          </div>
          <div className="flex flex-wrap text-grey-30">
            <CgArrowsV className="text-12" />
          </div>
        </div>
        <div className="absolute top-28 w-full pt-4">
          <div className="hidden  w-full cursor-pointer rounded-4 bg-grey-10 group-hover:block">
            {Object.keys(UserType).map((type, key) =>
              isNaN(Number(type)) && type !== UserType[data.type] ? <NavTypeItem key={key} type={type} /> : ""
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavType
