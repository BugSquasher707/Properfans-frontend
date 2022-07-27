import MenuFan from "components/menus/MenuFan"
import NavFan from "components/nav/NavFan"
import React from "react"

const WrapperMeetProfile = ({ children, small }: { children: any; small?: boolean }) => {
  return (
    <>
      <div className="min-h-screen flex w-full flex-wrap">
        <div className="hidden lg:flex">
          <NavFan />
        </div>
        {small ? (
          <div className="w-full">
            <div className="pag flex w-full justify-center">
              <div className="w-full max-w-screen-xl">{children}</div>
            </div>
          </div>
        ) : (
          <div className="w-full">
            <div className="pag flex w-full justify-center">
              <div className="w-full max-w-screen-xl">{children}</div>
            </div>
          </div>
        )}
        <MenuFan />
      </div>
    </>
  )
}

export default WrapperMeetProfile
