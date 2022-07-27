import WrapperAbsolute from "components/wrappers/WrapperAbsolute"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React from "react"
import { AiFillCaretRight } from "react-icons/ai"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import ProfileBrand from "utils/profile/ProfileBrand"

const ProfileCreator = ({ handler }: { handler: any }) => {
  const { brandActive } = useProps()

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-10">
        {brandActive.id ? (
          <>
            <Link className="w-full" to={URL.BRANDS.BASE.replace(":param", brandActive.handle)}>
              <ProfileBrand brand={brandActive} full />
            </Link>
          </>
        ) : (
          <button className="group grid w-full grid-cols-[auto,1fr] items-center gap-14" onClick={() => handler(true)}>
            <div className="flex h-32 w-32 items-center justify-center rounded-full">
              <Avatar />
            </div>
            <div className="relative w-full">
              <WrapperAbsolute>
                <div className="mb-2 flex w-full">
                  <div className="relative max-w-full select-none truncate overflow-ellipsis pr-20 text-14 font-bold text-black group-hover:text-purple">
                    No brand selected
                  </div>
                </div>
                <div className="w-full text-left text-12 font-bold text-grey-40">Click to view brands</div>
              </WrapperAbsolute>
            </div>
          </button>
        )}
        <button
          className="group flex w-full items-center gap-4 text-12 font-bold text-grey-40 hover:text-black"
          onClick={() => handler(true)}
        >
          {brandActive.id ? "Swap brand account" : "Select brand account"}{" "}
          <AiFillCaretRight className="text-grey-20 group-hover:text-black" />
        </button>
      </div>
      <div className="my-16 w-full border-b-1 border-grey-12"></div>
    </>
  )
}

export default ProfileCreator
