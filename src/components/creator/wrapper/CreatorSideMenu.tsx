import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import { URL } from "libs/constants"
import { PageInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdHome, MdPeople } from "react-icons/md"
import PageList from "utils/lists/PageList"

const CreatorSideMenu = () => {
  const [pages] = useState<PageInterface[]>([
    { title: "Home", icon: <MdHome />, link: URL.CREATOR.DASHBOARD.PERSONAL },
    {
      title: "Manage clubs",
      icon: <MdPeople />,
      link: URL.CREATOR.DASHBOARD.CLUBS
    },
    {
      title: "Cashout",
      icon: <Propercoin className="h-16 w-16 fill-current" />,
      link: URL.CREATOR.DASHBOARD.CASHOUT
    }
  ])

  return (
    <>
      <div className="mb-10 w-full select-none text-14 font-bold text-grey-40">Tools</div>
      <PageList pages={pages} line />
    </>
  )
}

export default CreatorSideMenu
