import { avatarClubUpload, bannerClubUpload, createClub, updateClub, verifyClubHandle } from "api/endpoints/club"
import { createClubTier } from "api/endpoints/clubTier"
import { tagAvailable } from "api/endpoints/user"
import { checkTag } from "api/integration/checks"
import { urltoFile } from "api/integration/functions"
import { toastError, toastSuccess } from "api/integration/toaster"
import CreatorBrandAppearance from "components/creator/brand/CreatorBrandAppearance"
import CreatorBrandTips from "components/creator/brand/CreatorBrandTips"
import CreatorBrandFiles from "components/creator/brand/files/CreatorBrandFiles"
import CreatorTitle from "components/creator/CreatorTitle"
import { useProps } from "contexts/PropsContext"
import { REGEX, URL } from "libs/constants"
import { CreatorBrandType } from "libs/enums"
import { ProfileInterface, TitleInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useHistory } from "react-router"

const CreatorBrandDetails = ({
  brand,
  type,
  title,
  isUser
}: {
  brand: ProfileInterface
  type: CreatorBrandType
  title: string
  isUser: boolean
}) => {
  const { token, setLoading, user } = useProps()
  const history = useHistory()

  const [add, setAdd] = useState<boolean>(type === CreatorBrandType.Add)

  const [tips, setTips] = useState<number[]>([])

  const [id, setId] = useState("")
  const [name, setName] = useState("")
  const [tag, setTag] = useState("")
  const [tagOld, setTagOld] = useState("")
  const [verified, setVerified] = useState(false)
  const [biography, setBiography] = useState("")

  const [avatar, setAvatar] = useState("")
  const [avatarNew, setAvatarNew] = useState<File[]>([])
  const [banner, setBanner] = useState("")
  const [bannerNew, setBannerNew] = useState<File[]>([])

  const [availableTag, setAvailableTag] = useState(true)

  const [profile, setProfile] = useState<ProfileInterface>()

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [brand])

  useEffect(() => {
    setAdd(type === CreatorBrandType.Add)
  }, [type])

  useEffect(() => {
    updateProfile()
  }, [name, tag, biography, avatar, banner, verified])

  const [brandTips] = useState<TitleInterface[]>([
    { title: "avatar", text: "Upload your club avatar" },
    { title: "banner", text: "Upload your club banner" },
    { title: "name", text: "Add your club name" },
    { title: "handle", text: "Add your club handle" },
    { title: "biography", text: "Add your club biography" }
  ])

  useEffect(() => {
    validateBrand()
  }, [profile])

  const onAvatar = async (newFile: string) => {
    if (newFile) {
      setAvatar(newFile)

      const newAvatar = await urltoFile(newFile, `proper-avatar.jpeg`, "image/jpeg")
      setAvatarNew([newAvatar])
    }
  }

  const onBanner = async (newFile: string) => {
    if (newFile) {
      setBanner(newFile)

      const newBanner = await urltoFile(newFile, `proper-banner.jpeg`, "image/jpeg")
      setBannerNew([newBanner])
    }
  }

  const onLoad = async () => {
    if (!mounted) {
      return
    }

    if (type === CreatorBrandType.Add) {
      setId("")
      setName("")
      setTag("")
      setTagOld("")
      setVerified(false)
      setAvatar("")
      setAvatarNew([])
      setBanner("")
      setBannerNew([])
      setBiography("")
    } else if (type === CreatorBrandType.Edit) {
      if (!brand) {
        return
      }

      setId(brand.id)
      setName(brand.userName)
      setTag(brand.handle)
      setTagOld(brand.handle)
      setVerified(brand.verified)
      setAvatar(brand.avatar)
      setAvatarNew([])
      setBanner(brand.banner)
      setBannerNew([])
      setBiography(brand.biography)
    }
  }

  const updateProfile = () => {
    setProfile({
      id: id,
      avatar: avatar,
      banner: banner,
      biography: biography,
      userName: name,
      verified: verified,
      handle: tag
    })
  }

  const validateBrand = () => {
    if (profile) {
      const newTips = []

      if (!profile.avatar) {
        newTips.push(0)
      }

      if (!profile.banner) {
        newTips.push(1)
      }

      if (!profile.userName) {
        newTips.push(2)
      }

      if (!profile.handle) {
        newTips.push(3)
      }

      if (!profile.biography) {
        newTips.push(4)
      }

      setTips(newTips)
    }
  }

  useEffect(() => {
    tagInput()
  }, [tag])

  const onSubmit = async () => {
    if (!name.match(REGEX.NAME)) {
      toastError("Enter a username only with letters, numbers and special characters (!@#$%^&*()?]*$)")
      return
    }

    if (!name || name.length < 4) {
      toastError("Enter a username of at least length 4")
      return
    }

    if (!availableTag) {
      toastError("Enter a valid handle")
      return
    }

    if (!tag.match(REGEX.TAG)) {
      toastError("Enter a handle only with lowercase letters or an under score (_), no uppercase or special characters")
      return
    }

    if (!tag || tag.length < 4) {
      toastError("Enter a handle of at least length 4")
      return
    }

    if (!avatar) {
      toastError("Upload an avatar")
      return
    }

    if (!banner) {
      toastError("Upload a banner")
      return
    }

    if (!biography) {
      toastError("Enter a biography")
      return
    }

    if (type === CreatorBrandType.Add) {
      const clubData = {
        userName: name,
        handle: tag,
        biography: biography,
        owner: user.id,
        verified: true
      }

      const result = await createClub(clubData, token)

      if (result.data) {
        const data = {
          tierName: "Tier 1",
          tierLevel: 1,
          price: 0,
          brandId: result.data.id
        }

        await createClubTier(data, token, result.data.id)

        const refreshURL = URL.CREATOR.DASHBOARD.CLUBS
        onUpload(result.data, refreshURL)
      }
    } else if (type === CreatorBrandType.Edit) {
      const clubData = { userName: name, handle: tag, biography: biography }
      const result = await updateClub(clubData, token, id)

      if (result.data) {
        const refreshURL = URL.CREATOR.DASHBOARD.CLUBS
        onUpload(result.data, refreshURL)
      }
    }
  }

  const validateTag = async () => {
    if (type === CreatorBrandType.Add) {
      const result = await verifyClubHandle(token, tag)

      return result && result.available
    }

    if (type === CreatorBrandType.Edit) {
      const result = await tagAvailable(token, tag)

      return result && result.available
    }
  }

  const tagInput = async () => {
    if (type === CreatorBrandType.Add) {
      if (tag) {
        const available = (await checkTag(tag, false)) && (await validateTag())

        setAvailableTag(available)
      }
    } else if (type === CreatorBrandType.Edit) {
      if (tag && tagOld) {
        const available = ((await checkTag(tag, false)) && (await validateTag())) || tag === tagOld

        setAvailableTag(available)
      }
    }
  }

  const onUpload = async (result: any, url?: string) => {
    if (avatar && avatarNew && avatarNew.length > 0) {
      const resultAvatar = await avatarClubUpload(token, avatarNew[0], result.id)

      if (resultAvatar) {
        toastSuccess("Uploaded avatar")
      }
    }

    if (banner && bannerNew && bannerNew.length > 0) {
      const resultBanner = await bannerClubUpload(token, bannerNew[0], result.id)

      if (resultBanner) {
        toastSuccess("Uploaded banner")
      }
    }

    if (url) {
      history.push(url)
    }

    const successBrand = add ? "Successfully created club" : "Successfully saved club"
    const successUser = "Successfully saved profile"

    toastSuccess(user ? successUser : successBrand)
    setLoading(true)
  }

  return (
    <>
      <CreatorTitle title={title} />
      <div className="mb-20 w-full">
        <CreatorBrandTips brandTips={brandTips} tips={tips} />
      </div>
      <CreatorBrandFiles avatar={avatar} banner={banner} setAvatar={onAvatar} setBanner={onBanner} />
      <div className="my-12 w-full border-b-1 border-grey-6 sm:my-20"></div>
      <CreatorBrandAppearance
        availableTag={availableTag}
        biography={biography}
        handlers={{ setName, setTag, setBiography, onSubmit }}
        name={name}
        tag={tag}
        user={isUser}
      />
    </>
  )
}

export default CreatorBrandDetails
