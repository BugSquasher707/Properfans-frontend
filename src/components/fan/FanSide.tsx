import FanSideMenu from "components/fan/FanSideMenu"
import FanSubscriptions from "components/fan/FanSideSubscriptions"
import { LinkInterface } from "libs/interfaces"
import React from "react"
import ButtonBack from "utils/buttons/back/ButtonBack"

const FanSide = ({ back }: { back?: LinkInterface }) => {
  return (
    <>
      <div className="w-full">
        {back ? (
          <div className="mb-30 hidden w-full xl:flex">
            <ButtonBack link={back.link} title={back.title} />
          </div>
        ) : (
          ""
        )}
        <FanSideMenu />
        <div className="my-14 flex w-full border-b-1 border-grey-6 xl:my-30"></div>
        <FanSubscriptions />
      </div>
    </>
  )
}

export default FanSide
