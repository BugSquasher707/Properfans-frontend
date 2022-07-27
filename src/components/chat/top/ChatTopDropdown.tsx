import { statusApi } from "api/endpoints/status"
import { toastSuccess } from "api/integration/toaster"
import ModalConfirmation from "components/modals/other/ModalConfirmation"
import { useProps } from "contexts/PropsContext"
import { DropdownInterface, RelationInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { BiDotsVerticalRounded } from "react-icons/bi"
import { MdPerson, MdPersonAdd } from "react-icons/md"
import Wrapper from "utils/elements/Wrapper"
import TooltipBackground from "utils/modals/TooltipBackground"

const ChatTopDropdown = ({
  relation,
  userid,
  handlerRelation
}: {
  relation: RelationInterface
  userid: string
  handlerRelation: any
}) => {
  const { token } = useProps()

  const [openDropdown, setOpenDropdown] = useState(false)

  const [openAdd, setOpenAdd] = useState(false)
  const [openRemove, setOpenRemove] = useState(false)
  const [openBlock, setOpenBlock] = useState(false)
  const [openUnblock, setOpenUnblock] = useState(false)

  const [links, setLinks] = useState<DropdownInterface[]>([])

  useEffect(() => {
    onLoad()
  }, [relation])

  const onLoad = () => {
    const newLinks = []

    if (relation.friends) {
      newLinks.push({
        link: setOpenRemove,
        param: true,
        title: "Remove friend",
        icon: <MdPerson className="text-grey-40" />
      })
    } else {
      newLinks.push({
        link: setOpenAdd,
        param: true,
        title: "Add friend",
        icon: <MdPersonAdd className="text-grey-40" />
      })
    }

    if (relation.blocked) {
      newLinks.push({
        link: setOpenUnblock,
        param: true,
        title: "Unblock user",
        icon: <MdPerson className="text-grey-40" />
      })
    } else {
      newLinks.push({
        link: setOpenBlock,
        param: true,
        title: "Block user",
        icon: <MdPerson className="text-grey-40" />
      })
    }

    setLinks(newLinks)
  }

  const onAdd = async () => {
    console.log(token, userid)

    const result = await statusApi()

    if (result) {
      setOpenAdd(false)
      handlerRelation()
    }
  }

  const onRemove = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      setOpenRemove(false)
      handlerRelation()

      toastSuccess("Successfully removed friend")
    }
  }

  const onBlock = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      setOpenBlock(false)
      handlerRelation()

      toastSuccess("Successfully blocked user")
    }
  }

  const onUnblock = async () => {
    console.log(token)

    const result = await statusApi()

    if (result) {
      setOpenUnblock(false)
      handlerRelation()

      toastSuccess("Successfully unblocked user")
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
                  className="group my-2 flex h-36 w-full items-center justify-start space-x-[10px] rounded-4 px-14 hover:bg-grey-6"
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
      <ModalConfirmation
        data={{
          title: "Add user",
          text: "Add user to become friends",
          icon: <MdPerson className="text-48 text-purple" />
        }}
        action={onAdd}
        handler={setOpenAdd}
        open={openAdd}
      />
      <ModalConfirmation
        data={{
          title: "Remove user",
          text: "Remove friend to no longer receive messages",
          icon: <MdPerson className="text-48 text-purple" />
        }}
        action={onRemove}
        handler={setOpenRemove}
        open={openRemove}
      />
      <ModalConfirmation
        data={{
          title: "Block user",
          text: "Block user to no longer receive messages or friend requests",
          icon: <MdPerson className="text-48 text-purple" />
        }}
        action={onBlock}
        handler={setOpenBlock}
        open={openBlock}
      />
      <ModalConfirmation
        data={{
          title: "Unblock user",
          text: "Unblock user to receive messages or friend requests again",
          icon: <MdPerson className="text-48 text-purple" />
        }}
        action={onUnblock}
        handler={setOpenUnblock}
        open={openUnblock}
      />
    </>
  )
}

export default ChatTopDropdown
