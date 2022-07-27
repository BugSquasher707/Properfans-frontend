import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { PageInterface } from "libs/interfaces"
import React, { useState } from "react"
import { MdKeyboardArrowRight, MdLockOpen, MdNotifications, MdPhotoCamera, MdSecurity } from "react-icons/md"
import { Link } from "react-router-dom"
import { useIntercom } from "react-use-intercom"
import Avatar from "utils/avatars/Avatar"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const AccountDashboard = () => {
  const { user } = useProps()

  const { boot } = useIntercom()

  const [pages] = useState<PageInterface[]>([
    { title: "Profile", icon: <MdPhotoCamera />, link: URL.ACCOUNT.PROFILE },
    { title: "Password", icon: <MdLockOpen />, link: URL.ACCOUNT.SECURITY },
    {
      title: "Subscriptions",
      icon: <MdSecurity />,
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
      <div className="relative flex w-full flex-wrap rounded-t-4 px-12 pt-20 sm:px-20 sm:pt-30 lg:px-40 lg:pt-60">
        {user.banner ? <BannerFilled banner={user.banner} grey /> : <Banner grey />}
        <div className="relative grid w-full grid-cols-1">
          <div className="mb-30 flex w-full justify-center">
            <div className="flex h-100 w-full items-center justify-center">
              {user.avatar ? (
                <img alt="" className="h-100 w-100 overflow-hidden rounded-full" src={user.avatar} />
              ) : (
                <Avatar size={100} />
              )}
            </div>
          </div>
          <div className="mb-12 w-full text-center text-24 font-black text-black">Hello, {user.userName}</div>
          <div className="mb-20 flex w-full justify-center md:mb-40">
            <div className="w-[490px] max-w-full text-center text-14 text-grey-40">
              The account dashboard is the place to manage anything related to your account. Below you can find quick
              buttons for popular settings
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mb-20 flex w-full justify-center md:mb-40">
          <div className="grid w-[530px] max-w-full grid-cols-1 gap-10 sm:grid-cols-2">
            {pages.map((page: PageInterface, key: number) => (
              <Link
                key={key}
                className="group grid grid-cols-[auto,1fr,auto] items-center gap-12 rounded-4 border-1 border-grey-6 bg-grey-1 p-20 hover:border-white hover:bg-white hover:shadow-sm dark:hover:shadow-none"
                to={page.link}
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-full bg-grey-6 group-hover:bg-purple-20">
                  <div className="flex first:text-grey-20 group-hover:text-purple">{page.icon}</div>
                </div>
                <div className="flex w-full items-center">
                  <div className="grid w-full grid-cols-1 gap-2">
                    <div className="w-full text-14 font-bold text-black">{page.title}</div>
                    <div className="hidden w-full text-12 font-bold text-grey-40 group-hover:flex">Jump there</div>
                  </div>
                </div>
                <div className="flex">
                  <MdKeyboardArrowRight className="text-16 text-grey-40" />
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="mb-20 w-full border-b-1 border-grey-6 md:mb-30"></div>
        <div className="mb-12 w-full text-14 font-bold text-black">Live help center</div>
        <div className="mb-20 flex w-full justify-start md:mb-30">
          <div className="relative w-[400px] max-w-full text-14 text-grey-40">
            Looking for help regarding your account or something else? Let’s ask for help!
          </div>
        </div>
        <div className="mb-20 flex w-full justify-start md:mb-30">
          <div className="flex items-center space-x-[20px]">
            <div className="flex items-center">
              <div className="mr-[-12px] h-38 w-38 rounded-full bg-white">
                <div className="flex h-38 w-38 items-center justify-center rounded-full bg-grey-2">
                  <Avatar size={32} />
                </div>
              </div>
              <div className="mr-[-12px] h-38 w-38 rounded-full bg-white">
                <div className="flex h-38 w-38 items-center justify-center rounded-full bg-grey-2">
                  <Avatar size={32} />
                </div>
              </div>
              <div className="h-38 w-38 rounded-full bg-white">
                <div className="flex h-38 w-38 items-center justify-center rounded-full bg-grey-2">
                  <Avatar size={32} />
                </div>
              </div>
            </div>
            <div className="darh:shadow-none relative flex h-46 items-center rounded-4 border-1 border-grey-12 bg-white px-16 text-14 font-bold text-black shadow-md">
              Hi, are you looking for help?
              <div className="absolute left-[-1px] top-[50%] h-12 w-12 translate-x-[-50%] translate-y-[-50%] rotate-45 transform border-b-1 border-l-1 border-grey-12 bg-white"></div>
            </div>
          </div>
        </div>
        <ButtonPurple action={boot} title={"Open live chat"} full />
      </div>
    </>
  )
}

export default AccountDashboard
