import { ProfileInterface } from "libs/interfaces"
import React from "react"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"
import ProfileUser from "utils/profile/ProfileUser"

const CreatorProfile = ({ profile }: { profile: ProfileInterface }) => {
  return (
    <>
      <div className="relative mb-20 flex w-full flex-wrap overflow-hidden rounded-t-4 px-12 pt-12 xs:px-20 xs:pt-20 sm:px-30 sm:pt-30 md:mb-30 md:px-40 md:pt-40">
        {profile.banner ? <BannerFilled banner={profile.banner} /> : <Banner />}
        <div className="relative w-full">
          <ProfileUser
            avatar={profile.avatar}
            tag={profile.handle}
            username={profile.userName}
            verified={profile.verified}
          />
          <div className="w-full text-center text-14 text-grey-40">
            {profile.biography ? profile.biography : "Biography"}
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatorProfile
