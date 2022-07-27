import MenuFan from "components/menus/MenuFan"
import WrapperSwipe from "components/wrappers/WrapperSwipe"
import React from "react"

const WrapperFriends = ({ children }: { children: any }) => {
  return (
    <>
      <WrapperSwipe>
        <div className="w-full">
          <div className="pag flex w-full justify-center">
            <div className="w-full max-w-screen-xl">{children}</div>
          </div>
        </div>
        <MenuFan />
      </WrapperSwipe>
    </>
  )
}

export default WrapperFriends
