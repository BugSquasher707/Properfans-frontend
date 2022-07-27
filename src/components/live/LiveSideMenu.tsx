import { URL } from "libs/constants"
import { PageInterface } from "libs/interfaces"
import React, { useState } from "react"
import { IoGrid } from "react-icons/io5"
import { MdHome, MdPeople } from "react-icons/md"
import PageList from "utils/lists/PageList"

const LiveSideMenu = () => {
  const [pages] = useState<PageInterface[]>([
    { title: "Home", icon: <MdHome />, link: URL.LIVE.BASE },
    { title: "Categories", icon: <IoGrid />, link: URL.LIVE.CATEGORIES },
    {
      title: "Streamers",
      icon: <MdPeople />,
      link: URL.LIVE.STREAMERS
    }
  ])

  return (
    <>
      <div className="mb-20 hidden w-full select-none text-14 font-bold text-grey-40 xl:block">Menu</div>
      <PageList line={true} minimized={true} pages={pages} />
    </>
  )
}

export default LiveSideMenu
