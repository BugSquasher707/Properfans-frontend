import { ReactComponent as Subs } from "assets/img/subs.svg"
import React from "react"
import { RiArrowDownSLine } from "react-icons/ri"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const ButtonSubscribeManage = ({ active }: { active: boolean }) => {
  return (
    <>
      {active ? (
        <div className="relative h-36 w-full cursor-pointer overflow-hidden rounded-4 pr-28 active:ring-3 active:ring-purple-20">
          <img
            alt=""
            className="absolute top-[50%] left-[50%] min-h-full min-w-full translate-x-[-50%] translate-y-[-50%] transform"
            src={"/gradients/gradient_button.png"}
          />
          <div className="relative flex h-36 w-full items-center justify-center gap-8 text-14 font-bold text-white">
            <Subs className="fill-current text-white" />
            Subscribed
          </div>
          <button className="group absolute top-4 right-4 flex h-28 w-28 items-center justify-center rounded-4 hover:bg-white-10">
            <RiArrowDownSLine className="text-22 text-white-40 group-hover:text-white" />
          </button>
        </div>
      ) : (
        <ButtonPurple
          action={() => null}
          icon={<Subs className="fill-current text-white" />}
          title={"Subscribe"}
          small
        />
      )}
    </>
  )
}

export default ButtonSubscribeManage
