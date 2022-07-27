import { ProfileInterface } from "libs/interfaces"
import React from "react"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"
import ProfileUser from "utils/profile/ProfileUser"
import ProfileUserSmall from "utils/profile/ProfileUserSmall"

const FanProfile = ({ profile, small }: { profile: ProfileInterface; small?: boolean }) => {
  return (
    <>
      <div className="relative flex w-full flex-wrap rounded-4">
        {profile.banner ? <BannerFilled banner={profile.banner} /> : <Banner />}
        <div
          className={`relative w-full rounded-4 ${
            small
              ? "border-1 border-grey-12 p-20 hover:border-transparent hover:shadow-lg"
              : "px-12 pt-12 xs:px-20 xs:pt-20 sm:px-30 sm:pt-30 md:px-40 md:pt-40"
          }`}
        >
          {small ? (
            <ProfileUserSmall
              avatar={profile.avatar}
              tag={profile.handle}
              username={profile.userName}
              verified={profile.verified}
            />
          ) : (
            <ProfileUser
              avatar={profile.avatar}
              tag={profile.handle}
              username={profile.userName}
              verified={profile.verified}
            />
          )}

          <div className="mb-30 w-full text-center text-14 text-grey-40">{profile.biography}</div>
        </div>
      </div>
    </>
  )
}

export default FanProfile
