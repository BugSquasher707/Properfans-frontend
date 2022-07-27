import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { ProfileBrandInterface } from "libs/interfaces"
import React from "react"
import { AiFillCaretLeft } from "react-icons/ai"
import { GoPlus } from "react-icons/go"
import { Link } from "react-router-dom"
import ProfileBrand from "utils/profile/ProfileBrand"

const ProfileDropdownBrands = ({ handler }: { handler: any }) => {
  const { brands, setBrand } = useProps()

  return (
    <div className="absolute top-50 right-0 z-30 w-[240px] rounded-4 border-1 border-grey-12 bg-white p-16 shadow-md dark:shadow-none lg:top-44">
      <button
        className="group mb-20 flex w-full items-center gap-4 text-12 font-bold text-grey-40 hover:text-black"
        onClick={() => handler(false)}
      >
        <AiFillCaretLeft className="text-grey-20 group-hover:text-black" />
        Brand accounts
      </button>
      <div className="flex w-full flex-wrap">
        {brands.map((profile: ProfileBrandInterface, key: number) => (
          <div key={key} className="grid w-full grid-cols-1">
            <button
              className="w-full"
              onClick={() => {
                handler(false)
                setBrand(profile.handle)
              }}
            >
              <ProfileBrand key={key} brand={profile} full />
            </button>
            <div className="my-16 w-full border-b-1 border-grey-12"></div>
          </div>
        ))}
      </div>
      <Link
        className="mb-4 grid h-36 w-full grid-cols-[auto,auto] items-center justify-center gap-10 rounded-4 px-10 text-14 font-bold text-black hover:bg-grey-3"
        to={URL.CREATOR.CLUB.ADD}
      >
        <GoPlus className="text-grey-20" /> Add Club Account
      </Link>
    </div>
  )
}

export default ProfileDropdownBrands
