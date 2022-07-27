import FanCreatorButtons from "components/fan/elements/FanCreatorButtons"
import { URL } from "libs/constants"
import { CreatorFanInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"
import PopupFollowers from "utils/buttons/PopupFollowers"
import PopupSubscribers from "utils/buttons/PopupSubscribers"
import ProfileUserBottom from "utils/profile/ProfileUserBottom"

const FanCreatorProfile = ({ profile }: { profile: CreatorFanInterface }) => {
  return (
    <>
      <div className="relative flex w-full flex-wrap overflow-hidden rounded-4">
        {profile.creator.banner ? <BannerFilled banner={profile.creator.banner} /> : <Banner />}
        <div className="relative w-full rounded-4 border-1 border-grey-12 p-16">
          <div className="mb-12 flex w-full justify-center">
            <Link
              className="flex h-52 w-52 items-center"
              to={URL.BRANDS.BASE.replace(":param", profile.creator.handle)}
            >
              {profile.creator.avatar ? (
                <img alt="" className="h-52 w-52 overflow-hidden rounded-full" src={profile.creator.avatar} />
              ) : (
                <Avatar size={52} />
              )}
            </Link>
          </div>
          <div className="mb-12 w-full">
            <ProfileUserBottom
              small={false}
              tag={profile.creator.handle}
              username={profile.creator.userName}
              verified={true}
            />
          </div>
          <div className="center flex w-full space-x-[30px]">
            <PopupFollowers brand={profile.creator} title={"Fan"} value={profile.followers ?? 0} />
            <PopupSubscribers brand={profile.creator} title={"Properfan"} value={profile.subscribers ?? 0} />
          </div>
          {profile.creator.biography ? (
            <div className="mt-20 w-full text-center text-14 text-grey-40 line-clamp-2 sm:h-[33px]">
              {profile.creator.biography}
            </div>
          ) : (
            ""
          )}
          <div className="my-16 w-full border-b-1 border-grey-6"></div>
          <FanCreatorButtons profile={profile} />
        </div>
      </div>
    </>
  )
}

export default FanCreatorProfile
