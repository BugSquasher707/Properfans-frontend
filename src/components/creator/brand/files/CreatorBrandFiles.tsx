import CreatorBrandFilesMiddle from "components/creator/brand/files/CreatorBrandFilesMiddle"
import React from "react"

const CreatorBrandFiles = ({
  avatar,
  banner,
  setAvatar,
  setBanner
}: {
  avatar: string
  banner: string
  setAvatar: any
  setBanner: any
}) => {
  return (
    <>
      <div className="mb-10 w-full text-12 font-bold text-grey-40">Avatar and header</div>
      <CreatorBrandFilesMiddle avatar={avatar} banner={banner} setAvatar={setAvatar} setBanner={setBanner} />
      <div className="mb-4 w-full text-14 font-bold text-black">Guide</div>
      <div className="w-full text-14 text-grey-40">
        PNG or JPG files, recommended dimensions for avatars are 1:1 and for headers is 22:9 or wider
      </div>
    </>
  )
}

export default CreatorBrandFiles
