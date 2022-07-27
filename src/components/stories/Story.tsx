import { useInterval } from "api/integration/functions"
import StoryBottom from "components/stories/StoryBottom"
import StoryTop from "components/stories/StoryTop"
import StoryWrapper from "components/stories/StoryWrapper"
import Wrapper from "components/wrappers/Wrapper"
import { StoryBrandInterface, StoryInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { IoMdPlay } from "react-icons/io"
import { MdPause } from "react-icons/md"
import { useSwipeable } from "react-swipeable"

const Story = ({ story, handler, mine }: { story: StoryInterface; handler: any; mine: boolean }) => {
  const [viewing, setViewing] = useState(0)
  const [timer, setTimer] = useState(0)

  const [cap] = useState(12000)
  const [delay] = useState(10)

  const [stories, setStories] = useState<StoryBrandInterface[]>([])
  const [storyActive, setStoryActive] = useState<StoryBrandInterface>()

  const [playing, setPlaying] = useState(true)
  const [img, setImg] = useState(false)

  useEffect(() => {
    setStories(story ? story.stories : [])
  }, [])

  useEffect(() => {
    setViewing(0)
    setTimer(0)

    if (stories && stories.length > 0) {
      setStoryActive(stories[0])
    }
  }, [stories])

  useEffect(() => {
    if (stories && stories.length > viewing) {
      setStoryActive(stories[viewing])
    }

    setImg(false)
  }, [viewing])

  useEffect(() => {
    if (!img) {
      setPlaying(true)
      setImg(true)
    }
  }, [img])

  const swipeable = useSwipeable({
    onSwipedLeft: () => {
      nextStory(1)
    },
    onSwipedRight: () => {
      nextStory(-1)
    }
  })

  const nextStory = (index: number) => {
    if (stories) {
      if (0 <= viewing + index && viewing + index < stories.length) {
        setTimer(0)
        setViewing(viewing + index)
      } else if (0 > viewing + index) {
        setTimer(0)
        setViewing(0)
      } else if (viewing + index === stories.length) {
        if (timer === cap) {
          setPlaying(false)
        }
      } else {
        handler(false)
      }
    }
  }

  useInterval(
    () => {
      setTimer(timer + delay)

      if (timer / cap >= 1) {
        setTimer(cap)
        nextStory(1)
      }
    },
    playing ? delay : null
  )

  return (
    <>
      <StoryWrapper handler={handler} title={"Content posted on"}>
        {storyActive ? (
          <div {...swipeable} className="relative h-full w-full rounded-4 bg-white-10">
            <div className="aspect-w-9 aspect-h-16 w-full">
              {img && storyActive.url ? <img alt="" className="w-full rounded-4" src={storyActive.url} /> : ""}
              <div className="absolute top-0 left-0 grid h-full w-full grid-cols-[1fr,4fr]">
                <button
                  className="h-full w-full"
                  onClick={() => {
                    nextStory(-1)
                  }}
                ></button>
                <button
                  className="h-full w-full"
                  onClick={() => {
                    nextStory(1)
                  }}
                ></button>
              </div>
            </div>
            <Wrapper open={!playing}>
              <div className="absolute top-0 left-0 flex h-full w-full items-center justify-center">
                <div className="group grid w-[130px] grid-cols-1 gap-12">
                  <button
                    className="flex h-[130px] w-[130px] items-center justify-center rounded-full bg-grey-12"
                    onClick={() => setPlaying(true)}
                  >
                    <MdPause className="flex text-40 text-white group-hover:hidden" />
                    <IoMdPlay className="hidden text-40 text-white group-hover:flex" />
                  </button>
                  <div className="flex w-full justify-center text-12 font-bold text-white-60 group-hover:hidden">
                    Pause
                  </div>
                  <div className="hidden w-full justify-center text-12 font-bold text-white-60 group-hover:flex">
                    Play
                  </div>
                </div>
              </div>
            </Wrapper>
            <div className="absolute top-0 left-0 h-100 w-full bg-gradient-to-t from-transparent to-grey-40"></div>
            <StoryTop
              active={storyActive}
              cap={cap}
              close={handler}
              mine={mine}
              pause={setPlaying}
              playing={playing}
              story={story}
              timer={timer}
              viewing={viewing}
            />
            <StoryBottom id={storyActive.id} />
          </div>
        ) : (
          ""
        )}
      </StoryWrapper>
    </>
  )
}

export default Story
