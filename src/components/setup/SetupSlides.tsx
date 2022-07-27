import SetupSlide from "components/setup/SetupSlide"
import { SetupSlideType } from "libs/enums"
import { SetupSlideInterface } from "libs/interfaces"
import React from "react"
import ButtonGradient from "utils/buttons/colors/ButtonGradient"

const SetupSlides = ({
  avatar,
  banner,
  username,
  available,
  tag,
  slide,
  handlers
}: {
  avatar: string
  banner: string
  username: string
  tag: string
  available?: boolean
  slide: SetupSlideInterface
  handlers: any
}) => {
  return (
    <>
      <div className="relative h-full w-full">
        <div className="absolute top-0 left-0 flex h-full w-full justify-center overflow-y-scroll">
          <div className="flex h-full w-[500px] max-w-full flex-col gap-60 sm:gap-80">
            <div className="flex w-full flex-grow items-start">
              <SetupSlide
                available={available}
                avatar={avatar}
                banner={banner}
                handlers={handlers}
                slide={slide}
                tag={tag}
                username={username}
              />
            </div>
            <div className="flex w-full justify-start">
              <ButtonGradient
                action={slide.type === SetupSlideType.Categories ? handlers.onSubmit : handlers.stepUp}
                title={slide.type === SetupSlideType.Categories ? "You are done" : "Next step"}
                full
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SetupSlides
