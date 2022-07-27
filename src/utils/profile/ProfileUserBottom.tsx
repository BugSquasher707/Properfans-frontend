import WrapperVerified from "components/wrappers/WrapperVerified"
import React from "react"
import Verified from "utils/icons/Verified"

const ProfileUserBottom = ({
  tag,
  username,
  verified,
  small
}: {
  tag: string
  username: string
  verified: boolean
  small: boolean
}) => {
  return (
    <>
      <div className="mb-16 w-full">
        <div className={`mb-4 flex w-full ${small ? "justify-start lg:justify-center" : "justify-center"}`}>
          <div
            className={`relative max-w-full truncate overflow-ellipsis text-14 font-bold text-black ${
              verified ? "pr-20" : ""
            }`}
          >
            {username ? username : "Name"}
            <WrapperVerified>{verified ? <Verified size={16} /> : ""}</WrapperVerified>
          </div>
        </div>
        <div className="w-full max-w-full truncate overflow-ellipsis text-center text-12 font-bold text-grey-40">
          @{tag ? tag : "tag"}
        </div>
      </div>
    </>
  )
}

export default ProfileUserBottom
