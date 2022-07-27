import Chats from "assets/img/setup/chats.png"
import Content from "assets/img/setup/content.png"
import Support from "assets/img/setup/support.png"
import { SetupSlideSuccessType } from "libs/enums"
import { SetupSlideSuccessInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import Avatar from "utils/avatars/Avatar"
import ButtonWhite from "utils/buttons/colors/ButtonWhite"
import SetupSuccessSlide from "views/setup/SetupSuccessSlide"

const SetupSuccess = ({
  avatar,
  username,
  tag,
  handler
}: {
  avatar: string
  username: string
  tag: string
  handler: any
}) => {
  const [openFinal, setOpenFinal] = useState(false)

  const [slides] = useState<SetupSlideSuccessInterface[]>([
    {
      title: "Exclusive chats with your idol",
      text: "Explore your favorite creators, keep up with them, what they’re up to, and support them! But thats not the only way...",
      image: Chats,
      type: SetupSlideSuccessType.Chats
    },
    {
      title: "Support your idol",
      text: "Explore your favorite creators, keep up with them, what they’re up to, and support them! But thats not the only way...",
      image: Support,
      type: SetupSlideSuccessType.Support
    },
    {
      title: "Experience exclusive content from your idol",
      text: "Explore your favorite creators, keep up with them, what they’re up to, and support them! But thats not the only way...",
      image: Content,
      type: SetupSlideSuccessType.Content
    }
  ])

  const [id, setId] = useState(0)

  const [slide, setSlide] = useState<SetupSlideSuccessInterface>()

  useEffect(() => {
    setSlide(slides[id])
  }, [id])

  return (
    <>
      <div className="min-h-screen light-r fixed top-0 left-0 z-40 flex h-full w-full items-center justify-center bg-purple p-20">
        {openFinal ? (
          <div className="flex h-full w-full items-center justify-center">
            <div className="mb-20 grid w-[340px] max-w-full grid-cols-1 justify-center gap-40">
              <div className="grid w-full grid-cols-1 gap-14">
                <div className="mb-14 w-full text-center text-30 font-bold text-white">
                  You are ready to get started <span className="text-26 font-normal">🏁</span>
                </div>
                <div className="w-full text-center text-14 text-white-40">
                  Explore your favorite creators, keep up with them, what they’re up to, and support them! But thats not
                  the only way...
                </div>
              </div>
              <div className="grid w-full grid-cols-1 gap-24">
                <div className="flex w-full justify-center">
                  {avatar ? <img alt="" className="h-82 w-82 rounded-full" src={avatar} /> : <Avatar size={82} />}
                </div>
                <div className="grid w-full grid-cols-1 gap-4">
                  <div className="w-full truncate overflow-ellipsis text-center text-16 font-bold text-white">
                    {username ?? "Username"}
                  </div>
                  <div className="w-full truncate overflow-ellipsis text-center text-12 text-white-40">
                    @{tag ?? "tag"}
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-center">
                <ButtonWhite action={handler} title={"Become a properfan"} />
              </div>
            </div>
          </div>
        ) : (
          <div className="grid max-h-full w-full grid-cols-1 gap-40 overflow-auto">
            {slide ? (
              <>
                <div className="relative flex h-[580px] w-full items-center justify-center">
                  {slides.map((entry: SetupSlideSuccessInterface, key: number) => (
                    <SetupSuccessSlide key={key} open={entry.type === slide.type} slide={entry} />
                  ))}
                </div>
                <div className="flex w-full justify-center">
                  <div className="flex">
                    {slides.map((entry: SetupSlideSuccessInterface, key: number) => (
                      <button
                        key={key}
                        className="group flex h-20 w-20 items-center justify-center rounded-4 hover:bg-white-10"
                        onClick={() => setId(key)}
                      >
                        <div
                          className={`h-8 w-8 rounded-full ${entry.type === slide.type ? "bg-white" : "bg-white-40"}`}
                        ></div>
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  className="w-full text-center text-14 text-white-40 underline hover:text-white"
                  onClick={() => setOpenFinal(true)}
                >
                  {id === slides.length - 1 ? "Continue" : "Skip"}
                </button>
              </>
            ) : (
              ""
            )}
          </div>
        )}
      </div>
    </>
  )
}

export default SetupSuccess
