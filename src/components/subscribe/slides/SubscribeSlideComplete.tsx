import { URL } from "libs/constants"
import React from "react"
import { CgArrowRight } from "react-icons/cg"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import BannerPurple from "utils/banners/BannerPurple"
import BannerPurpleFilled from "utils/banners/BannerPurpleFilled"
import ButtonBorderIconEnd from "utils/buttons/border/ButtonBorderIconEnd"

const SubscribeSlideComplete = ({ profile }: { profile: any }) => {
  return (
    <>
      <div className="relative flex w-full items-center justify-center">
        <div className="relative flex w-[410px] items-center p-50">
          {profile.banner ? <BannerPurpleFilled banner={profile.banner} /> : <BannerPurple />}
          <div className="relative">
            <div className="center mb-22 h-82 w-full">
              {profile.avatar ? (
                <img alt="" className="h-82 w-82 overflow-hidden rounded-full" src={profile.avatar} />
              ) : (
                <Avatar size={82} />
              )}
            </div>
            <div className="mb-20 flex w-full flex-wrap text-center text-16 font-bold text-white md:mb-30">
              Visit the profile of {profile.userName} and unlock exclusive Properfans content
            </div>
            <div className="flex w-full items-center justify-center">
              <Link to={URL.BRANDS.BASE.replace(":param", profile.handle)}>
                <ButtonBorderIconEnd icon={<CgArrowRight className="h-14 w-14" />} title={"View Profile"} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SubscribeSlideComplete
