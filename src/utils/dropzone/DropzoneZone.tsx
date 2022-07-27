import React from "react"
import { IoMdCloudUpload } from "react-icons/io"
import { VscLoading } from "react-icons/vsc"
import "react-image-crop/dist/ReactCrop.css"

const DropzoneZone = ({ uploading, setUploading }: { uploading: boolean; setUploading: any }) => {
  return (
    <>
      <button className="flex w-full items-center justify-center space-x-[16px]" onClick={() => setUploading(true)}>
        {uploading ? (
          <VscLoading className="animate-spin text-24 text-grey-20" />
        ) : (
          <IoMdCloudUpload className="text-24 text-grey-20" />
        )}
        <div className="text-14 text-grey-40">
          Drag & Drop files or <span className="underline">browse</span>
        </div>
      </button>
    </>
  )
}

export default DropzoneZone
