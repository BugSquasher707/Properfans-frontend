import React from "react"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"

const MeetBanner = ({ banner, full }: { banner: string; full?: boolean }) => {
  return <>{banner ? <BannerFilled banner={banner} full={full} /> : <Banner full={full} />}</>
}

export default MeetBanner
