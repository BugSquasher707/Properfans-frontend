import { statusApi } from "api/endpoints/status"
import { onSortUsername } from "api/integration/functions"
import { toastError, toastSuccess } from "api/integration/toaster"
import ChatGroupUser from "components/chat/modals/ChatGroupUser"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { MessageRoomInterface, ProfileInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { ImUsers } from "react-icons/im"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import InputField from "utils/inputs/InputField"
import InputSearch from "utils/inputs/InputSearch"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalChatGroupInfo = ({ room, open, handler }: { room: MessageRoomInterface; open: boolean; handler: any }) => {
  const { token, user } = useProps()

  const [search, setSearch] = useState("")
  const [name, setName] = useState(room.name)
  const [master, setMaster] = useState(false)

  const [friends, setFriends] = useState<ProfileInterface[]>([])
  const [friendsShown, setFriendsShown] = useState<ProfileInterface[]>([])

  useEffect(() => {
    setSearch("")
    setFriends([])
    setMaster(room.master === user.id)

    onLoad()
  }, [open])

  useEffect(() => {
    setFriendsShown(
      friends.filter((friend: ProfileInterface) => friend.userName.includes(search) || friend.handle.includes(search))
    )
  }, [friends, search])

  const onSubmit = async () => {
    if (!name) {
      toastError("Enter a group name")
      return
    }

    console.log(token)

    const result = await statusApi()

    if (result) {
      toastSuccess("Successfully saved group")
      handler(false)
    }
  }

  const onLoad = async () => {
    const result = await statusApi()

    if (result) {
      const sorted = onSortUsername(result)

      setFriends(sorted)
    }
  }

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 flex w-full max-w-full flex-wrap rounded-4 bg-white px-20 pt-30 pb-20 shadow-sm dark:shadow-none lg:w-450">
          <div className="center mb-20 h-40 w-full">
            <ImUsers className="text-40 text-purple" />
          </div>
          <div className="mb-20 w-full text-center text-16 font-bold text-black md:mb-24">Group Information</div>
          <div className="mb-20 w-full">
            <InputSearch handler={setSearch} handlerSubmit={null} title="Search user..." value={search} />
          </div>
          {friendsShown && friendsShown.length > 0 ? (
            <div className="scroll -mx-14 mb-20 grid h-[250px] w-[calc(100%+28px)] grid-cols-1 items-start overflow-y-auto px-14">
              <div className="grid w-full grid-cols-1 items-start">
                {friendsShown
                  .filter((friend: ProfileInterface) => friend.id === room.master)
                  .map((friend: ProfileInterface, key: number) => (
                    <ChatGroupUser key={key} handler={onLoad} id={master ? room.id : ""} user={friend} master />
                  ))}
                {friendsShown
                  .filter((friend: ProfileInterface) => friend.id !== room.master)
                  .map((friend: ProfileInterface, key: number) => (
                    <ChatGroupUser key={key} handler={onLoad} id={master ? room.id : ""} user={friend} />
                  ))}
              </div>
            </div>
          ) : (
            <div className="mb-20 flex h-[250px] w-full items-center justify-center text-14 font-bold text-grey-40 md:mb-30">
              No users found
            </div>
          )}
          <Wrapper open={master}>
            <div className="mb-30 w-full border-b-1 border-grey-10"></div>
            <div className="mb-30 w-full">
              <InputField data={{ title: "Name of the group" }} handler={setName} value={name} />
            </div>
          </Wrapper>
          <div className={`grid w-full gap-12 ${master ? "grid-cols-2" : "grid-cols-1"}`}>
            <Wrapper open={master}>
              <ButtonPurple action={onSubmit} title={"Save Group"} full />
            </Wrapper>
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

export default ModalChatGroupInfo
