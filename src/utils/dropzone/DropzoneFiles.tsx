import { resizeImage } from "api/integration/compress"
import { onPlural } from "api/integration/functions"
import { toastError } from "api/integration/toaster"
import { FILES } from "libs/constants"
import { UploadContentType } from "libs/enums"
import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import { IoMdCloudDone } from "react-icons/io"
import DropzoneZone from "utils/dropzone/DropzoneZone"

const DropzoneFiles = ({
  content,
  files,
  multiple,
  handler,
  handlerContent
}: {
  content: UploadContentType
  files: File[]
  multiple: boolean
  handler: any
  handlerContent: any
}) => {
  const [compression] = useState(false)
  const [uploading, setUploading] = useState(false)

  const onDrop = async (uploads: File[]) => {
    setUploading(false)

    if (uploads && uploads.length > 0) {
      const type = uploads[0].type.split("/")[0]

      const newFiles = uploads.filter(
        (fil: File) =>
          (fil.type.split("/")[0] === "image" && fil.size <= 5000000) ||
          (fil.type.split("/")[0] === "video" && fil.size <= 50000000)
      )

      if (newFiles && newFiles.length !== uploads.length) {
        toastError("Maximum size is ~5MB for images and ~50MB for video")
      }

      if (newFiles && newFiles.length === 0) {
        return
      }

      const typed = newFiles
        .filter((fil: File) => type === fil.type.split("/")[0])
        .filter((fil: File, key: number) => key < onMax(type))

      let compressed

      if (type === "image") {
        if (compression) {
          compressed = await Promise.all(
            typed.map(async (upload: File) => {
              return resizeImage(upload)
            })
          )
        } else {
          compressed = typed
        }
      } else {
        compressed = typed
      }

      const newType = onContent(type)
      const newContent = content === newType ? [...files, ...compressed].slice(0, onMax(type)) : compressed

      handler(newContent)
      handlerContent(newType)
    }
  }

  const onMax = (type: string) => {
    switch (type) {
      case "image":
        return 8
      case "audio":
        return 1
      case "video":
        return 1
      default:
        return 0
    }
  }

  const onContent = (type: string) => {
    switch (type) {
      case "image":
        return UploadContentType.Pictures
      case "audio":
        return UploadContentType.Audio
      case "video":
        return UploadContentType.Video
      default:
        return UploadContentType.None
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: FILES.STRING,
    multiple: multiple
  })

  return (
    <>
      <div className="center w-full flex-wrap">
        <div className="relative w-full max-w-full" {...getRootProps()}>
          <input {...getInputProps()} />
          <div
            className={`w-full cursor-pointer rounded-4 border-1 p-14 ${
              isDragActive ? "border-purple bg-purple-10" : "border-dashed border-grey-12"
            }`}
          >
            {files && files.length > 0 ? (
              <div className="grid w-full grid-cols-1 gap-10">
                <div className="flex w-full items-center justify-center space-x-[16px]">
                  <IoMdCloudDone className="text-24 text-grey-20" />
                  <div className="text-14 text-grey-40">
                    Uploaded {files.length} file{onPlural(files.length)}
                  </div>
                </div>
              </div>
            ) : (
              <DropzoneZone setUploading={setUploading} uploading={uploading} />
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default DropzoneFiles
