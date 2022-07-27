import Wrapper from "components/wrappers/Wrapper"
import { URL } from "libs/constants"
import { ProfileInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"

const StatisticsFollowers = ({ followers }: { followers: ProfileInterface[] }) => {
  return (
    <div className="-my-12">
      {followers.map((follower: ProfileInterface, key: number) => (
        <Link
          key={key}
          className="group relative -mx-12 grid h-60 cursor-pointer grid-cols-[auto,1fr] items-center justify-start gap-12 rounded-4 bg-white px-12 hover:bg-grey-6"
          to={URL.USERS.BASE.replace(":param", follower.handle)}
        >
          <div className="flex">
            {follower.avatar ? (
              <img alt="" className="h-32 w-32 overflow-hidden rounded-full" src={follower.avatar} />
            ) : (
              <Avatar size={32} />
            )}
          </div>
          <div className="flex-1 font-bold">
            <div className="mb-2 truncate overflow-ellipsis text-14 leading-4 text-black">{follower.userName}</div>
            <div className="text-12 leading-normal text-grey-40">@{follower.handle}</div>
          </div>
          <Wrapper open={key !== followers.length - 1}>
            <div className="absolute left-10 right-10 bottom-0 border-b-1 border-grey-4 group-hover:border-transparent"></div>
          </Wrapper>
        </Link>
      ))}
    </div>
  )
}

export default StatisticsFollowers
