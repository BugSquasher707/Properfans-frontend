import { URL } from "libs/constants"
import React from "react"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"

const SearchClubs = ({ clubs, full }: { clubs: any; full?: boolean }) => {
  return (
    <>
      <div className="h-full w-full">
        {clubs && clubs.length > 0 ? (
          <div className={`grid h-full w-full grid-cols-1 items-start pr-12 ${full ? "" : "scroll overflow-y-scroll"}`}>
            <div className="h-full w-full">
              {clubs.map((club: any, key: number) => (
                <Link
                  key={key}
                  className="grid w-full grid-cols-[1fr,auto] items-center gap-14 rounded-4 p-10 hover:bg-purple-10"
                  to={URL.BRANDS.BASE.replace(":param", club.handle)}
                >
                  <div className="grid w-full grid-cols-[auto,1fr] gap-14">
                    <div className="flex h-42 w-42 items-center justify-center">
                      {club.avatar ? (
                        <img alt="" className="h-42 w-42 rounded-full" src={club.avatar} />
                      ) : (
                        <Avatar size={42} />
                      )}
                    </div>
                    <div className="flex w-full items-center">
                      <div className="grid w-full grid-cols-1 items-center gap-4">
                        <div className="relative w-full truncate overflow-ellipsis text-14 font-bold text-black">
                          {club.userName}
                        </div>
                        <div className="w-full text-left text-11 text-grey-40">@{club.handle}</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <MdKeyboardArrowRight className="text-14 text-grey-40 group-hover:text-black" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <div className="flex w-full items-center justify-center rounded-4 py-50 text-14 font-semibold text-grey-40">
            Search for clubs...
          </div>
        )}
      </div>
    </>
  )
}

export default SearchClubs
