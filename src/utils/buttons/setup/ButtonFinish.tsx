import React from "react"
import { FiCheck } from "react-icons/fi"
import ButtonRect from "utils/buttons/rect/ButtonRect"

const ButtonFinish = ({ handler, title }: { handler: any; title: string }) => {
  return (
    <button className="w-full" onClick={() => handler()}>
      <ButtonRect icon={<FiCheck className="text-white" />} light={false} title={title} />
    </button>
  )
}

export default ButtonFinish
