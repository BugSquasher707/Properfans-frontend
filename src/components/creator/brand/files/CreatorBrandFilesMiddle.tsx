import CreatorBrandFilesDropdown from "components/creator/brand/files/CreatorBrandFilesDropdown"
import { UploadType } from "libs/enums"
import React from "react"
import Avatar from "utils/avatars/Avatar"
import Banner from "utils/banners/Banner"
import BannerFilled from "utils/banners/BannerFilled"
import ButtonAvatarCutOut from "utils/buttons/ButtonAvatarCutOut"

const CreatorBrandFilesMiddle = ({
  avatar,
  banner,
  setAvatar,
  setBanner,
  purple
}: {
  avatar: string
  banner: string
  setAvatar: any
  setBanner: any
  purple?: boolean
}) => {
  return (
    <>
      <div className="relative mb-20 flex h-[145px] w-full flex-wrap rounded-t-4 px-12 pt-12 xs:px-20 xs:pt-20 sm:px-30 sm:pt-30 md:mb-30 md:px-40 md:pt-40">
        {banner && banner.length ? <BannerFilled banner={banner} purple={purple} /> : <Banner purple={purple} />}
        <div className="relative flex h-72 w-full items-center justify-center">
          <div className="relative h-72 w-72">
            <ButtonAvatarCutOut>
              {avatar && avatar.length > 0 ? (
                <img alt="" className="h-72 w-72 overflow-hidden rounded-full" src={avatar} />
              ) : (
                <Avatar size={72} />
              )}
            </ButtonAvatarCutOut>
            <div className="absolute top-[-4px] right-[-4px]">
              <CreatorBrandFilesDropdown file={avatar} setFileNew={setAvatar} type={UploadType.Avatar} />
            </div>
          </div>
        </div>
        <div className="absolute top-12 right-12">
          <CreatorBrandFilesDropdown file={banner} setFileNew={setBanner} type={UploadType.Banner} />
        </div>
      </div>
    </>
  )
}

export default CreatorBrandFilesMiddle
