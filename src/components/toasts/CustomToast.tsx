import React from "react"

const CustomToast = ({ appearance, children }: { appearance: string; children: any }) => {
  return (
    <>
      <div className={`p-20 text-14 text-white ${appearance === "error" ? "bg-red" : "bg-green"}`}>{children}</div>
    </>
  )
}

export default CustomToast
