import { resizeImage } from "api/integration/compress"
import { toastError } from "api/integration/toaster"
import { UploadType } from "libs/enums"
import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import { IoMdCloudDone } from "react-icons/io"
import "react-image-crop/dist/ReactCrop.css"
import DropzoneZone from "utils/dropzone/DropzoneZone"

const DropzoneFile = ({ file, setFileNew, type }: { file: string; setFileNew: any; type: UploadType }) => {
  const [loading, setLoading] = useState(false)

  const [compression] = useState(false)
  const [uploading, setUploading] = useState(false)

  const onDrop = async (files: File[]) => {
    setLoading(true)
    setUploading(false)

    if (files && files.length > 0 && files[0].size > 5000000) {
      setLoading(false)
      toastError("Uploaded file cannot be bigger than ~5MB")
      return
    }

    let compressed: any[] = []

    if (compression) {
      compressed = await Promise.all(files.map(async (upload: File) => resizeImage(upload).then((res) => res)))
    } else {
      compressed = files
    }

    if (compressed && compressed.length > 0) {
      const reader = new FileReader()
      reader.addEventListener("load", () => setFileNew(reader.result))
      reader.readAsDataURL(compressed[0])
    }

    setLoading(false)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpg, image/jpeg, image/png",
    multiple: false
  })

  const onTitle = () => {
    return type === UploadType.Avatar ? "Avatar" : "Banner"
  }

  return (
    <>
      {!loading ? (
        <div className="center w-full flex-wrap">
          <div className="relative w-full max-w-full" {...getRootProps()}>
            <input {...getInputProps()} />
            <div
              className={`w-full cursor-pointer rounded-4 border-1 p-14 ${
                isDragActive ? "border-purple bg-purple-10" : "border-dashed border-grey-12"
              }`}
            >
              {file ? (
                <div className="grid w-full grid-cols-1 gap-10">
                  <div className="center w-full">
                    <img alt="" className="h-40 rounded-4" src={file} />
                  </div>
                  <div className="flex w-full items-center justify-center space-x-[16px]">
                    <IoMdCloudDone className="text-24 text-grey-20" />
                    <div className="text-14 text-grey-40">Uploaded {onTitle()}</div>
                  </div>
                </div>
              ) : (
                <DropzoneZone setUploading={setUploading} uploading={uploading} />
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex h-[160px] w-full items-center justify-center">
          <div className="text-14 font-bold text-grey-40">Uploading...</div>
        </div>
      )}
    </>
  )
}

export default DropzoneFile
