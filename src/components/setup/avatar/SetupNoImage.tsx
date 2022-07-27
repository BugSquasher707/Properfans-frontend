import React from "react"
import { IoMdCloudUpload } from "react-icons/io"

const SetupNoImage = ({ drag }: { drag: boolean }) => {
  return (
    <>
      <div className={`cursor-pointer rounded-4 border-1 p-20 md:p-30 ${drag ? "border-white" : "border-white-40"}`}>
        <div className="center mb-12 w-full gap-10">
          <div className="h-22 w-22">
            <IoMdCloudUpload className="text-22 text-white" />
          </div>
          <div className="text-14 font-bold text-white">
            Drop your avatar here or <span className="underline">browse</span>
          </div>
        </div>
        <div className="w-full text-center text-14 text-white-40">
          max. file size 30MB, supports .jpg, .jpeg and .png
        </div>
      </div>
    </>
  )
}

export default SetupNoImage
