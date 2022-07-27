import ModalChatCreateGroup from "components/modals/chat/ModalChatCreateGroup"
import { DropdownInterface } from "libs/interfaces"
import React, { useState } from "react"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { MdGroup } from "react-icons/md"
import PopupWrapper from "utils/elements/PopupWrapper"
import Wrapper from "utils/elements/Wrapper"

const SideChatDots = () => {
  const [openDropdown, setOpenDropdown] = useState(false)
  const [openCreateGroup, setOpenCreateGroup] = useState(false)

  const [links] = useState([
    {
      link: setOpenCreateGroup,
      param: true,
      title: "Create Group",
      icon: <MdGroup className="text-grey-40" />
    }
  ])

  return (
    <>
      <div className="relative">
        <div
          className="group relative flex h-26 w-26 cursor-pointer items-center justify-center rounded-4 hover:bg-grey-6"
          onClick={() => setOpenDropdown(true)}
        >
          <BiDotsHorizontalRounded className="text-grey-40 group-hover:text-black" />
        </div>
        <PopupWrapper handler={setOpenDropdown} open={openDropdown}>
          <div
            className="absolute top-22 right-0 z-20 mt-10 w-[160px] cursor-pointer rounded-4 border-1 border-grey-12 bg-white px-6 py-4 shadow-md dark:shadow-none"
            onClick={() => setOpenDropdown(false)}
          >
            {links.map((link: DropdownInterface, key: number) => (
              <button
                key={key}
                className="group my-2 flex h-36 w-full items-center justify-start space-x-[10px] rounded-4 px-14 hover:bg-grey-6"
                name={link.title}
                onClick={() => {
                  setOpenDropdown(false)
                  link.link(link.param)
                }}
              >
                <div className="opacity-40 group-hover:opacity-100">{link.icon}</div>
                <div className="w-full text-left text-14 font-bold text-black">{link.title}</div>
              </button>
            ))}
          </div>
        </PopupWrapper>
      </div>
      <Wrapper open={openCreateGroup}>
        <ModalChatCreateGroup handler={setOpenCreateGroup} open={openCreateGroup} />
      </Wrapper>
    </>
  )
}

export default SideChatDots
