import { ReactComponent as Subs } from "assets/img/subs.svg"
import { URL } from "libs/constants"
import { PageInterface } from "libs/interfaces"
import React, { useState } from "react"
import { IoMdCompass } from "react-icons/io"
import { MdChat, MdHome } from "react-icons/md"
import PageList from "utils/lists/PageList"

const FanSideMenu = () => {
  const [pages] = useState<PageInterface[]>([
    { title: "Feed", icon: <MdHome />, link: URL.FAN.FEED },
    { title: "Discover", icon: <IoMdCompass />, link: URL.FAN.DISCOVER.BASE },
    {
      title: "Chat",
      icon: <MdChat />,
      link: URL.CHAT.BASE
    },
    {
      title: "Clubs",
      icon: <Subs className="h-14 w-14 fill-current" />,
      link: URL.FAN.CLUBS.BASE
    }
  ])

  return (
    <>
      <div className="mb-20 hidden w-full select-none text-14 font-bold text-grey-40 xl:block">Menu</div>
      <PageList line={true} minimized={true} pages={pages} />
    </>
  )
}

export default FanSideMenu
