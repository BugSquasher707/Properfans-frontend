import FanStoryBody from "components/fan/stories/FanStoryBody"
import Story from "components/stories/Story"
import StoryAdd from "components/stories/StoryAdd"
import { useProps } from "contexts/PropsContext"
import { StoryInterface } from "libs/interfaces"
import React, { useState } from "react"

const FanStory = ({
  story,
  last,
  add,
  mine,
  handlerUpdate
}: {
  story?: StoryInterface
  last?: boolean
  add: boolean
  mine?: boolean
  handlerUpdate: any
}) => {
  const { brandActive } = useProps()

  const [open, setOpen] = useState(false)
  const [openAdd, setOpenAdd] = useState(false)

  const onView = () => {
    setOpenAdd(false)

    if (story && story.stories && story.stories.length > 0) {
      setOpen(true)
    }
  }

  return (
    <>
      <FanStoryBody
        active={add}
        avatar={mine ? brandActive.avatar : story ? story.avatar : ""}
        handler={mine ? setOpenAdd : setOpen}
        last={last}
        username={mine ? "Your story" : story ? story.userName : ""}
      />
      {open && story && story.stories.length > 0 ? (
        <Story handler={setOpen} mine={mine ? true : false} story={story} />
      ) : (
        ""
      )}
      {mine && openAdd && brandActive && brandActive.id ? (
        <StoryAdd
          handler={setOpenAdd}
          handlerUpdate={handlerUpdate}
          story={story}
          view={onView}
        />
      ) : (
        ""
      )}
    </>
  )
}

export default FanStory
