import Wrapper from "components/wrappers/Wrapper"
import { EmojiInterface } from "libs/interfaces"
import React from "react"

const Emojis = ({
  emojis,
  add,
  small
}: {
  emojis: EmojiInterface[]
  add: (em: EmojiInterface) => void
  small?: boolean
}) => {
  return (
    <>
      <div className="w-full">
        <Wrapper open={emojis.length > 0}>
          <div className={`h-[140px] w-full items-start overflow-y-scroll ${small ? "max-h-[90px]" : "max-h-[140px]"}`}>
            <div className="grid w-full grid-cols-8 gap-2">
              {emojis.map((em: EmojiInterface, key: number) => (
                <button
                  key={key}
                  className="h-28 w-full select-none rounded-4 text-16 hover:bg-grey-3"
                  onClick={() => add(em)}
                >
                  {em.emoji}
                </button>
              ))}
            </div>
          </div>
        </Wrapper>
        <Wrapper open={emojis.length === 0}>
          <div className="flex h-[140px] w-full items-center justify-center text-14 font-bold text-grey-40">
            No emojis found
          </div>
        </Wrapper>
      </div>
    </>
  )
}

export default Emojis
