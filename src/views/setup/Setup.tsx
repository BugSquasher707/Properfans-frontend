import { avatarUpload, bannerUpload, setupFinish, tagAvailable } from "api/endpoints/user"
import { checkTag } from "api/integration/checks"
import { toastError, toastSuccess } from "api/integration/toaster"
import SetupSlides from "components/setup/SetupSlides"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { ERR } from "libs/constants"
import { SetupSlideType } from "libs/enums"
import React, { useEffect, useState } from "react"
import { MdCheck } from "react-icons/md"
import SetupSuccess from "views/setup/SetupSuccess"

const Setup = () => {
  const { token, user, onReset } = useProps()

  const [openSuccess, setOpenSuccess] = useState(false)

  const [count] = useState(4)
  const [step, setStep] = useState(1)

  const [username, setUsername] = useState("")
  const [tag, setTag] = useState("")

  const [avatar, setAvatar] = useState("")
  const [avatarNew, setAvatarNew] = useState([])
  const [banner, setBanner] = useState("")
  const [bannerNew, setBannerNew] = useState([])

  const [content, setContent] = useState<boolean[]>(Array(9).fill(false))
  const [creators, setCreators] = useState<string[]>([])

  const [availableTag, setAvailableTag] = useState<boolean | undefined>()

  useEffect(() => {
    tagInput()
  }, [tag])

  const validateTag = async () => {
    const result = await tagAvailable(token, tag)

    if (result) {
      console.log(result)
      return result.available
    }

    return false
  }

  const tagInput = async () => {
    if (tag) {
      const available = (await checkTag(tag, false)) && (await validateTag())

      setAvailableTag(available)
    } else {
      setAvailableTag(undefined)
    }
  }

  const stepUp = async () => {
    if (step === 1 && !username) {
      toastError("Enter a username")
      return
    } else if (step === 2 && !availableTag) {
      if (checkTag(tag, true)) {
        const available = await validateTag()

        if (!available) {
          toastError("Handle is not available")
        } else {
          setStep(step + 1)
        }

        setAvailableTag(available)
      } else {
        setAvailableTag(false)
      }
      return
    }

    setStep(step + 1)
  }

  const steps = ["Username", "Handle", "Profile", "Categories"]

  const slides = [
    {
      title: "Username",
      text: "Let's set your username, choose something cool and available. You'll be able to change it later on",
      type: SetupSlideType.Name
    },
    {
      title: "Handle",
      text: "Choose handle for your profile page. Make sure the handle you're going for is available, if not you have to choose different one.",
      type: SetupSlideType.Handle
    },
    {
      title: "Profile",
      text: "After choosing your username it's good idea to upload a cool avatar, in the end it's lame to use the default one",
      type: SetupSlideType.Avatar
    },
    {
      title: "Categories",
      text: "Let us know what kind of content excites you, that way we'll be able to show you just what you enjoy",
      type: SetupSlideType.Categories
    }
  ]

  const onSubmit = async () => {
    if (!(username && tag && content && creators)) {
      toastError(ERR.REFRESH)
      return
    }

    if (content && content.length === 0) {
      toastError("Select at least 1 content category")
      return
    }

    const data = {
      userName: username,
      handle: tag,
      favCategoryList: content,
      userId: user.id
    }

    const result: any = await setupFinish(token, data)

    if (result && result.data) {
      onUpload(result.data.id)
    }
  }

  const onUpload = async (id: any) => {
    if (avatar && avatarNew && avatarNew.length > 0) {
      const resultAvatar = await avatarUpload(token, avatarNew[0], id)

      if (resultAvatar) {
        toastSuccess("Avatar uploaded")
      }
    }

    if (bannerNew && bannerNew.length > 0) {
      const resultBanner = await bannerUpload(token, bannerNew[0], id)

      if (resultBanner) {
        toastSuccess("Banner uploaded")
      }
    }

    setOpenSuccess(true)
  }

  const onComplete = () => {
    toastSuccess("Successfully setup your account")
    window.location.reload()
    window.location.href = "/"
  }

  const [slide, setSlide] = useState(slides[step])

  useEffect(() => {
    setSlide(slides[step - 1])
  }, [step])

  return (
    <>
      <div className="flex h-screen w-full flex-col gap-80 px-20 py-20 sm:px-30 sm:py-30 md:px-40 md:py-80">
        <div className="grid w-full grid-cols-1 gap-40">
          <div className="relative grid w-full grid-cols-1 gap-30">
            <button
              className="relative top-6 left-0 text-14 text-grey-40 hover:text-black md:absolute"
              onClick={onReset}
            >
              Sign out
            </button>
            <div className="font-momentum-black w-full text-center text-24 text-black sm:text-28 md:text-30">
              Finalize profile & feed
            </div>
            <div className="flex w-full items-center justify-center gap-20">
              {steps.map((entry: string, key: number) => (
                <div key={key} className="flex items-center justify-center gap-16">
                  <Wrapper open={key !== 0}>
                    <div
                      className={`w-20 border-b-1 border-grey-10 sm:w-30 md:w-40 ${
                        slide.type === key || slide.type + 1 === key ? "" : "hidden md:flex"
                      }`}
                    ></div>
                  </Wrapper>
                  <button className="flex items-center justify-center gap-12" onClick={() => setStep(key + 1)}>
                    <div
                      className={`flex h-30 w-30 items-center justify-center rounded-full border-1 bg-white text-14 text-grey-40 ${
                        slide.type === key ? "border-grey-20" : "border-grey-10"
                      } ${slide.type === key || slide.type - 1 === key ? "" : "mr-[-24px] md:mr-0"}`}
                    >
                      {slide.type === key ? <MdCheck className="text-16 text-purple" /> : key + 1}
                    </div>
                    <div
                      className={`text-14 font-bold ${
                        slide.type === key ? "text-black" : "hidden text-grey-60 md:flex"
                      }`}
                    >
                      {entry}
                    </div>
                  </button>
                </div>
              ))}
            </div>
            <div className="h-4 w-full rounded-full bg-grey-4">
              <div
                className="tr h-4 w-full rounded-full bg-purple"
                style={{ width: `${(slide.type + 1) * (100 / count)}%` }}
              ></div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-grow">
          <SetupSlides
            handlers={{
              setAvatar,
              setAvatarNew,
              setBanner,
              setBannerNew,
              setUsername,
              setTag,
              setContent,
              setCreators,
              stepUp,
              onSubmit
            }}
            available={availableTag}
            avatar={avatar}
            banner={banner}
            slide={slide}
            tag={tag}
            username={username}
          />
        </div>
      </div>
      <Wrapper open={openSuccess}>
        <SetupSuccess avatar={avatar} handler={onComplete} tag={tag} username={username} />
      </Wrapper>
    </>
  )
}

export default Setup
