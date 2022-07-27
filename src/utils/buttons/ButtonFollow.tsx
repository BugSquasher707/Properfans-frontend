import React from "react"
import { FiCheck } from "react-icons/fi"
import ButtonRed from "utils/buttons/colors/ButtonRed"
import ButtonWhite from "utils/buttons/colors/ButtonWhite"

const ButtonFollow = ({ active }: { active: boolean }) => {
  return (
    <>
      {active ? (
        <div className="group w-full">
          <div className="group-hover:hidden">
            <ButtonWhite action={() => null} icon={<FiCheck className="text-purple" />} title={"Following"} small />
          </div>
          <div className="hidden group-hover:flex">
            <ButtonRed action={() => null} title={"Unfollow"} small />
          </div>
        </div>
      ) : (
        <ButtonWhite action={() => null} title={"Follow"} small />
      )}
    </>
  )
}

export default ButtonFollow
