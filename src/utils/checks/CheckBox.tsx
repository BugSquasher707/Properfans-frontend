import React from "react"
import { FiCheck } from "react-icons/fi"

const CheckBox = ({ active }: { active: boolean }) => {
  return (
    <div
      className={`center h-20 w-20 rounded-4 ${active ? "bg-purple" : "border-1 border-grey-12 bg-white shadow-md"}`}
    >
      <FiCheck className="text-12 text-white" />
    </div>
  )
}

export default CheckBox
