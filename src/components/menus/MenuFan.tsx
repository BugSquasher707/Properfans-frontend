import { statusApi } from "api/endpoints/status"
import { ReactComponent as Propercoins } from "assets/img/propercoin.svg"
import MenuButton from "components/menus/MenuButton"
import MenuLink from "components/menus/MenuLink"
import ModalCreatorPost from "components/modals/creator/ModalCreatorPost"
import Story from "components/stories/Story"
import StoryAdd from "components/stories/StoryAdd"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { OverlayType } from "libs/enums"
import { LinkInterface, StoryInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { IoMdCompass } from "react-icons/io"
import { MdCamera, MdEdit, MdHome, MdKeyboardArrowDown, MdPeople, MdSearch } from "react-icons/md"
import { Link } from "react-router-dom"

const MenuFan = ({ visible }: { visible?: boolean }) => {
  const { path } = useProps()

  const [openMiddle, setOpenMiddle] = useState(false)
  const [openPost, setOpenPost] = useState(false)
  const [openStories, setOpenStories] = useState(false)
  const [openStory, setOpenStory] = useState(false)

  const [search] = useState<LinkInterface>({
    link: OverlayType.Search,
    title: "Search",
    icon: <MdSearch />
  })

  const [left] = useState<LinkInterface>({
    link: URL.FAN.FEED,
    title: "Feed",
    icon: <MdPeople />
  })

  const [right] = useState<LinkInterface[]>([
    { link: URL.CHAT.BASE, title: "Chat", icon: <IoMdCompass /> },
    { link: URL.FAN.CLUBS.BASE, title: "Clubs", icon: <MdPeople /> }
  ])

  const { token, user } = useProps()

  const [myStories, setMyStories] = useState<StoryInterface>()

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    onLoad()

    return () => {
      setMounted(false)
    }
  }, [])

  const onLoad = async () => {
    if (user.creator) {
      console.log(token)

      const result = await statusApi()

      if (mounted && result && result.length > 0) {
        setMyStories(result[0])
      }
    }
  }

  const onView = () => {
    setOpenStory(false)

    if (myStories && myStories.stories && myStories.stories.length > 0) {
      setOpenStories(true)
    }
  }

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 z-10 flex h-60 w-full justify-center border-t-1 border-grey-6 bg-white px-12 shadow-md dark:shadow-none ${
          visible ? "" : "lg:hidden"
        }`}
      >
        <div className="grid w-[400px] max-w-full grid-cols-5">
          <MenuLink active={path.includes(left.link)} link={left} />
          <MenuButton active={search.link === OverlayType} link={search} />
          <div className="relative flex h-54 w-full justify-center">
            <div
              className={`absolute bottom-5 left-[50%] flex w-54 translate-x-[-50%] transform cursor-pointer items-start overflow-hidden rounded-full bg-purple transition-all duration-200 ${
                openMiddle ? (user.creator ? "h-[230px]" : "h-[186px]") : "h-[54px]"
              }`}
            >
              <img
                alt=""
                className="absolute top-0 left-[54px] min-h-[54px] min-w-[230px] origin-top-left rotate-[90deg] transform"
                src={"/gradients/gradient_button.png"}
              />
              <div
                className={`relative grid w-full grid-cols-1 pt-10 transition duration-200 ${
                  openMiddle ? "opacity-1" : "opacity-0"
                }`}
              >
                <Link className="flex h-44 w-full items-center justify-center" to={URL.FAN.SHOP}>
                  <Propercoins className="h-22 w-22 fill-current text-white" />
                </Link>
                <Wrapper open={user.creator}>
                  <button
                    className="flex h-44 w-full items-center justify-center"
                    onClick={() => {
                      setOpenMiddle(false)
                      setOpenStory(true)
                    }}
                  >
                    <MdCamera className="fill-current text-24 text-white" />
                  </button>
                  <button
                    className="flex h-44 w-full items-center justify-center"
                    onClick={() => {
                      setOpenMiddle(false)
                      setOpenPost(true)
                    }}
                  >
                    <MdEdit className="fill-current text-24 text-white" />
                  </button>
                </Wrapper>
              </div>
              <button
                className="absolute left-0 bottom-0 flex h-54 w-54 items-center justify-center rounded-full"
                onClick={() => setOpenMiddle(!openMiddle)}
              >
                {openMiddle ? (
                  <MdKeyboardArrowDown className="text-26 text-white-40" />
                ) : (
                  <MdHome className="text-24 text-white" />
                )}
              </button>
            </div>
          </div>
          {right.map((link: LinkInterface, key: number) => (
            <MenuLink key={key} active={path.includes(link.link)} link={link} />
          ))}
        </div>
      </div>
      <Wrapper open={openStory}>
        <StoryAdd handler={setOpenStory} handlerUpdate={onLoad} story={myStories} view={onView} />
      </Wrapper>
      {openStories && myStories && myStories.stories.length > 0 ? (
        <Story handler={setOpenStories} mine={true} story={myStories} />
      ) : (
        ""
      )}
      <ModalCreatorPost handler={setOpenPost} open={openPost} />
    </>
  )
}

export default MenuFan
