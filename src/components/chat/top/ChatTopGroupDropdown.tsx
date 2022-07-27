import { statusApi } from "api/endpoints/status"
import { toastError, toastSuccess } from "api/integration/toaster"
import ModalChatAddGroup from "components/modals/chat/ModalChatAddGroup"
import ModalChatGroupInfo from "components/modals/chat/ModalChatGroupInfo"
import ModalChatLeaveGroup from "components/modals/chat/ModalChatLeaveGroup"
import ModalConfirmation from "components/modals/other/ModalConfirmation"
import { useProps } from "contexts/PropsContext"
import { ERR, URL } from "libs/constants"
import { DropdownInterface, MessageRoomInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { IoMdTrash } from "react-icons/io"
import { MdGroup, MdPerson, MdPersonAdd } from "react-icons/md"
import { useHistory } from "react-router"
import Wrapper from "utils/elements/Wrapper"
import TooltipBackground from "utils/modals/TooltipBackground"

const ChatTopGroupDropdown = ({ brand, room }: { brand: boolean; room: MessageRoomInterface }) => {
  const history = useHistory()

  const { token, user } = useProps()

  const [openDropdown, setOpenDropdown] = useState(false)

  const [openAddUsers, setOpenAddUsers] = useState(false)
  const [openLeaveGroup, setOpenLeaveGroup] = useState(false)
  const [openGroupInfo, setOpenGroupInfo] = useState(false)
  const [openRemoveGroup, setOpenRemoveGroup] = useState(false)

  const [links, setLinks] = useState<DropdownInterface[]>([])

  useEffect(() => {
    const newLinks = []

    if (brand) {
      newLinks.push({
        link: onVisitBrand,
        param: room.handle,
        title: "Group Info",
        icon: <MdGroup className="text-grey-40" />
      })
    } else {
      newLinks.push({
        link: setOpenGroupInfo,
        param: true,
        title: "Group Info",
        icon: <MdGroup className="text-grey-40" />
      })
    }

    if (!brand) {
      if (room.master !== user.id) {
        newLinks.push({
          link: setOpenLeaveGroup,
          param: true,
          title: "Leave Group",
          icon: <MdPerson className="text-grey-40" />
        })
      } else if (room.master === user.id) {
        newLinks.push({
          link: setOpenAddUsers,
          param: true,
          title: "Add Users",
          icon: <MdPersonAdd className="text-grey-40" />
        })

        newLinks.push({
          link: setOpenRemoveGroup,
          param: true,
          title: "Remove Group",
          icon: <IoMdTrash className="text-grey-40" />
        })
      }
    }

    setLinks(newLinks)
  }, [room])

  const onRemove = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      setOpenRemoveGroup(false)

      toastSuccess("Successfully removed group")

      history.push(URL.CHAT.BASE)
    }
  }

  const onVisitBrand = (id: string) => {
    if (id) {
      history.push(URL.BRANDS.BASE.replace(":param", id))
    } else {
      toastError(ERR.REFRESH)
    }
  }

  return (
    <>
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
                  className="group my-2 flex h-36 w-full items-center gap-10 rounded-4 px-14 hover:bg-grey-6"
                  name={link.title}
                  onClick={() => link.link(link.param)}
                >
                  <div className="h-16 opacity-40 group-hover:opacity-100">{link.icon}</div>
                  <div className="text-14 font-bold text-black">{link.title}</div>
                </button>
              ))}
          </div>
        </Wrapper>
      </div>
      <Wrapper open={openGroupInfo}>
        <ModalChatGroupInfo handler={setOpenGroupInfo} open={openGroupInfo} room={room} />
      </Wrapper>
      <Wrapper open={openAddUsers && room.master === user.id}>
        <ModalChatAddGroup chatid={room.id} handler={setOpenAddUsers} open={openAddUsers} />
      </Wrapper>
      <Wrapper open={openLeaveGroup && room.master !== user.id}>
        <ModalChatLeaveGroup chatid={room.id} handler={setOpenLeaveGroup} open={openLeaveGroup} />
      </Wrapper>
      <Wrapper open={openRemoveGroup && room.master === user.id}>
        <ModalConfirmation
          data={{
            title: "Remove group",
            text: "Removing the group removes all messages",
            icon: <IoMdTrash className="text-48 text-purple" />
          }}
          action={onRemove}
          handler={setOpenRemoveGroup}
          open={openRemoveGroup}
        />
      </Wrapper>
    </>
  )
}

export default ChatTopGroupDropdown
