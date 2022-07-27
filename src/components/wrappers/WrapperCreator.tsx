import CreatorSideActivity from "components/creator/sides/CreatorSideActivity"
import CreatorSideLinks from "components/creator/sides/CreatorSideLinks"
import NavSides from "components/nav/NavSides"
import Wrapper from "components/wrappers/Wrapper"
import WrapperSwipe from "components/wrappers/WrapperSwipe"
import React, { useState } from "react"
import { MdKeyboardArrowUp } from "react-icons/md"
import { RiMenu2Fill } from "react-icons/ri"
import TooltipBackground from "utils/modals/TooltipBackground"
import TooltipShade from "utils/modals/TooltipShade"

const WrapperCreator = ({ children, title }: { children: any; title: string }) => {
  const [openLinks, setOpenLinks] = useState(false)
  const [openActivity, setOpenActivity] = useState(false)

  return (
    <>
      <div className="fixed top-0 left-0 h-screen w-full bg-grey-2"></div>
      <WrapperSwipe>
        <button
          className="group fixed bottom-0 left-0 z-10 flex h-50 w-full items-center justify-center space-x-[8px] rounded-t-4 border-t-1 border-grey-12 bg-white shadow-md dark:shadow-none xl:hidden"
          onClick={() => setOpenActivity(!openActivity)}
        >
          <div className="grid w-14 grid-cols-1">
            <MdKeyboardArrowUp className="mb-[-10px] text-16 text-grey-40 group-hover:text-black" />
            <MdKeyboardArrowUp className="text-16 text-grey-40 group-hover:text-black" />
          </div>
          <div className="text-14 text-grey-40 group-hover:text-black">Activity panel</div>
        </button>
        <Wrapper open={openLinks}>
          <div className="z-20 flex xl:hidden">
            <TooltipBackground handler={setOpenLinks} />
          </div>
        </Wrapper>
        <Wrapper open={openActivity}>
          <div className="z-20 flex xl:hidden">
            <TooltipBackground handler={setOpenActivity} />
          </div>
        </Wrapper>
        <div
          className={`fixed top-0 left-0 z-40 w-[260px] min-w-[260px] transform transition duration-300 xs:w-[280px] 2xl:w-[340px] ${
            openLinks ? "translate-x-0" : "translate-x-[-100%] xl:translate-x-0"
          }`}
        >
          <CreatorSideLinks />
        </div>
        <TooltipShade handler={setOpenActivity} open={openActivity} />
        <div
          className={`fixed bottom-0 right-0 z-50 w-full min-w-[260px] transform transition duration-300 xl:w-[280px] 2xl:w-[340px] ${
            openActivity ? "translate-x-0 translate-y-0" : "translate-y-[100%] translate-x-0 xl:translate-y-0"
          }`}
        >
          <CreatorSideActivity />
        </div>
        <div className="relative mx-[0px] w-full rounded-4 py-12 px-12 xs:py-20 xs:px-20 xl:ml-[280px] xl:mr-[280px] xl:py-30 2xl:ml-[340px] 2xl:mr-[340px] 2xl:p-40 2xl:py-40">
          <div className="mb-50 grid w-full grid-cols-1 items-start gap-12 xs:gap-20 xl:mb-0 xl:gap-30">
            <div className="flex h-36 w-full items-center justify-between sm:h-auto">
              <button
                className="group flex items-center justify-start space-x-[12px] xl:space-x-[0px]"
                onClick={() => setOpenLinks(!openLinks)}
              >
                <RiMenu2Fill className="text-24 text-grey-40 group-hover:text-black xl:hidden" />
                <div className="w-full text-24 font-bold text-black">{title}</div>
              </button>
              <div className="flex xl:hidden">
                <NavSides />
              </div>
            </div>
            {children}
          </div>
        </div>
      </WrapperSwipe>
    </>
  )
}

export default WrapperCreator
