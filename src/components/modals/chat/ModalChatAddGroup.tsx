import { statusApi } from "api/endpoints/status"
import { onPlural, onSortUsername } from "api/integration/functions"
import { toastError, toastSuccess } from "api/integration/toaster"
import ChatUsersSearch from "components/chat/elements/ChatUsersSearch"
import { useProps } from "contexts/PropsContext"
import { FriendInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { ImUsers } from "react-icons/im"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import InputSearch from "utils/inputs/InputSearch"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalChatAddGroup = ({ chatid, open, handler }: { chatid: string; open: boolean; handler: any }) => {
  const { token } = useProps()

  const [search, setSearch] = useState("")

  const [friends, setFriends] = useState<FriendInterface[]>([])
  const [results, setResults] = useState<FriendInterface[]>([])
  const [visible, setVisible] = useState<FriendInterface[]>([])

  const [selected, setSelected] = useState<FriendInterface[]>([])
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  useEffect(() => {
    if (open) {
      setSearch("")

      setFriends([])
      setSelected([])
      setSelectedIds([])

      onLoad()
    }
  }, [open])

  useEffect(() => {
    setSelectedIds(selected.map((friend: FriendInterface) => friend.id))
  }, [selected])

  useEffect(() => {
    onSearch()
  }, [search])

  useEffect(() => {
    setVisible(search && results && results.length > 0 ? results : friends)
  }, [friends, results])

  const onLoad = async () => {
    console.log(chatid, token)

    const result = await statusApi()

    if (result) {
      setFriends(onSortUsername(result))
    }
  }

  const onSubmit = async () => {
    if (selectedIds.length === 0) {
      toastError("Select at least one user to add to the group")
      return
    }

    const result = await statusApi()

    if (result) {
      toastSuccess(`Successfully added user${onPlural(selectedIds.length)} to group`)
      handler(false)
    }
  }

  const onSearch = async () => {
    if (!search) {
      setFriends([])
      return
    }

    const result = await statusApi()

    if (result) {
      setResults(result)
    }
  }

  const onToggle = (tog: FriendInterface) => {
    if (selectedIds.indexOf(tog.id) > -1) {
      setSelected(selected.filter((friend: FriendInterface) => friend.id !== tog.id))
    } else {
      setSelected((old: FriendInterface[]) => [...old, tog])
    }
  }

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 pt-30 pb-20 shadow-sm dark:shadow-none lg:w-450">
          <div className="center mb-20 h-40 w-full">
            <ImUsers className="text-40 text-purple" />
          </div>
          <div className="mb-20 w-full text-center text-16 font-bold text-black md:mb-24">Add users To Group</div>
          <div className="mb-20 w-full">
            <InputSearch handler={setSearch} handlerSubmit={onSearch} title="Search friend..." value={search} />
          </div>
          <ChatUsersSearch handlerToggle={onToggle} selected={selected} selectedIds={selectedIds} visible={visible} />
          <div className="grid w-full grid-cols-2 gap-12">
            <ButtonPurple action={onSubmit} title={"Add to Group"} full />
            <button
              className="w-full text-center text-14 font-bold text-grey-40 hover:text-black"
              onClick={() => handler(false)}
            >
              Close
            </button>
          </div>
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalChatAddGroup
