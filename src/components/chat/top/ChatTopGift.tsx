import ChatGift from "components/chat/ChatGift"
import ChatGiftSuccess from "components/chat/ChatGiftSuccess"
import { MessageRoomInterface, RelationInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { AiFillGift } from "react-icons/ai"
import { IoMdHeart } from "react-icons/io"
import PopupWrapper from "utils/elements/PopupWrapper"
import Wrapper from "utils/elements/Wrapper"

const ChatTopGift = ({ room, relation }: { room: MessageRoomInterface; relation: RelationInterface }) => {
  const [gifted, setGifted] = useState(0)

  const [openGift, setOpenGift] = useState(false)
  const [openGiftSuccess, setOpenGiftSuccess] = useState(false)

  useEffect(() => {
    if (gifted > 0) {
      setOpenGift(false)
      setOpenGiftSuccess(true)
    }
  }, [gifted])

  return (
    <>
      <Wrapper open={relation.friends}>
        <div className="relative h-36 w-36">
          <button
            className={`relative flex h-36 w-36 cursor-pointer items-center justify-center rounded-4 hover:bg-grey-3 ${
              openGift ? "bg-grey-3" : ""
            }`}
            name={"Gift"}
            onClick={() => setOpenGift(true)}
          >
            <AiFillGift className="text-18 text-black" />
            <IoMdHeart className="absolute top-2 right-2 text-12 text-purple" />
          </button>
          <PopupWrapper handler={setOpenGift} open={openGift}>
            <ChatGift handler={setGifted} room={room} />
          </PopupWrapper>
          <PopupWrapper handler={setOpenGiftSuccess} open={openGiftSuccess}>
            <ChatGiftSuccess gifted={gifted} handler={setOpenGiftSuccess} room={room} />
          </PopupWrapper>
        </div>
      </Wrapper>
    </>
  )
}

export default ChatTopGift
