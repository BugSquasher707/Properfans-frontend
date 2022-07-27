import { statusApi } from "api/endpoints/status"
import { addStory } from "api/endpoints/story"
import { urltoFile } from "api/integration/functions"
import { toastError, toastSuccess } from "api/integration/toaster"
import FanStoryAvatar from "components/fan/stories/FanStoryAvatar"
import ModalUpload from "components/modals/files/ModalUpload"
import StoryAddPost from "components/stories/StoryAddPost"
import StoryWrapper from "components/stories/StoryWrapper"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { SubscriptionTierType, UploadType } from "libs/enums"
import { StoryInterface, TierInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdAdd, MdClose } from "react-icons/md"

const StoryAdd = ({
  story,
  handler,
  handlerUpdate,
  view
}: {
  story?: StoryInterface
  handler: any
  handlerUpdate: any
  view: any
}) => {
  const { brandActive, token, user } = useProps()

  const [file, setFile] = useState("")
  const [fileNew, setFileNew] = useState<File[]>([])

  const [tier, setTier] = useState<TierInterface>()
  const [tierPublic] = useState<TierInterface>({
    id: "1",
    priceId: "public",
    tierName: "Public",
    tierLevel: SubscriptionTierType.Tier0,
    image: "",
    price: 0,
    perks: [],
    popular: false
  })
  const [tiers, setTiers] = useState<TierInterface[]>([])

  const [openUpload, setOpenUpload] = useState(false)
  const [loading, setLoading] = useState(false)

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  useEffect(() => {
    if (tiers && tiers.length > 0) {
      setTier(tiers[0])
    }
  }, [tiers])

  const onLoad = async () => {
    if (!brandActive.id) {
      toastError("You have to select or create a club before you can post stories")
      return
    }

    console.log(token)

    const result = await statusApi()

    if (mounted) {
      setTiers([tierPublic].concat(result && result.length > 0 ? result : []))
    }
  }

  const onSubmit = async () => {
    if (loading) {
      return
    }

    if (!fileNew) {
      toastError("Upload a story to post")
      return
    }

    if (!tier) {
      toastError("Select a tier")
      return
    }

    setLoading(true)

    const data = new FormData()

    data.append("media", fileNew[0])
    data.append("handle", brandActive.handle)
    data.append("brandId", brandActive.id)
    data.append("userName", brandActive.userName)
    data.append("avatar", brandActive.avatar)
    data.append("userId", user.id)

    const result = await addStory(token, data)

    if (result) {
      handler(false)
      handlerUpdate()
      toastSuccess("Successfully uploaded your story")
    }

    setLoading(false)
  }

  const onRemove = () => {
    setFile("")
    setFileNew([])
  }

  const onStory = async (newFile: string) => {
    if (newFile) {
      setFile(newFile)

      const newStory = await urltoFile(newFile, `proper-story-${new Date().getTime()}.jpeg`, "image/jpeg")
      setFileNew([newStory])
    }
  }

  return (
    <>
      <StoryWrapper handler={handler} title={"Post your story on"}>
        <div className="relative flex h-full max-h-full w-full items-center rounded-4">
          <button
            className="free fixed top-20 right-20 z-50 flex h-32 w-32 items-center justify-center sm:hidden"
            onClick={() => handler(false)}
          >
            <MdClose className="text-24 text-white" />
          </button>
          <div
            className={`grid
           w-full grid-cols-1 gap-10 ${file ? "h-full" : ""}`}
          >
            {file ? (
              <div className="relative flex h-full w-full items-end overflow-hidden rounded-4">
                <img
                  alt={""}
                  className="absolute top-[50%] left-[50%] max-h-full min-h-full min-w-full translate-x-[-50%] translate-y-[-50%] transform"
                  src={file}
                />
                <StoryAddPost
                  handlerRemove={onRemove}
                  handlerSubmit={onSubmit}
                  handlerTier={setTier}
                  loading={loading}
                  tier={tier}
                  tiers={tiers}
                />
              </div>
            ) : (
              <button
                className="grid w-full grid-cols-1 gap-12 rounded-4 border-1 border-white-10 p-40 hover:border-white-20 hover:bg-white-10 sm:gap-20 md:gap-24
                md:p-60"
                onClick={() => setOpenUpload(true)}
              >
                <div className="flex w-full justify-center">
                  <div className="flex h-60 w-60 items-center justify-center rounded-full border-4 border-purple">
                    <MdAdd className="text-28 text-purple" />
                  </div>
                </div>
                <div className="w-full text-center text-14 font-bold text-white">Post new story</div>
              </button>
            )}
            <Wrapper open={story && story.stories && story.stories.length > 0 && !file}>
              <button
                className="grid w-full grid-cols-1 gap-12 rounded-4 border-1 border-white-10 p-40 hover:border-white-20 hover:bg-white-10 sm:gap-20 md:gap-24 md:p-60"
                onClick={() => view()}
              >
                <div className="flex w-full justify-center">
                  <FanStoryAvatar active={true} avatar={brandActive.avatar} />
                </div>
                <div className="w-full text-center text-14 font-bold text-white">View your story</div>
              </button>
            </Wrapper>
          </div>
        </div>
      </StoryWrapper>
      <ModalUpload file={file} handler={setOpenUpload} open={openUpload} setFileNew={onStory} type={UploadType.Story} />
    </>
  )
}

export default StoryAdd
