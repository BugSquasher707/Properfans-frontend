import React from "react"
import { FiCheck } from "react-icons/fi"
import ButtonRect from "utils/buttons/rect/ButtonRect"

const ButtonStart = ({ title, handler }: { title: string; handler: any }) => {
  return (
    <button className="w-full" onClick={() => handler()}>
      <ButtonRect icon={<FiCheck className="text-black" />} light={false} title={title} />
    </button>
  )
}

export default ButtonStart
