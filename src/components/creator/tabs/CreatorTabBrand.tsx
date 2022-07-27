import { ReactComponent as Subs } from "assets/img/subs.svg"
import BrandSocials from "components/brand/BrandSocials"
import Wrapper from "components/wrappers/Wrapper"
import WrapperVerified from "components/wrappers/WrapperVerified"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { BrandSocialInterface, DropdownInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { BiCaretRight } from "react-icons/bi"
import { IoMdSettings, IoMdStats } from "react-icons/io"
import { MdModeEdit } from "react-icons/md"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"
import Verified from "utils/icons/Verified"
import TooltipBackground from "utils/modals/TooltipBackground"

const CreatorTabBrand = ({ brand }: { brand: any }) => {
  const { setBrandActive } = useProps()

  const [open, setOpen] = useState(false)

  const [socials, setSocials] = useState<BrandSocialInterface[]>([])

  useEffect(() => {
    setSocials([])
  }, [])

  const links = [
    {
      link: URL.CREATOR.CLUB.STATISTICS.replace(":param", brand.handle),
      title: "Statistics",
      icon: <IoMdStats className="text-black" />
    },
    {
      link: URL.CREATOR.TIER.TIERS.replace(":param", brand.handle),
      title: "Tiers",
      icon: <Subs className="fill-current text-black" />
    },
    {
      link: URL.CREATOR.CLUB.EDIT.replace(":param", brand.handle),
      title: "Edit club",
      icon: <MdModeEdit className="text-black" />
    }
  ]

  return (
    <>
      <div className="relative w-full rounded-4 bg-white">
        {brand.banner ? <BannerFilled banner={brand.banner} /> : <Banner />}
        <div className="relative w-full rounded-4 border-1 border-grey-12 p-20 shadow-md dark:shadow-none">
          <div className="mb-12 flex h-42 w-full justify-center">
            {brand.avatar ? (
              <img alt="" className="h-42 w-42 overflow-hidden rounded-full" src={brand.avatar} />
            ) : (
              <Avatar size={42} />
            )}
          </div>
          <div className="mb-4 flex w-full justify-center">
            <div className="relative max-w-full truncate overflow-ellipsis pr-20 text-14 font-bold text-black">
              {brand.userName}
              <WrapperVerified>{brand.verified ? <Verified size={16} /> : ""}</WrapperVerified>
            </div>
          </div>
          <div className="mb-16 w-full truncate overflow-ellipsis text-center text-12 font-bold text-grey-40">
            @{brand.handle}
          </div>
          <div className="flex w-full items-center justify-center space-x-[2px]">
            <div className="text-12 text-grey-40">
              <span className="font-bold text-black">{0}</span> Fans
            </div>
            {socials && socials.length > 0 ? <BrandSocials socials={socials} /> : ""}
          </div>
          <div className="my-20 w-full border-b-1 border-grey-10"></div>
          <div className="flex w-full items-center justify-between">
            <Link
              className="flex items-center gap-2 text-12 font-bold text-purple"
              to={URL.BRANDS.BASE.replace(":param", brand.handle)}
            >
              Visit Brand <BiCaretRight className="text-16 text-purple" />
            </Link>
            <button
              className="group flex items-center space-x-[6px] text-12 font-bold text-grey-40 hover:text-black"
              onClick={() => setOpen(true)}
            >
              <IoMdSettings className="text-16 text-grey-40 group-hover:text-black" />
              <div className="text-12 text-grey-40 group-hover:text-black">Options</div>
            </button>
          </div>
        </div>
        <Wrapper open={open}>
          <TooltipBackground handler={setOpen} />
          <button
            className="absolute bottom-50 right-10 z-40 mt-10 w-[160px] cursor-pointer rounded-4 border-1 border-grey-12 bg-white px-6 py-4 shadow-md"
            onClick={() => setOpen(false)}
          >
            {links.map((link: DropdownInterface, key: number) => (
              <Link
                key={key}
                className="group my-2 flex h-36 w-full items-center justify-start space-x-[10px] rounded-4 px-14 hover:bg-grey-6"
                to={link.link}
                onClick={() => {
                  setBrandActive(brand)
                }}
              >
                <div className="flex items-center opacity-40 group-hover:opacity-100">{link.icon}</div>
                <div className="text-14 font-bold text-black">{link.title}</div>
              </Link>
            ))}
          </button>
        </Wrapper>
      </div>
    </>
  )
}

export default CreatorTabBrand
