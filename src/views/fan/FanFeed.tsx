import { storyApi } from "api/endpoints/story"
import FanFeatured from "components/fan/FanFeatured"
import FanFeedContent from "components/fan/FanFeedContent"
import Story from "components/stories/Story"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { StoryInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router"

type ParamType = {
  story: string
}

const FanFeed = () => {
  const { token } = useProps()

  const { story } = useParams<ParamType>()

  const [openStory, setOpenStory] = useState(false)
  const [activeStory, setActiveStory] = useState<StoryInterface>()

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onStory()

    return () => {
      setMounted(false)
    }
  }, [])

  useEffect(() => {
    setOpenStory(true)
  }, [activeStory])

  const onStory = async () => {
    if (!story) {
      return
    }

    const result = await storyApi(token, story)

    if (result && mounted) {
      const mappedStory = {
        ...result.brand,
        new: true,
        id: result.data.id,
        stories: [result.data.stories]
      }

      setActiveStory(mappedStory)
    }
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 items-start gap-20 md:gap-40 xl:grid-cols-[1fr,auto]">
        <FanFeedContent />
        <div className="stick hidden w-full lg:w-[240px] xl:flex">
          <FanFeatured />
        </div>
      </div>
      <Wrapper open={openStory}>
        {activeStory ? <Story handler={setOpenStory} mine={true} story={activeStory} /> : ""}
      </Wrapper>
    </>
  )
}

export default FanFeed
