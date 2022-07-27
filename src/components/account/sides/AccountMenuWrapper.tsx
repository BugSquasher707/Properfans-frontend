import AccountMenuLinks from "components/account/sides/AccountMenuLinks"
import React, { useState } from "react"
import { RiMenu2Fill } from "react-icons/ri"
import Wrapper from "utils/elements/Wrapper"
import TooltipBackground from "utils/modals/TooltipBackground"

const AccountMenuWrapper = () => {
  const [openLinks, setOpenLinks] = useState(false)

  return (
    <>
      <button className="group flex items-center justify-start space-x-[12px]" onClick={() => setOpenLinks(!openLinks)}>
        <RiMenu2Fill className="text-24 text-grey-40 group-hover:text-black xl:hidden" />
        <div className="w-full text-left text-24 font-bold text-black">Account</div>
      </button>
      <Wrapper open={openLinks}>
        <div className="z-20 flex xl:hidden">
          <TooltipBackground handler={setOpenLinks} />
        </div>
      </Wrapper>
      <div
        className={`fixed top-0 left-0 z-40 w-[260px] min-w-[260px] transform transition duration-300 xs:w-[280px] 2xl:w-[340px] ${
          openLinks ? "translate-x-0" : "translate-x-[-100%] xl:translate-x-0"
        }`}
      >
        <AccountMenuLinks />
      </div>
    </>
  )
}

export default AccountMenuWrapper
