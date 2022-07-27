import { getterRecentGifs, setterRecentGifs } from "api/integration/cookies"
import { parseError } from "api/integration/errors"
import axios from "axios"
import { TENOR_ID } from "libs/constants"
import React, { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import ChatPopupTop from "utils/chat/popups/ChatPopupTop"
import Gifs from "utils/chat/popups/Gifs"
import PopupWrapper from "utils/elements/PopupWrapper"

const GifPicker = ({
  open,
  handler,
  send
}: {
  open: boolean
  handler: any
  send: (gif: string, preview: string) => void
}) => {
  const [cookies, setCookie] = useCookies(["gifs"])

  const [openFrequently, setOpenFrequently] = useState(false)
  const [search, setSearch] = useState("")
  const [results, setResults] = useState<any[]>([])
  const [recent, setRecent] = useState<any[]>([])

  useEffect(() => {
    onSearch()
    onRecent()
  }, [])

  useEffect(() => {
    if (open) {
      onSearch()
    }
  }, [open])

  const onEnter = (e: any) => {
    if (e.key === "Enter") {
      onSearch()
    }
  }

  const clearSearch = () => {
    setSearch("")
    setResults([])
  }

  const onSearch = () => {
    const limit = 40
    const q = search ? `q=${search}&` : ""
    const url = `https://g.tenor.com/v1/search?${q}key=${TENOR_ID}&limit=${limit}`

    axios({
      url: url,
      method: "get",
      data: {}
    })
      .then((res: any) => res.data)
      .then((data: any) => {
        setResults(
          data.results.map((res: any) => ({
            url: res.media[0].gif.url,
            preview: res.media[0].gif.preview
          }))
        )
      })
      .catch((error) => {
        parseError(error)
      })
  }

  const onRecent = () => {
    const newRecent = getterRecentGifs(cookies.gifs)

    setRecent(newRecent.filter((entry: any) => entry.url && entry.preview))
  }

  useEffect(() => {
    setOpenFrequently(false)
  }, [search])

  const sendGif = (gif: any) => {
    setterRecentGifs(setCookie, cookies.gifs, {
      url: gif.url,
      preview: gif.preview
    })
    send(gif.url, gif.preview)
  }

  return (
    <>
      <PopupWrapper handler={handler} open={open}>
        <div className="popup-b fixed top-0 right-0 bottom-0 z-60 flex w-full items-end pt-120 lg:absolute lg:top-[auto] lg:bottom-50 lg:z-20 lg:w-[280px] lg:pt-0">
          <button className="fixed top-0 h-120 w-full" onClick={() => handler(false)}></button>
          <div className="h-full max-h-full w-full rounded-t-[10px] border-1 border-grey-12 bg-white p-14 shadow-sm lg:h-auto lg:rounded-4">
            <ChatPopupTop
              frequent={openFrequently}
              handlerClear={clearSearch}
              handlerEnter={onEnter}
              handlerFrequent={setOpenFrequently}
              handlerInput={setSearch}
              handlerSearch={onSearch}
              search={search}
              title={"GIFs"}
            />
            <Gifs gifs={openFrequently ? recent : results} send={sendGif} />
          </div>
        </div>
      </PopupWrapper>
    </>
  )
}

export default GifPicker
