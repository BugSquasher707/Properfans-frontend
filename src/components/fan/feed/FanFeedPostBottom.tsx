import { addComment } from "api/endpoints/comment"
import { messageAddEmoji, messageChangeMessage } from "api/integration/chat"
import { ReactComponent as Upgrade } from "assets/img/upgrade.svg"
import { useProps } from "contexts/PropsContext"
import { FeedInterface } from "libs/interfaces"
import React, { useState } from "react"
import { VscSmiley } from "react-icons/vsc"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import EmojiPickerMart from "utils/chat/popups/EmojiPickerMart"

const FanFeedPostBottom = ({
  post,
  fullscreen,
  openComment,
  handler,
  index,
  handlerLoad,
  handlerPage
}: {
  post: FeedInterface
  fullscreen: boolean
  openComment: boolean
  handler: any
  index: number
  handlerLoad: any
  handlerPage: any
}) => {
  const { token, user } = useProps()

  const [message, setMessage] = useState("")
  const [openEmoji, setOpenEmoji] = useState(false)

  const addEmoji = (emoji: string) => {
    setMessage(messageAddEmoji(message, emoji))
  }

  const changeMessage = (e: string) => {
    setMessage(messageChangeMessage(message, e))
  }

  const onSubmit = async () => {
    if (!message) {
      return
    }

    const data = {
      comment: message,
      postId: post.id,
      userId: user.id,
      userName: user.userName,
      avatar: user.avatar,
      handle: user.handle,
      verified: true
    }

    const result = await addComment(token, data)

    if (result.status) {
      setMessage("")
      handler(index, result.data)
      handlerLoad()
      handlerPage()
    }
  }

  const onEnter = (key: string) => {
    if (key === "Enter") {
      onSubmit()
    }
  }

  return (
    <>
      <div className="grid w-full grid-cols-1">
        {fullscreen || openComment ? (
          <div className="grid h-46 w-full grid-cols-[1fr,auto] gap-10 rounded-4 bg-grey-3 p-4 pl-16">
            <input
              className="placeholder-grey-40::placeholder w-full text-14 font-semibold text-black"
              placeholder="Write a comment..."
              type="text"
              value={message}
              onChange={(e) => changeMessage(e.target.value)}
              onKeyDown={(e) => onEnter(e.key)}
            />
            <div className="relative">
              <button
                className="center group h-38 w-38 flex-none rounded-4 hover:bg-grey-3"
                onClick={() => setOpenEmoji(!openEmoji)}
              >
                <VscSmiley className="text-grey-40 group-hover:text-black" />
              </button>
              <EmojiPickerMart add={addEmoji} handler={setOpenEmoji} open={openEmoji} />
            </div>
          </div>
        ) : (
          ""
        )}
        {post.locked && post.subscription !== undefined ? (
          <ButtonPurple
            action={() => null}
            icon={<Upgrade className="fill-current text-white" />}
            title={"Level Up Subscription"}
            full
          />
        ) : (
          ""
        )}
      </div>
    </>
  )
}

export default FanFeedPostBottom
