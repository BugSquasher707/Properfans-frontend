import { openLink } from "api/integration/functions"
import { ReactComponent as EllingsenGroupIcon } from "assets/img/ellingsengroupIcon.svg"
import CreatorBrandPickerBrands from "components/creator/wrapper/CreatorBrandPickerBrands"
import Wrapper from "components/wrappers/Wrapper"
import WrapperAbsolute from "components/wrappers/WrapperAbsolute"
import WrapperVerified from "components/wrappers/WrapperVerified"
import { usePopup } from "contexts/PopupContext"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { ModalType } from "libs/enums"
import React, { useState } from "react"
import { BsFillCaretUpFill, BsFillCaretDownFill } from "react-icons/bs"
import { MdAdd, MdPowerSettingsNew } from "react-icons/md"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import Verified from "utils/icons/Verified"

const CreatorBrandPicker = () => {
  const { setModal } = usePopup()
  const { brandActive, user, onReset } = useProps()

  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-10">
        <div className="relative h-[72px] w-full">
          <div className="absolute top-0 left-0 z-10 w-full overflow-hidden rounded-4 bg-white dark:shadow-none xl:shadow">
            <div className="absolute top-0 left-0 h-full w-full bg-grey-3 xl:bg-white"></div>
            {brandActive && brandActive.id ? (
              <button
                className="relative flex w-full items-center justify-start space-x-[12px] px-16 py-20"
                onClick={() => setOpen(!open)}
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-full">
                  {brandActive.avatar ? (
                    <img alt="" className="h-32 w-32 rounded-full" src={brandActive.avatar} />
                  ) : (
                    <Avatar />
                  )}
                </div>
                <div className="relative w-full">
                  <WrapperAbsolute>
                    <div className="mb-2 flex w-full">
                      <div className="relative max-w-full select-none truncate overflow-ellipsis pr-20 text-14 font-bold text-black group-hover:text-purple">
                        {brandActive.userName ?? ""}
                        <WrapperVerified>{brandActive.verified ? <Verified size={16} /> : ""}</WrapperVerified>
                      </div>
                    </div>
                    <div className="w-full truncate overflow-ellipsis text-left text-12 font-bold text-grey-40">
                      Signed in via {user.userName ?? ""}
                    </div>
                  </WrapperAbsolute>
                </div>
                <div className="grid grid-cols-1">
                  <BsFillCaretUpFill className="text-12 text-grey-20" />
                  <BsFillCaretDownFill className="text-12 text-grey-20" />
                </div>
              </button>
            ) : (
              <button
                className="relative grid w-full grid-cols-[auto,1fr,auto] items-center gap-12 px-16 py-20"
                onClick={() => setOpen(!open)}
              >
                <div className="flex h-32 w-32 items-center justify-center rounded-full">
                  <Avatar />
                </div>
                <div className="relative w-full">
                  <WrapperAbsolute>
                    <div className="mb-2 flex w-full">
                      <div className="relative max-w-full select-none truncate overflow-ellipsis pr-20 text-14 font-bold text-black group-hover:text-purple">
                        No club
                      </div>
                    </div>
                    <div className="w-full truncate overflow-ellipsis text-left text-12 font-bold text-grey-40">
                      Click to create a club
                    </div>
                  </WrapperAbsolute>
                </div>
                <div className="grid grid-cols-1">
                  <BsFillCaretUpFill className="text-12 text-grey-20" />
                  <BsFillCaretDownFill className="text-12 text-grey-20" />
                </div>
              </button>
            )}
            <Wrapper open={open}>
              <div className="relative grid w-full grid-cols-1 px-16 pt-6 pb-16">
                <Wrapper open={user.admin}>
                  <button
                    className="group flex w-full items-center justify-start text-12 font-bold text-grey-40 hover:text-black"
                    onClick={(e) => openLink(e, URL.ADMIN)}
                  >
                    <EllingsenGroupIcon className="mr-6 fill-current text-grey-40 group-hover:text-purple" />
                    <div className="w-full text-left font-bold text-grey-40 group-hover:text-black">Admin Account</div>
                  </button>
                  <div className="my-16 w-full border-b-1 border-grey-12"></div>
                </Wrapper>
                <CreatorBrandPickerBrands url={URL.CREATOR.CLUB.EDIT} />
                <Link
                  className="group grid w-full grid-cols-[auto,1fr,auto] items-center gap-12 rounded-4 p-10 hover:bg-purple-10"
                  to={URL.CREATOR.CLUB.ADD}
                  onClick={() => setOpen(false)}
                >
                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-grey-3 group-hover:bg-purple">
                    <MdAdd className="text-16 text-grey-20 group-hover:text-white" />
                  </div>
                  <div className="w-full select-none text-14 font-bold text-black group-hover:text-purple">
                    Add club
                  </div>
                </Link>
                <div className="my-16 w-full border-b-1 border-grey-12"></div>
                <button
                  className="flex h-36 w-full items-center justify-start space-x-[10px] rounded-4 px-10 text-14 font-bold text-red hover:bg-red-10"
                  onClick={onReset}
                >
                  <MdPowerSettingsNew className="text-18 text-red" />
                  <div className="text-14 font-bold text-red">Sign out</div>
                </button>
              </div>
            </Wrapper>
          </div>
        </div>
        <Wrapper open={brandActive && brandActive.id}>
          <ButtonPurple
            action={() => setModal(ModalType.CreatorPost)}
            icon={<MdAdd className="text-14 text-white" />}
            title={"Create new post"}
            full
            small
          />
        </Wrapper>
      </div>
    </>
  )
}

export default CreatorBrandPicker
