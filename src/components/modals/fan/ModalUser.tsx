import WrapperVerified from "components/wrappers/WrapperVerified"
import { URL } from "libs/constants"
import { FollowInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"
import AvatarCreator from "utils/avatars/AvatarCreator"
import AvatarCreatorDefault from "utils/avatars/AvatarCreatorDefault"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import ButtonRed from "utils/buttons/colors/ButtonRed"
import ButtonGreyLightSmall from "utils/buttons/grey/ButtonGreyLightSmall"
import Verified from "utils/icons/Verified"

const ModalUser = ({ user }: { user: FollowInterface }) => {
  const userUnfollow = () => {
    // TODO - User unfollow
  }

  const userFollow = () => {
    // TODO - User follow
  }

  return (
    <>
      <Link
        className="grid w-full cursor-pointer grid-cols-[auto,1fr] items-center gap-14 rounded-4 p-12 py-10 hover:bg-purple-10"
        to={URL.USERS.BASE.replace(":param", user.handle)}
      >
        <div
          className={`flex h-42 w-42 items-center justify-center rounded-full ${
            user.creator ? "bg-gradient-to-r from-purple to-green" : ""
          }`}
        >
          {user.avatar ? (
            <AvatarCreator creator={user.creator} icon={user.avatar} />
          ) : (
            <AvatarCreatorDefault creator={user.creator} />
          )}
        </div>
        <div
          className={`grid w-full grid-cols-1 ${user.creator ? "max-w-[calc(100%-200px)]" : "max-w-[calc(100%-60px)]"}`}
        >
          <div className="flex w-full items-center justify-start space-x-[4px]">
            <div className="relative select-none overflow-hidden overflow-ellipsis font-bold text-black group-hover:text-purple">
              {user.userName}
              <WrapperVerified> {user.verified ? <Verified size={16} /> : ""}</WrapperVerified>
            </div>
          </div>
          <div className="w-full text-left text-11 text-grey-40">@{user.handle}</div>
        </div>
        <div className={`w-[130px] pr-4 ${user.creator ? "" : "hidden"}`}>
          {user.following ? (
            <div className="w-full" onClick={() => userFollow()}>
              <ButtonGreyLightSmall title={"Follow"} />
            </div>
          ) : (
            <div className="group w-full">
              <div className="flex w-full group-hover:hidden">
                <ButtonPurple action={() => null} title={"Following"} full small />
              </div>
              <div className="hidden w-full group-hover:flex">
                <ButtonRed action={userUnfollow} title={"Unfollow"} full small />
              </div>
            </div>
          )}
        </div>
      </Link>
    </>
  )
}

export default ModalUser
