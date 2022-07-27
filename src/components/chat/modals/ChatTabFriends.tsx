import ChatButtonUserBlock from "components/chat/modals/ChatButtonUserBlock"
import ChatButtonUserUnblock from "components/chat/modals/ChatButtonUserUnblock"
import WrapperAbsolute from "components/wrappers/WrapperAbsolute"
import WrapperVerified from "components/wrappers/WrapperVerified"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { FriendType, OverlayType } from "libs/enums"
import { FriendInterface } from "libs/interfaces"
import React from "react"
import { CgUnblock } from "react-icons/cg"
import { MdBlock, MdChat, MdPersonRemove } from "react-icons/md"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import Verified from "utils/icons/Verified"

const ChatTabFriends = ({
  users,
  handlerAction,
  all
}: {
  users: FriendInterface[]
  handlerAction: any
  all: boolean
}) => {
  const { setOverlay } = useProps()

  return (
    <>
      {users && users.length > 0 ? (
        <div className="grid h-full w-full grid-cols-1 items-start">
          <div className="w-full">
            {users.map((user: FriendInterface, key: number) => (
              <div
                key={key}
                className="grid w-full cursor-pointer grid-cols-[auto,1fr,auto] items-center gap-14 rounded-4 p-10 hover:bg-purple-10"
              >
                <div className="flex h-42 w-42 items-center justify-center">
                  {user.avatar ? (
                    <img alt="" className="h-42 w-42 rounded-full" src={user.avatar} />
                  ) : (
                    <Avatar size={42} />
                  )}
                </div>
                <div className="grid w-full grid-cols-1 gap-2">
                  <div className="grid w-full grid-cols-1 gap-4">
                    <div className="relative h-16 w-full">
                      <WrapperAbsolute>
                        <div className="flex w-full">
                          <div className="relative max-w-full truncate overflow-ellipsis pr-20 text-14 font-bold text-black">
                            {user.userName}
                            <WrapperVerified>{user.isActive ? <Verified size={16} /> : ""}</WrapperVerified>
                          </div>
                        </div>
                      </WrapperAbsolute>
                    </div>
                    <div className="w-full truncate overflow-ellipsis text-left text-11 text-grey-40">
                      @{user.handle}
                    </div>
                  </div>
                </div>
                <div className="items-center.justify-center flex space-x-[10px]">
                  <Link
                    className="group flex h-28 w-38 items-center justify-center rounded-full border-1 border-grey-12 bg-grey-2 hover:border-purple hover:bg-purple"
                    to={URL.CHAT.CHANNEL.replace(":id", user.id)}
                  >
                    <MdChat className="text-16 text-purple group-hover:text-white" />
                  </Link>
                  {
                    {
                      [FriendType.Blocked]: (
                        <ChatButtonUserUnblock handlerAction={handlerAction} id={user.id} index={key} />
                      ),
                      [FriendType.Friends]: (
                        <ChatButtonUserBlock handlerAction={handlerAction} id={user.id} index={key} />
                      ),
                      [FriendType.ActionRemoved]: (
                        <button className="group flex h-28 w-38 items-center justify-center rounded-full bg-red">
                          <MdPersonRemove className="text-16 text-white" />
                        </button>
                      ),
                      [FriendType.ActionBlocked]: (
                        <button className="group flex h-28 w-38 items-center justify-center rounded-full bg-red">
                          <MdBlock className="text-16 text-white" />
                        </button>
                      ),
                      [FriendType.ActionUnblocked]: (
                        <button className="group flex h-28 w-38 items-center justify-center rounded-full bg-green">
                          <CgUnblock className="text-16 text-white" />
                        </button>
                      )
                    }[user.type]
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {all ? (
            <div className="my-40 flex h-full w-full items-center text-center text-14 text-grey-40">
              <div className="flex w-full justify-center">
                <div className="grid w-[165px] grid-cols-1">
                  <div className="mb-30 w-full text-22 font-bold text-black">Don’t be shy, say something!</div>
                  <div className="mb-40 flex w-full justify-center">
                    <img alt="" className="h-80 w-80" src={"/emojis/emoji_cool.png"} />
                  </div>
                  <ButtonPurple action={() => setOverlay(OverlayType.Search)} title={"Search users"} full small />
                </div>
              </div>
            </div>
          ) : (
            <div className="mb-20 flex h-[250px] w-full items-center justify-center text-14 font-bold text-grey-40">
              No friends found
            </div>
          )}
        </>
      )}
    </>
  )
}

export default ChatTabFriends
