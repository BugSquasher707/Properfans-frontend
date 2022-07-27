import { Picker } from "emoji-mart"
import React from "react"
import PopupWrapper from "utils/elements/PopupWrapper"
import "emoji-mart/css/emoji-mart.css"
import TooltipBackground from "utils/modals/TooltipBackground"

const EmojiPickerMart = ({ open, handler, add }: { open: boolean; handler: any; add: (emoji: string) => void }) => {
  const adderEmoji = (emoji: any) => {
    add(emoji.native)
  }

  return (
    <>
      <PopupWrapper handler={handler} open={open}>
        <div className="lg:hidden">
          <TooltipBackground handler={handler} />
        </div>
        <div className="fixed right-0 bottom-0 z-40 w-full lg:absolute lg:bottom-42 lg:z-20 lg:w-[280px]">
          <Picker onSelect={adderEmoji} />
        </div>
      </PopupWrapper>
    </>
  )
}

export default EmojiPickerMart
