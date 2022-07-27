import { getterRecentEmojis, setterRecentEmojis } from "api/integration/cookies"
import Wrapper from "components/wrappers/Wrapper"
import { popularEmojis } from "libs/data/chat"
import { EmojiInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import ChatPopupTop from "utils/chat/popups/ChatPopupTop"
import Emojis from "utils/chat/popups/Emojis"
import PopupWrapper from "utils/elements/PopupWrapper"
import "emoji-mart/css/emoji-mart.css"

const EmojiPicker = ({
  open,
  handler,
  add,
  small
}: {
  open: boolean
  handler: any
  add: (emoji: string) => void
  small?: boolean
}) => {
  const [cookies, setCookie] = useCookies(["emoji"])

  const emojis = require("node-emoji")

  const [openFrequently, setOpenFrequently] = useState(false)
  const [search, setSearch] = useState("")
  const [recent, setRecent] = useState<EmojiInterface[]>([])
  const [results, setResults] = useState<EmojiInterface[]>([])

  useEffect(() => {
    onLoad()
    onRecent()
  }, [])

  useEffect(() => {
    onSearch()
    setOpenFrequently(false)
  }, [search])

  const onEnter = (e: any) => {
    if (e.key === "Enter") {
      onSearch()
    }
  }

  const onSearch = () => {
    if (search.length > 0) {
      setResults(emojis.search(search))
    }
  }

  const onLoad = () => {
    setRecent([])
  }

  const clearSearch = () => {
    setSearch("")
    setResults([])
  }

  const onRecent = () => {
    setRecent(getterRecentEmojis(cookies.emoji))
  }

  const addEmoji = (em: EmojiInterface) => {
    setterRecentEmojis(setCookie, cookies.emoji, {
      emoji: em.emoji,
      key: em.key
    })
    add(em.emoji)
  }

  return (
    <>
      <PopupWrapper handler={handler} open={open}>
        <div className="absolute right-0 bottom-40 z-20 w-full lg:w-[280px]">
          <div className="w-full rounded-4 border-1 border-grey-12 bg-white p-14 shadow-sm dark:shadow-none">
            <ChatPopupTop
              frequent={openFrequently}
              handlerClear={clearSearch}
              handlerEnter={onEnter}
              handlerFrequent={setOpenFrequently}
              handlerInput={setSearch}
              handlerSearch={onSearch}
              search={search}
              title={"Emojis"}
            />
            <Wrapper open={!openFrequently}>
              <div className="mb-10 w-full text-12 font-bold text-black">
                {search ? "Search results" : "Popular emojis"}
              </div>
              <Emojis add={addEmoji} emojis={search ? results : popularEmojis} small={small} />
            </Wrapper>
            <Wrapper open={openFrequently}>
              <div className="mb-10 w-full text-12 font-bold text-black">Recent emojis</div>
              <Emojis add={addEmoji} emojis={recent} small={small} />
            </Wrapper>
          </div>
        </div>
      </PopupWrapper>
    </>
  )
}

export default EmojiPicker
