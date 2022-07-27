import SetupAvatar from "components/setup/slides/SetupAvatar"
import SetupContent from "components/setup/slides/SetupContent"
import SetupCreators from "components/setup/slides/SetupCreators"
import SetupTag from "components/setup/slides/SetupTag"
import SetupUsername from "components/setup/slides/SetupUsername"
import { ContentType, SetupSlideType } from "libs/enums"
import { SetupCreatorInterface, SetupSlideInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"

const SetupSlide = ({
  avatar,
  banner,
  username,
  tag,
  available,
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
  const [activeContent, setActiveContent] = useState(Array(9).fill(false))
  const [activeCreators, setActiveCreators] = useState(Array(8).fill(false))

  const creator = {
    avatar: "",
    name: "Maestro Development",
    verified: true,
    id: "1234"
  }

  const [creators] = useState<SetupCreatorInterface[]>([creator, creator, creator, creator, creator, creator])

  useEffect(() => {
    handlers.setContent(activeContent.map((item, key) => (item ? ContentType[key] : "")).filter((e) => e))
  }, [activeContent])

  useEffect(() => {
    handlers.setCreators(activeCreators.map((item, key) => (item ? creators[key].id : "")).filter((e) => e))
  }, [activeCreators])

  return (
    <>
      <div className="grid w-full grid-cols-1 items-start gap-40 sm:gap-40">
        <div className="grid w-full grid-cols-1 gap-20">
          <div className="font-momentum-bold w-full text-20 text-black sm:text-24">{slide.title}</div>
          <div className="w-full text-14 text-grey-40">{slide.text}</div>
        </div>
        <div className="center w-full">
          {
            {
              [SetupSlideType.Name]: (
                <SetupUsername
                  handler={{
                    setUsername: handlers.setUsername,
                    stepUp: handlers.stepUp
                  }}
                  username={username}
                />
              ),
              [SetupSlideType.Handle]: (
                <SetupTag
                  handler={{
                    setTag: handlers.setTag,
                    stepUp: handlers.stepUp
                  }}
                  available={available}
                  tag={tag}
                />
              ),
              [SetupSlideType.Avatar]: (
                <SetupAvatar
                  handler={{
                    setAvatar: handlers.setAvatar,
                    setAvatarNew: handlers.setAvatarNew,
                    setBanner: handlers.setBanner,
                    setBannerNew: handlers.setBannerNew
                  }}
                  avatar={avatar}
                  banner={banner}
                />
              ),
              [SetupSlideType.Categories]: <SetupContent content={activeContent} handler={setActiveContent} />,
              [SetupSlideType.Creators]: (
                <SetupCreators content={activeCreators} creators={creators} handler={setActiveCreators} />
              )
            }[slide.type]
          }
        </div>
      </div>
    </>
  )
}

export default SetupSlide
