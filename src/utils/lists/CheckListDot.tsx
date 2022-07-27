import React from "react"

const CheckListDot = ({ active }: { active: boolean }) => {
  return (
    <>
      <div
        className={`center h-20 w-20 rounded-full bg-white ${
          active ? "border-8 border-purple" : "border-1 border-grey-20"
        }`}
      ></div>
    </>
  )
}

export default CheckListDot
