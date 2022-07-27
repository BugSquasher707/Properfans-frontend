import { onPlural } from "api/integration/functions"
import { toastError } from "api/integration/toaster"
import ChatTopAvatar from "components/chat/top/ChatTopAvatar"
import ChatTopManage from "components/chat/top/ChatTopManage"
import ChatTopWrapper from "components/chat/top/ChatTopWrapper"
import { useProps } from "contexts/PropsContext"
import { ERR, URL } from "libs/constants"
import { DropdownInterface, MessageRoomInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { MdGroup } from "react-icons/md"
import { useHistory } from "react-router"
import Wrapper from "utils/elements/Wrapper"
import TooltipBackground from "utils/modals/TooltipBackground"

const ChatTopBrand = ({ online, room }: { online: number; room: MessageRoomInterface }) => {
  const history = useHistory()

  const { user } = useProps()

  const [openDropdown, setOpenDropdown] = useState(false)

  const [links, setLinks] = useState<DropdownInterface[]>([])

  useEffect(() => {
    setLinks([
      {
        link: onVisitBrand,
        param: room.handle,
        title: "Group Info",
        icon: <MdGroup className="text-grey-40" />
      }
    ])
  }, [room])

  const onVisitBrand = (id: string) => {
    if (id) {
      history.push(URL.BRANDS.BASE.replace(":param", id))
    } else {
      toastError(ERR.REFRESH)
    }
  }

  return (
    <>
      <ChatTopWrapper>
        <div className="flex w-full items-center justify-start space-x-[14px]">
          <ChatTopAvatar avatar={{ icon: room.avatar, active: true }} last />
          <div className="w-full">
            <div className="mb-4 flex w-full items-center space-x-[4px]">
              <div className="max-w-full select-none truncate overflow-ellipsis font-bold text-black group-hover:text-purple">
                {room.access === 0 ? "Public" : `Tier ${room.access}`} - {room.name}
              </div>
            </div>
            <div className="flex w-full items-center justify-start space-x-[10px]">
              <div className="text-12 font-bold text-grey-40">
                {room.users.length} member{onPlural(room.users.length)}
              </div>
              <div className="h-4 w-4 rounded-full bg-grey-10"></div>
              <div className="text-12 font-bold text-green">{online} online</div>
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-[12px]">
          <Wrapper open={room.subscription && room.master !== user.id}>
            <ChatTopManage room={room} />
          </Wrapper>
          <div className="relative">
            <button
              className={`group flex h-36 w-36 cursor-pointer items-center justify-center rounded-4 hover:bg-grey-3 ${
                openDropdown ? "bg-grey-3" : ""
              }`}
              onClick={() => setOpenDropdown(true)}
            >
              <BiDotsVerticalRounded
                className={`text-18 group-hover:text-black ${openDropdown ? "text-black" : "text-grey-20"}`}
              />
            </button>
            <Wrapper open={openDropdown}>
              <TooltipBackground handler={setOpenDropdown} />
              <div
                className="absolute top-40 right-0 z-40 mt-10 w-[170px] cursor-pointer rounded-4 border-1 border-grey-12 bg-white px-6 py-4 shadow-md dark:shadow-none"
                onClick={() => setOpenDropdown(false)}
              >
                {links
                  .filter((link: DropdownInterface, key: number) => key < 3)
                  .map((link: DropdownInterface, key: number) => (
                    <button
                      key={key}
                      className="group my-2 flex h-36 w-full items-center justify-start space-x-[10px] rounded-4 px-14 hover:bg-grey-6"
                      name={link.title}
                      onClick={() => link.link(link.param)}
                    >
                      <div className="h-16 opacity-40 group-hover:opacity-100">{link.icon}</div>
                      <div className="w-full text-left text-14 font-bold text-black">{link.title}</div>
                    </button>
                  ))}
              </div>
            </Wrapper>
          </div>
        </div>
      </ChatTopWrapper>
    </>
  )
}

export default ChatTopBrand
