import { storyAllApi, storyMyApi } from "api/endpoints/story"
import FanStory from "components/fan/stories/FanStory"
import SkeletonStory from "components/skeleton/SkeletonStory"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { StoryInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import ScrollContainer from "react-indiana-drag-scroll"

const FanStories = () => {
  const { token, user } = useProps()

  const [myStories, setMyStories] = useState<StoryInterface>()
  const [stories, setStories] = useState<StoryInterface[]>([])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  const onLoad = async () => {
    let resultStories = await storyAllApi(token)
    console.log(resultStories)

    resultStories = resultStories.data
    console.log(resultStories)

    if (mounted) {
      setStories(resultStories && resultStories.length > 0 ? resultStories : [])
    }

    if (!user.creator) {
      return
    }

    const resultMyStories = await storyMyApi(token, user.handle)

    if (mounted && resultMyStories && resultMyStories.length > 0) {
      setMyStories(resultMyStories[0])
    }
  }

  return (
    <>
      <Wrapper open={user.creator || (stories && stories.length > 0)}>
        <div className="w-full">
          <div className="relative flex h-100 w-full flex-wrap">
            <div className="absolute top-0 right-0 left-0 flex">
              <ScrollContainer className="relative max-w-full">
                <div className="flex w-max space-x-[10px] overflow-x-scroll">
                  <Wrapper open={user.creator}>
                    <FanStory
                      add={(myStories && myStories.stories.length > 0) ?? false}
                      handlerUpdate={onLoad}
                      story={myStories}
                      mine
                    />
                  </Wrapper>
                  {stories && stories.length > 0 ? (
                    <div className="flex space-x-[10px]">
                      {stories.map((story: StoryInterface, key: number) => (
                        <FanStory
                          key={key}
                          handlerUpdate={onLoad}
                          last={stories.length - 1 === key}
                          story={story}
                          add
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="flex space-x-[10px]">
                      <SkeletonStory />
                      <SkeletonStory />
                      <SkeletonStory />
                      <SkeletonStory />
                    </div>
                  )}
                </div>
              </ScrollContainer>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default FanStories
