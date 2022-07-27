import { urltoFile } from "api/integration/functions"
import CreatorBrandFilesMiddle from "components/creator/brand/files/CreatorBrandFilesMiddle"
import { useProps } from "contexts/PropsContext"
import React, { useEffect } from "react"

const SetupAvatar = ({ avatar, banner, handler }: { avatar: string; banner: string; handler: any }) => {
  const { user } = useProps()

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    if (user && user.avatar) {
      handler.setAvatar(user.avatar)
    }

    if (user && user.banner) {
      handler.setBanner(user.banner)
    }
  }

  const onAvatar = async (newFile: string) => {
    if (newFile) {
      handler.setAvatar(newFile)

      const newAvatar = await urltoFile(newFile, `proper-avatar.jpeg`, "image/jpeg")
      handler.setAvatarNew([newAvatar])
    }
  }

  const onBanner = async (newFile: string) => {
    if (newFile) {
      handler.setBanner(newFile)

      const newBanner = await urltoFile(newFile, `proper-banner.jpeg`, "image/jpeg")

      handler.setBannerNew([newBanner])
    }
  }

  return (
    <>
      <div className="w-full">
        <CreatorBrandFilesMiddle avatar={avatar} banner={banner} setAvatar={onAvatar} setBanner={onBanner} />
      </div>
    </>
  )
}

export default SetupAvatar
