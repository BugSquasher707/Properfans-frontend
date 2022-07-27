import { ReactComponent as ProperCoin } from "assets/img/propercoin.svg"
import { URL } from "libs/constants"
import React, { useState } from "react"
import { IoMdLock } from "react-icons/io"
import { MdEdit, MdHome, MdNotifications, MdPerson, MdSecurity } from "react-icons/md"
import PageList from "utils/lists/PageList"

const AccountSideMenu = () => {
  const [pages] = useState([
    { title: "Home", icon: <MdHome />, link: URL.ACCOUNT.DASHBOARD },
    { title: "Account", icon: <MdPerson />, link: URL.ACCOUNT.ACCOUNT },
    { title: "Profile page", icon: <MdEdit />, link: URL.ACCOUNT.PROFILE },
    { title: "Security", icon: <MdSecurity />, link: URL.ACCOUNT.SECURITY },
    {
      title: "Billing",
      icon: <ProperCoin className="h-16 w-16 fill-current" />,
      link: URL.ACCOUNT.BILLING
    },
    {
      title: "Subscriptions",
      icon: <IoMdLock />,
      link: URL.ACCOUNT.SUBSCRIPTIONS
    },
    {
      title: "Notifications",
      icon: <MdNotifications />,
      link: URL.ACCOUNT.NOTIFICATIONS
    }
  ])

  return (
    <>
      <div className="grid w-full grid-cols-1">
        <div className="mb-10 w-full select-none text-14 font-bold text-grey-40">Menu</div>
        <PageList pages={pages} line />
      </div>
    </>
  )
}

export default AccountSideMenu
