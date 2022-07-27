import { TitleInterface } from "libs/interfaces"
import React from "react"

const NavTitlePurple = ({ data }: { data: TitleInterface }) => {
  return <button className="text-14 font-bold text-purple">{data.title}</button>
}

export default NavTitlePurple
