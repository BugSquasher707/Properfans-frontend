import { statusApi } from "api/endpoints/status"
import { parseTimeAgo } from "api/integration/functions"
import { toastSuccess } from "api/integration/toaster"
import ModalPostMigrate from "components/modals/fan/ModalPostMigrate"
import Wrapper from "components/wrappers/Wrapper"
import WrapperVerified from "components/wrappers/WrapperVerified"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { DropdownInterface, StoryBrandInterface, StoryInterface } from "libs/interfaces"
import React, { useEffect, useRef, useState } from "react"
import { HiDotsVertical } from "react-icons/hi"
import { IoMdClose, IoMdPlay } from "react-icons/io"
import { MdLocalPostOffice, MdPause } from "react-icons/md"
import { Link, useHistory } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import Verified from "utils/icons/Verified"
import TooltipBackground from "utils/modals/TooltipBackground"

const StoryTop = ({
  active,
  story,
  playing,
  cap,
  timer,
  viewing,
  pause,
  close,
  mine
}: {
  active: StoryBrandInterface
  story: StoryInterface
  playing: boolean
  cap: number
  timer: number
  viewing: number
  pause: any
  close: any
  mine: boolean
}) => {
  const { token } = useProps()

  const history = useHistory()

  const date = useRef<HTMLDivElement>(null)

  const [width, setWidth] = useState(0)

  const [links, setLinks] = useState<DropdownInterface[]>([])

  const [openMigrate, setOpenMigrate] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(false)

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)

    return () => {
      setMounted(false)
    }
  }, [])

  useEffect(() => {
    onLoad()
  }, [mine])

  const onLoad = () => {
    const newLinks = []

    if (mine) {
      newLinks.push({
        link: setOpenMigrate,
        param: true,
        title: "Edit Tier",
        icon: <MdLocalPostOffice className="text-grey-40" />
      })

      newLinks.push({
        link: onDelete,
        title: "Delete Post",
        icon: <MdLocalPostOffice className="text-grey-40" />
      })
    }

    if (mounted) {
      setLinks(newLinks)
    }
  }

  useEffect(() => {
    if (date.current) {
      setWidth(date.current.clientWidth)
    }
  }, [date])

  const onDelete = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      toastSuccess("Successfully deleted post")

      history.push(URL.FAN.BASE)
    }
  }

  return (
    <>
      <div className="absolute top-10 left-10 right-10">
        <div
          style={{
            gridTemplateColumns: `repeat(${story.stories.length}, minmax(0, 1fr))`
          }}
          className={`mb-16 grid w-full gap-3`}
        >
          {story.stories.map((entry: StoryBrandInterface, key: number) => (
            <div
              key={key}
              className={`relative h-4 overflow-hidden rounded-2 ${key === viewing ? "bg-white" : "bg-white-20"}`}
            >
              <Wrapper open={key === viewing}>
                <div
                  className="absolute top-0 left-0 h-4 rounded-r-2 bg-purple"
                  style={{ width: `${(timer / cap) * 100}%` }}
                ></div>
              </Wrapper>
              <Wrapper open={key < viewing}>
                <div className="absolute top-0 left-0 h-4 w-full rounded-r-2 bg-purple"></div>
              </Wrapper>
            </div>
          ))}
        </div>
        <div className="grid w-full grid-cols-[1fr,auto] gap-12">
          <Link
            className="grid w-full grid-cols-[auto,1fr] gap-12"
            to={URL.BRANDS.BASE.replace(":param", story.handle)}
          >
            <div className="h-32 w-32 overflow-hidden rounded-full bg-grey-12">
              {story.avatar ? <img alt="" className="h-32 w-32" src={story.avatar} /> : <Avatar size={32} />}
            </div>
            <div className="grid w-full grid-cols-1 items-center gap-2">
              <div className="flex w-full justify-start">
                <div
                  className="relative flex items-center truncate overflow-ellipsis pr-20 text-14 font-bold text-white"
                  style={{ maxWidth: `calc(100%-${width}px)` }}
                >
                  {story.userName}
                  <WrapperVerified>{story.verified ? <Verified /> : ""}</WrapperVerified>
                </div>
              </div>
              <div className="flex w-full items-center justify-start space-x-[10px]">
                <div className="min-w-[55px] text-12 text-white-60">{parseTimeAgo(active.createdAt)} ago</div>
              </div>
            </div>
          </Link>
          <div className="flex items-center">
            <button
              className="flex h-32 w-32 items-center justify-center rounded-4 hover:bg-white-10"
              onClick={() => pause(!playing)}
            >
              {playing ? <MdPause className="text-16 text-white" /> : <IoMdPlay className="text-16 text-white" />}
            </button>
            <button
              className="flex h-32 w-32 items-center justify-center rounded-4 hover:bg-white-10"
              onClick={() => close()}
            >
              <IoMdClose className="text-16 text-white" />
            </button>
            <Wrapper open={mine}>
              <button
                className="group flex h-32 w-32 items-center justify-center rounded-4 hover:bg-white-10"
                onClick={() => setOpenDropdown(true)}
              >
                <HiDotsVertical className="text-white" />
              </button>
              <Wrapper open={openDropdown}>
                <TooltipBackground handler={setOpenDropdown} />
                <div
                  className="absolute top-50 right-0 z-40 mt-10 w-[150px] cursor-pointer rounded-4 border-1 border-grey-12 bg-white px-6 py-4 shadow-md dark:shadow-none"
                  onClick={() => setOpenDropdown(false)}
                >
                  {links
                    .filter((link: DropdownInterface, key: number) => key < 3)
                    .map((link: DropdownInterface, key: number) => (
                      <button
                        key={key}
                        className="group my-2 flex h-36 w-full items-center space-x-[10px] rounded-4 px-14 hover:bg-grey-6"
                        name={link.title}
                        onClick={() => link.link(link.param)}
                      >
                        <span className="h-18 opacity-40 group-hover:opacity-100">{link.icon}</span>
                        <div className="text-14 font-bold text-black">{link.title}</div>
                      </button>
                    ))}
                </div>
              </Wrapper>
            </Wrapper>
          </div>
        </div>
      </div>
      <Wrapper open={openMigrate}>
        <ModalPostMigrate handler={setOpenMigrate} id={story.stories[viewing].id} open={openMigrate} />
      </Wrapper>
    </>
  )
}

export default StoryTop
