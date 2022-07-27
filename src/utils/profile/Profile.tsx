import { useProps } from "contexts/PropsContext"
import React, { useEffect, useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import Avatar from "utils/avatars/Avatar"
import PopupWrapper from "utils/elements/PopupWrapper"
import ProfileDropdown from "utils/profile/ProfileDropdown"
import ProfileDropdownBrands from "utils/profile/ProfileDropdownBrands"

const Profile = () => {
  const { socket, user, setWallet } = useProps()

  const [open, setOpen] = useState(false)
  const [openBrands, setOpenBrands] = useState(false)

  useEffect(() => {
    if (!socket) {
      return
    }

    const eventHandlerBalance = (data: any) => {
      setWallet(data)
    }

    socket.on("walletUpdate", eventHandlerBalance)

    return () => {
      socket.off("walletUpdate", eventHandlerBalance)
    }
  }, [])

  const closeProfile = (state: boolean) => {
    setOpen(state)
    setOpenBrands(state)
  }

  return (
    <div className="relative hidden lg:flex lg:h-32">
      <button className="group flex items-center justify-center space-x-[12px]" onClick={() => setOpen(!open)}>
        <div className="h-40 w-40 lg:h-32 lg:w-32">
          {user.avatar ? (
            <img alt="" className="h-40 w-40 rounded-full lg:h-32 lg:w-32" src={user.avatar} />
          ) : (
            <Avatar />
          )}
        </div>
        <div
          className={`hidden items-center text-grey-40 group-hover:text-black lg:flex ${
            open ? "rotate-180 transform text-black" : ""
          }`}
        >
          <MdKeyboardArrowDown />
        </div>
      </button>
      <PopupWrapper handler={closeProfile} open={open}>
        {open && !openBrands ? <ProfileDropdown handler={setOpenBrands} setOpen={setOpen} /> : ""}
        {open && openBrands ? <ProfileDropdownBrands handler={setOpenBrands} /> : ""}
      </PopupWrapper>
    </div>
  )
}

export default Profile
