import { deletePost } from "api/endpoints/fanPost"
import { toastSuccess } from "api/integration/toaster"
import FanFeedPostTier from "components/fan/post/FanFeedPostTier"
import ModalPostMigrate from "components/modals/fan/ModalPostMigrate"
import ModalReportPost from "components/modals/report/ModalReportPost"
import Wrapper from "components/wrappers/Wrapper"
import WrapperAbsolute from "components/wrappers/WrapperAbsolute"
import WrapperVerified from "components/wrappers/WrapperVerified"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { DropdownInterface, FeedInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { AiFillGift } from "react-icons/ai"
import { HiDotsVertical } from "react-icons/hi"
import { IoMdHeart } from "react-icons/io"
import { MdLocalPostOffice } from "react-icons/md"
import { Link, useHistory } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import Verified from "utils/icons/Verified"
import TooltipBackground from "utils/modals/TooltipBackground"

const FanFeedPostTop = ({
  post,
  small,
  fullscreen,
  handlerGift
}: {
  post: FeedInterface | any
  small: boolean
  fullscreen: boolean
  handlerGift?: any
}) => {
  const { token, user } = useProps()

  const history = useHistory()

  const [openDropdown, setOpenDropdown] = useState(false)
  const [openReport, setOpenReport] = useState(false)
  const [openMigrate, setOpenMigrate] = useState(false)

  const onPost = () => {
    history.push(URL.FAN.POST.replace(":id", post.id))
  }

  const [links, setLinks] = useState<DropdownInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [])

  const onLoad = () => {
    const newLinks = []

    if (!post.redacted) {
      if (!fullscreen) {
        newLinks.push({
          link: onPost,
          param: false,
          title: "View Post",
          icon: <MdLocalPostOffice className="text-grey-40" />
        })
      } else if (post.userId !== user.id) {
        newLinks.push({
          link: setOpenReport,
          param: true,
          title: "Report Post",
          icon: <MdLocalPostOffice className="text-grey-40" />
        })
      }

      if (post.user.id === user.id) {
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
    }

    setLinks(newLinks)
  }

  const onDelete = async () => {
    const result = await deletePost(token, post.id)

    if (result.status) {
      toastSuccess("Successfully deleted post")

      history.push(URL.FAN.BASE)
    }
  }

  return (
    <>
      <div className="grid w-full grid-cols-[1fr,auto] items-center gap-14">
        <Link
          className="grid w-full grid-cols-[auto,1fr] items-center gap-14"
          to={URL.BRANDS.BASE.replace(":param", post.brand.handle)}
        >
          <div className="h-32 w-32 overflow-hidden rounded-full">
            {post.brand.avatar ? <img alt="" className="h-32 w-32" src={post.brand.avatar} /> : <Avatar />}
          </div>
          <div className="relative h-32 w-full">
            <WrapperAbsolute>
              <div className="flex w-full">
                <div className="relative max-w-full truncate overflow-ellipsis pr-20 text-14 font-bold text-black">
                  {post.brand.userName}
                  <WrapperVerified>{post.brand.verified ? <Verified size={16} /> : ""}</WrapperVerified>
                </div>
              </div>
              <div className="w-full text-12 font-bold text-grey-40">@{post.brand.handle}</div>
            </WrapperAbsolute>
          </div>
        </Link>
        <Wrapper open={!small}>
          <div className="flex items-center justify-end space-x-[12px]">
            <div className="hidden justify-end text-12 font-bold text-grey-40 sm:flex">{post.date}</div>
            <div className="hidden lg:flex">
              <FanFeedPostTier post={post} />
            </div>
            {fullscreen && handlerGift ? (
              <button
                className="relative flex h-36 w-36 cursor-pointer items-center justify-center rounded-4 hover:bg-grey-3 xl:hidden"
                name={"Gift"}
                onClick={() => handlerGift(true)}
              >
                <AiFillGift className="text-18 text-black" />
                <IoMdHeart className="absolute top-2 right-2 text-12 text-purple" />
              </button>
            ) : (
              ""
            )}
            <Wrapper open={links && links.length > 0}>
              <div className="relative">
                <button
                  className="group hidden h-28 w-28 items-center justify-center rounded-4 hover:bg-grey-6 sm:flex"
                  onClick={() => setOpenDropdown(true)}
                >
                  <HiDotsVertical className="text-grey-20 group-hover:text-black" />
                </button>
                <Wrapper open={openDropdown}>
                  <TooltipBackground handler={setOpenDropdown} />
                  <div
                    className="absolute top-26 right-0 z-40 mt-10 w-[150px] cursor-pointer rounded-4 border-1 border-grey-12 bg-white px-6 py-4 shadow-md dark:shadow-none"
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
              </div>
            </Wrapper>
          </div>
        </Wrapper>
      </div>
      <Wrapper open={openReport}>
        <ModalReportPost handler={setOpenReport} open={openReport} post={post} />
      </Wrapper>
      <Wrapper open={openMigrate}>
        <ModalPostMigrate handler={setOpenMigrate} id={post.id} open={openMigrate} />
      </Wrapper>
    </>
  )
}

export default FanFeedPostTop
