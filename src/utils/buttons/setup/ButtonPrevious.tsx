import React from "react"
import { AiFillCaretLeft } from "react-icons/ai"
import ButtonRect from "utils/buttons/rect/ButtonRect"

const ButtonPrevious = ({ handler, allowed }: { handler: any; allowed: boolean }) => {
  return (
    <button
      className={`w-full opacity-20 ${allowed ? "hover:opacity-40" : "cursor-not-allowed"}`}
      onClick={() => (allowed ? handler() : null)}
    >
      <ButtonRect icon={<AiFillCaretLeft className="text-black" />} light={true} title={"Previous"} />
    </button>
  )
}

export default ButtonPrevious
