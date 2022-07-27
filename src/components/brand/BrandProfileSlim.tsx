import WrapperVerified from "components/wrappers/WrapperVerified"
import { URL } from "libs/constants"
import React from "react"
import { AiFillCaretLeft } from "react-icons/ai"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import Verified from "utils/icons/Verified"

const BrandProfileSlim = ({ profile }: { profile: any }) => {
  return (
    <>
      <div className="grid w-full grid-cols-[auto,auto,1fr] items-center gap-12 px-12 py-20">
        <Link className="flex h-24 w-24 items-center justify-start lg:hidden" to={URL.FAN.FEED}>
          <AiFillCaretLeft className="text-20 text-grey-40 group-hover:text-black" />
        </Link>
        <div className="flex h-32 w-full items-center justify-start sm:justify-center">
          {profile.avatar ? (
            <img alt="" className="h-32 w-32 overflow-hidden rounded-full" src={profile.avatar} />
          ) : (
            <Avatar size={32} />
          )}
        </div>
        <div className="w-full">
          <div className="mb-4 flex w-full justify-start">
            <div
              className={`relative max-w-full truncate overflow-ellipsis text-14 font-bold text-black ${
                profile.verified ? "pr-20" : ""
              }`}
            >
              {profile.userName ? profile.userName : "Name"}
              <WrapperVerified>{profile.verified ? <Verified size={16} /> : ""}</WrapperVerified>
            </div>
          </div>
          <div className="w-full max-w-full truncate overflow-ellipsis text-left text-12 font-bold text-grey-40">
            @{profile.handle ? profile.handle : "handle"}
          </div>
        </div>
      </div>
    </>
  )
}

export default BrandProfileSlim
