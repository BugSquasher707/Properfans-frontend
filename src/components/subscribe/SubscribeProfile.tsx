import { onPlural, parseNumber } from "api/integration/functions"
import { ReactComponent as SubsWhite } from "assets/img/subs_white.svg"
import { URL } from "libs/constants"
import { ProfileSubscribeInterface } from "libs/interfaces"
import React from "react"
import { CgArrowRight } from "react-icons/cg"
import { Link } from "react-router-dom"
import BannerPurple from "utils/banners/BannerPurple"
import BannerPurpleFilled from "utils/banners/BannerPurpleFilled"
import ButtonBorderIconEnd from "utils/buttons/border/ButtonBorderIconEnd"
import ProfileUserWhite from "utils/profile/ProfileUserWhite"

const SubscribeProfile = ({ profile }: { profile: ProfileSubscribeInterface }) => {
  return (
    <>
      <div className="relative mb-20 flex w-full flex-wrap px-12 pt-12 xs:px-20 xs:pt-20 sm:px-30 sm:pt-30 md:mb-30 md:px-40 md:pt-40 xl:pt-70">
        {profile.banner ? <BannerPurpleFilled banner={profile.banner} /> : <BannerPurple />}
        <div className="relative mb-10 w-full">
          <ProfileUserWhite profile={profile} />
        </div>
        <div className="mb-20 flex w-full items-center justify-center gap-30 xl:mb-40">
          <div className="flex items-center text-14 text-white-40">
            <span className="mr-3 text-white">{parseNumber(profile.stats.followers)}</span> Fan
            {onPlural(profile.stats.followers)}
          </div>
          <div className="flex items-center text-14 text-white-40">
            <SubsWhite />
            <span className="ml-8 mr-3 text-white">{parseNumber(profile.stats.subscribers)}</span> Properfan
            {onPlural(profile.stats.followers)}
          </div>
        </div>
        <div className="mb-20 w-full text-center text-14 text-white-40 xl:mb-40">{profile.biography}</div>
        <div className="flex w-full items-center justify-center">
          <Link to={URL.BRANDS.BASE.replace(":param", profile.handle)}>
            <ButtonBorderIconEnd icon={<CgArrowRight className="h-14 w-14" />} title={"View Profile"} />
          </Link>
        </div>
      </div>
    </>
  )
}

export default SubscribeProfile
