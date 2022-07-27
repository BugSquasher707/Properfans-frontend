import { onPlural, parseNumber } from "api/integration/functions"
import NavSides from "components/nav/NavSides"
import { useProps } from "contexts/PropsContext"
import { statusApi } from "ellingsenx/api/status"
import { URL } from "libs/constants"
import { LinkInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { IoMdPower } from "react-icons/io"
import { RiMenu3Fill } from "react-icons/ri"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import { useIntercom } from "react-use-intercom"
import Avatar from "utils/avatars/Avatar"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"

const NavMenuProfile = ({ handlerMenu }: { handlerMenu: any }) => {
  const { authenticated, user, onReset } = useProps()

  const history = useHistory()

  const { boot } = useIntercom()

  const [links] = useState<LinkInterface[]>([
    { link: URL.ACCOUNT.SUBSCRIPTIONS, title: "Manage subscriptions" },
    { link: URL.FAN.SHOP, title: "Propercoins Shop" }
  ])

  const [terms] = useState<LinkInterface[]>([
    { link: URL.POLICIES.DISCLAIMER, title: "Disclaimer" },
    { link: URL.POLICIES.PRIVACY, title: "Privacy policy" },
    { link: URL.POLICIES.TERMS, title: "Service terms" }
  ])

  const [following, setFollowing] = useState(0)
  const [subscriptions, setSubscriptions] = useState(0)

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    onLoad()
    setMounted(true)

    return () => {
      setMounted(false)
    }
  }, [])

  const onLoad = async () => {
    // TODO Redo integration with ellingsen id
    const result = await statusApi()

    if (mounted && result.data) {
      setFollowing(0)
      setSubscriptions(0)
    }
  }

  const onRoute = (link: any, internal: boolean) => {
    handlerMenu(false)

    if (internal) {
      history.push(link)
    } else {
      link()
    }
  }

  return (
    <>
      <div className="h-full w-full bg-white">
        <div className="absolute top-0 left-0 z-10 flex w-full items-center justify-between space-x-[16px] px-20 py-18">
          <button className="group flex items-center space-x-[12px]" onClick={() => handlerMenu(false)}>
            <div className="flex items-center justify-center xl:hidden">
              <RiMenu3Fill className="text-22 text-grey-40 group-hover:text-black" />
            </div>
            <div className="text-22 font-bold capitalize text-black">Menu</div>
          </button>
          <NavSides />
        </div>
        {user.banner ? (
          <BannerFilled banner={user.banner} height={"h-[300px]"} full />
        ) : (
          <Banner height={"h-[300px]"} full />
        )}
        <div className="relative grid h-full w-full grid-cols-1 gap-20 overflow-auto p-12 pt-50 xs:p-20 xs:pt-50 ">
          {authenticated ? (
            <>
              <div className="w-full">
                <div className="grid w-full grid-cols-1 items-start">
                  <div className="mb-20 flex h-100 w-full items-center justify-center">
                    {user.avatar ? (
                      <img alt="" className="h-100 w-100 overflow-hidden rounded-full" src={user.avatar} />
                    ) : (
                      <Avatar size={100} />
                    )}
                  </div>
                  <div className="mb-4 w-full truncate overflow-ellipsis text-center text-16 font-bold text-black">
                    {user.userName}
                  </div>
                  <div className="mb-30 w-full truncate overflow-ellipsis text-center text-14 font-bold text-grey-40">
                    @{user.handle ? user.handle : ""}
                  </div>
                  <div className="flex w-full items-center justify-center space-x-[20px] pb-20 sm:gap-30">
                    <Link className="flex items-center justify-center space-x-[4px]" to={URL.FAN.CLUBS.FOLLOWING}>
                      <span className="text-14 font-bold text-black">{parseNumber(following)}</span>
                      <span className="text-14 text-grey-40">Following</span>
                    </Link>
                    <Link className="flex items-center space-x-[8px]" to={URL.FAN.CLUBS.SUBSCRIPTIONS}>
                      <img alt="" className="h-14 w-14" src={"/general/subs.png"} />
                      <span className="flex items-center justify-center space-x-[4px]">
                        <span className="text-14 font-bold text-black">{parseNumber(subscriptions)}</span>
                        <span className="text-14 text-grey-40"> Subscription{onPlural(subscriptions)}</span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="grid w-full grid-cols-1 gap-4">
                  {links.map((link: LinkInterface, key: number) => (
                    <button
                      key={key}
                      className="w-full rounded-4 p-10 text-center text-18 font-bold text-black hover:bg-grey-3"
                      onClick={() => onRoute(link.link, true)}
                    >
                      {link.title}
                    </button>
                  ))}
                  <button
                    className="mt-10 text-center text-14 font-bold text-grey-40 hover:text-black"
                    onClick={() => boot()}
                  >
                    Help center
                  </button>
                </div>
              </div>
            </>
          ) : (
            ""
          )}
          <div className="grid w-full grid-cols-1 items-end">
            <div className="w-full">
              {authenticated ? (
                <button
                  className="flex w-full items-center justify-center space-x-[12px] rounded-4 p-10 hover:bg-red-10 xs:p-14"
                  onClick={() => {
                    onReset()
                    history.push("/")
                  }}
                >
                  <IoMdPower className="text-18 text-red" />
                  <div className="text-center text-18 font-bold text-red">Sign out</div>
                </button>
              ) : (
                <Link
                  className="flex w-full items-center justify-center space-x-[12px] rounded-4 p-10 hover:bg-red-10 xs:p-14"
                  to={URL.HOME}
                >
                  <IoMdPower className="text-18 text-purple" />
                  <div className="text-center text-18 font-bold text-purple"> Sign up</div>
                </Link>
              )}
              <div className="my-20 w-full border-b-1 border-grey-6"></div>
              <div className="mb-20 flex w-full flex-wrap items-center justify-center space-y-[4px] space-x-[0px] xs:space-y-[0px] xs:space-x-[20px] sm:gap-30">
                {terms.map((link: LinkInterface, key: number) => (
                  <button
                    key={key}
                    className="w-full text-center text-14 font-bold text-grey-40 hover:text-black xs:w-auto"
                    onClick={() => onRoute(link.link, true)}
                  >
                    {link.title}
                  </button>
                ))}
              </div>
              <div className="w-full text-center text-12 font-bold text-grey-40">
                © {new Date().getFullYear()} Properfans, All rights reserved
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavMenuProfile
