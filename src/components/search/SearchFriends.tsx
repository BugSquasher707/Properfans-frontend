import { URL } from "libs/constants"
import { ProfileInterface } from "libs/interfaces"
import React from "react"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"

const SearchFriends = ({ users, full }: { users: ProfileInterface[]; full?: boolean }) => {
  return (
    <>
      <div className="h-full w-full">
        {users.length > 0 ? (
          <div className={`grid h-full w-full grid-cols-1 items-start pr-12 ${full ? "" : "scroll overflow-y-scroll"}`}>
            <div className="h-full w-full">
              {users.map((users: ProfileInterface, key: number) => (
                <div
                  key={key}
                  className="grid w-full grid-cols-[1fr,auto] items-center gap-14 rounded-4 p-10 hover:bg-purple-10"
                >
                  <Link
                    className="grid w-full grid-cols-[auto,1fr] gap-14"
                    to={URL.USERS.BASE.replace(":param", users.handle)}
                  >
                    <div className="flex h-42 w-42 items-center justify-center">
                      {users.avatar ? (
                        <img alt="" className="h-42 w-42 rounded-full" src={users.avatar} />
                      ) : (
                        <Avatar size={42} />
                      )}
                    </div>
                    <div className="flex w-full items-center">
                      <div className="grid w-full grid-cols-1 items-center gap-4">
                        <div className="relative w-full truncate overflow-ellipsis text-14 font-bold text-black">
                          {users.userName}
                        </div>
                        <div className="w-full text-left text-11 text-grey-40">@{users.handle}</div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex w-full items-center justify-center rounded-4 py-50 text-14 font-semibold text-grey-40">
            Search for users...
          </div>
        )}
      </div>
    </>
  )
}

export default SearchFriends
