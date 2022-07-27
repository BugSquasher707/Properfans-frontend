import { openLink } from "api/integration/functions"
import { ReactComponent as EllingsenGroupIcon } from "assets/img/ellingsengroupIcon.svg"
import { ReactComponent as ProperCoin } from "assets/img/propercoin.svg"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React, { useEffect } from "react"
import { MdPowerSettingsNew, MdSettings } from "react-icons/md"
import NumberFormat from "react-number-format"
import { Link, useHistory } from "react-router-dom"
import ProfileCreator from "utils/profile/ProfileCreator"

const ProfileDropdown = ({ handler, setOpen }: { handler: any; setOpen: any }) => {
  const { socket, user, wallet, setWallet, onReset } = useProps()

  const history = useHistory()

  useEffect(() => {
    if (!socket) {
      return
    }

    const eventHandler = (data: any) => {
      setWallet(data)
    }

    socket.on("walletUpdate", eventHandler)

    return () => {
      socket.off("walletUpdate", eventHandler)
    }
  }, [])

  return (
    <div className="absolute top-50 right-0 z-30 w-[240px] rounded-4 border-1 border-grey-12 bg-white p-16 shadow-md dark:shadow-none lg:top-44">
      <div className="mb-4 w-full truncate overflow-ellipsis text-14 font-bold text-black">
        {user.userName ?? "Username"}
      </div>
      <div className="w-full truncate overflow-ellipsis text-12 text-grey-40">@{user.handle ?? "tag"}</div>
      <Wrapper open={user.admin}>
        <button
          className="group mt-14 grid w-full grid-cols-[auto,1fr] items-center justify-start gap-6 text-12 font-bold text-grey-40 hover:text-black"
          onClick={(e) => openLink(e, URL.ADMIN)}
        >
          <EllingsenGroupIcon className="fill-current text-grey-40 group-hover:text-purple" />
          <div className="w-full text-left font-bold text-grey-40 group-hover:text-black">Admin Account</div>
        </button>
      </Wrapper>
      <div className="my-16 w-full border-b-1 border-grey-12"></div>
      {user.creator ? <ProfileCreator handler={handler} /> : ""}
      <Link
        className="mb-4 grid h-36 w-full grid-cols-[auto,1fr] items-center justify-start gap-10 rounded-4 px-10 text-14 font-bold text-black hover:bg-grey-3"
        to={URL.ACCOUNT.BASE}
      >
        <MdSettings className="text-18 text-grey-40" /> Account Settings
      </Link>
      <button
        className="grid h-36 w-full grid-cols-[auto,1fr] items-center justify-start gap-10 rounded-4 px-10  hover:bg-red-10"
        onClick={() => {
          onReset()
          history.push("/")
        }}
      >
        <MdPowerSettingsNew className="text-18 text-red" />
        <div className="w-full text-left text-14 font-bold text-red">Sign out</div>
      </button>
      <div className="my-16 w-full border-b-1 border-grey-12"></div>
      <div className="mb-16 grid w-full grid-cols-[50px,1fr] items-center gap-12">
        <div className="text-12 text-grey-40">Balance</div>
        <div className="grid w-full grid-cols-1 gap-4">
          <div className="grid w-full grid-cols-[auto,auto] items-center justify-end gap-8 text-14 font-bold text-black">
            <ProperCoin className="h-16 w-16 fill-current text-purple" />
            <NumberFormat displayType={"text"} value={wallet.wallet} thousandSeparator />
          </div>
          <div className="w-full text-right text-12 text-grey-40">
            <NumberFormat displayType={"text"} prefix={"$"} value={wallet.wallet / 100} thousandSeparator />
          </div>
        </div>
      </div>
      <Link
        className="group grid h-36 w-full grid-cols-[auto,auto] items-center justify-center gap-10 rounded-4 bg-purple-10 px-10 text-14 font-bold text-purple hover:bg-purple-20"
        to={URL.FAN.SHOP}
        onClick={() => setOpen(false)}
      >
        <ProperCoin className="h-16 w-16 fill-current text-purple-40 group-hover:text-purple" /> Purchase Propercoins
      </Link>
    </div>
  )
}

export default ProfileDropdown
