import React from "react"

const LoadingData = ({ title, light }: { title: string; light?: boolean }) => {
  return (
    <>
      <div className={`flex w-full justify-center rounded-4 p-20 ${light ? "bg-white-10" : "bg-purple-10"}`}>
        <div className={`text-14 font-bold ${light ? "text-white" : "text-black "}`}>{title}</div>
      </div>
    </>
  )
}

export default LoadingData
