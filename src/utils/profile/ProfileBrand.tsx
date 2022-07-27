import WrapperAbsolute from "components/wrappers/WrapperAbsolute"
import WrapperVerified from "components/wrappers/WrapperVerified"
import React from "react"
import Avatar from "utils/avatars/Avatar"
import Verified from "utils/icons/Verified"

const ProfileBrand = ({ brand, full }: { brand: any; full: boolean }) => {
  return (
    <>
      <div className="group grid w-full grid-cols-[auto,1fr] items-center gap-14">
        <div className="flex h-32 w-32 items-center justify-center rounded-full">
          {brand.avatar ? <img alt="" className="h-32 w-32 rounded-full" src={brand.avatar} /> : <Avatar />}
        </div>
        <div className="relative w-full">
          <WrapperAbsolute>
            <div className="mb-2 flex w-full">
              <div className="relative max-w-full select-none truncate overflow-ellipsis pr-20 text-14 font-bold text-black group-hover:text-purple">
                {brand.userName}
                <WrapperVerified>{brand.verified ? <Verified size={16} /> : ""}</WrapperVerified>
              </div>
            </div>
            {full ? <div className="w-full text-left text-12 font-bold text-grey-40">@{brand.handle}</div> : ""}
          </WrapperAbsolute>
        </div>
      </div>
    </>
  )
}

export default ProfileBrand
