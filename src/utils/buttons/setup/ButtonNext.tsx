import React from "react"
import { AiFillCaretRight } from "react-icons/ai"
import ButtonRect from "utils/buttons/rect/ButtonRect"

const ButtonNext = ({ title, handler }: { title: string; handler: any }) => {
  return (
    <button className="w-full" onClick={() => handler()}>
      <ButtonRect icon={<AiFillCaretRight className="text-black" />} light={true} title={title} />
    </button>
  )
}

export default ButtonNext
