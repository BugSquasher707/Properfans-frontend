import { capitalizeString } from "api/integration/functions"
import { onMeetLink, onMeetTitle } from "api/integration/meet"
import MeetPrice from "components/meet/elements/MeetPrice"
import MeetStar from "components/meet/elements/MeetStar"
import MeetMediaAudioCall from "components/meet/media/MeetMediaAudioCall"
import MeetMediaVideoCall from "components/meet/media/MeetMediaVideoCall"
import MeetMediaVideoGreeting from "components/meet/media/MeetMediaVideoGreeting"
import { MeetProductType } from "libs/enums"
import { MeetMediaInterface, ProfileBrandInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { MdKeyboardArrowRight, MdShoppingCart } from "react-icons/md"
import { Link, useParams } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"

interface Params {
  param: string
}

const MeetProductDetails = ({ profile, type }: { profile: ProfileBrandInterface; type: MeetProductType }) => {
  const { param } = useParams<Params>()

  const [media, setMedia] = useState<MeetMediaInterface[]>([])
  const [mediaCount, setMediaCount] = useState(0)

  const [openMore, setOpenMore] = useState(false)

  const [description, setDescription] = useState("")
  const [price, setPrice] = useState(0)

  useEffect(() => {
    onLoad()
    onMedia()
  }, [])

  const onLoad = () => {
    setDescription(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis"
    )

    setPrice(29.99)
  }

  const onMedia = () => {
    const m1 = { link: "", name: "Maestro", avatar: "", status: "🎉 birthday" }
    const m2 = { link: "", name: "Maestro", avatar: "", status: "💭 question" }
    const m3 = { link: "", name: "Maestro", avatar: "", status: "👋 greeting" }

    setMedia([m1, m2, m3, m2, m1, m3])
    setMediaCount(120)
  }

  return (
    <>
      <div className="mb-20 w-full sm:mb-20 md:mb-40 lg:mb-100">
        <div className="mb-16 flex w-full items-center justify-center space-x-[16px]">
          <MeetStar type={type} />
          <MdKeyboardArrowRight className="text-16 text-grey-40" />
          <div className="center h-42 w-full">
            {profile.avatar ? (
              <img alt="" className="h-42 w-42 overflow-hidden rounded-full" src={profile.avatar} />
            ) : (
              <Avatar size={42} />
            )}
          </div>
        </div>
        <div className="mb-24 w-full text-left text-14 font-bold text-black sm:text-center">
          Order {onMeetTitle(type, true)} with{" "}
          <span className="text-14 text-purple">{capitalizeString(profile.userName)}</span>
        </div>
        <div className="mb-32 flex w-full justify-center">
          <div className="w-[530px] max-w-full text-left text-14 text-grey-40 sm:text-center">{description}</div>
        </div>
        <div className="mb-30 w-full">
          <MeetPrice price={price} />
        </div>
        <div className="flex w-full justify-center">
          <div className="flex w-full items-center space-x-[10px] sm:w-[250px]">
            <Link
              className="relative flex h-42 w-full items-center justify-center space-x-[8px] overflow-hidden rounded-4 bg-purple"
              to={onMeetLink(type, param)}
            >
              <img
                alt=""
                className="absolute top-[50%] left-[50%] min-h-full min-w-full translate-x-[-50%] translate-y-[-50%] transform"
                src={"/gradients/gradient_button.png"}
              />
              <MdShoppingCart className="relative text-18 text-white" />
              <div className="relative text-14 font-bold text-white">Make Order</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full">
        <div className="mb-24 flex w-full items-center justify-start space-x-[10px]">
          <div className="text-14 font-bold text-black">
            {
              {
                [MeetProductType.AudioCall]: "Audio Call Moments",
                [MeetProductType.VideoCall]: "Video Call Moments",
                [MeetProductType.VideoGreeting]: "Video Greetings"
              }[type]
            }
          </div>
          <div className="text-14 text-grey-40">{mediaCount}</div>
        </div>
        <div className="mb-20 w-full sm:mb-32">
          {
            {
              [MeetProductType.AudioCall]: <MeetMediaAudioCall media={media} open={openMore} profile={profile} />,
              [MeetProductType.VideoCall]: <MeetMediaVideoCall media={media} open={openMore} />,
              [MeetProductType.VideoGreeting]: <MeetMediaVideoGreeting media={media} open={openMore} />
            }[type]
          }
        </div>
        <button
          className="w-full text-center text-14 font-bold text-grey-40 hover:text-black"
          onClick={() => setOpenMore(!openMore)}
        >
          {openMore ? "Load less" : "Load more"}
        </button>
      </div>
    </>
  )
}

export default MeetProductDetails
