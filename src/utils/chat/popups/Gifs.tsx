import { GifInterface } from "libs/interfaces"
import React from "react"
import Gif from "utils/chat/popups/Gif"

const Gifs = ({ gifs, send }: { gifs: GifInterface[]; send: (gif: string) => void }) => {
  return (
    <>
      {gifs.length > 0 ? (
        <div className="h-[calc(100%-72px)] w-full overflow-y-scroll rounded-4 lg:h-[290px] lg:max-h-[290px]">
          <div className="grid w-full grid-cols-2 gap-4">
            {gifs.map((gif: GifInterface, key: number) => (
              <Gif key={key} gif={gif} send={send} />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex h-[290px] w-full items-center justify-center text-14 font-bold text-grey-40">
          No GIFs found
        </div>
      )}
    </>
  )
}

export default Gifs
