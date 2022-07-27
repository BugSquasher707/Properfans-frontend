import React from "react"

const LineSmall = ({ light }: { light?: boolean }) => {
  return <div className={`h-24 border-r ${light ? "border-white-10" : "border-grey-10"}`}></div>
}

export default LineSmall
