import FilesUploadButtons from "components/modals/files/elements/FilesUploadButtons"
import FilesUploadTop from "components/modals/files/elements/FilesUploadTop"
import { UploadType } from "libs/enums"
import React, { useCallback, useEffect, useRef, useState } from "react"
import ReactCrop, { Crop } from "react-image-crop"
import DropzoneFile from "utils/dropzone/DropzoneFile"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalUpload = ({
  type,
  file,
  open,
  setFileNew,
  handler
}: {
  type: UploadType
  file: string
  open: boolean
  setFileNew: any
  handler: any
}) => {
  const imgRef = useRef<any>(null)
  const previewCanvasRef = useRef<HTMLCanvasElement>(null)

  const onAspect = () => {
    let newAspect = 0

    switch (type) {
      case UploadType.Avatar:
        newAspect = 1
        break
      case UploadType.Banner:
        newAspect = 22 / 9
        break
      case UploadType.Story:
        newAspect = 9 / 16
        break
    }

    return newAspect
  }

  const onAspectText = () => {
    let newAspectText = ""

    switch (type) {
      case UploadType.Avatar:
        newAspectText = "1:1"
        break
      case UploadType.Banner:
        newAspectText = "22:9"
        break
      case UploadType.Story:
        newAspectText = "9:16"
        break
    }

    return newAspectText
  }

  const [crop, setCrop] = useState<Partial<Crop>>({
    unit: "%",
    width: 30,
    aspect: onAspect()
  })
  const [completedCrop, setCompletedCrop] = useState<any>(null)

  const [upImg, setUpImg] = useState("")
  const [preview, setPreview] = useState(false)

  useEffect(() => {
    setPreview(false)
    setUpImg("")
  }, [open])

  useEffect(() => {
    if (!(completedCrop && previewCanvasRef.current && imgRef.current && preview)) {
      return
    }

    const image = imgRef.current

    const canvas = previewCanvasRef.current
    const newCrop = completedCrop

    const scaleX = image.naturalWidth / image.width
    const scaleY = image.naturalHeight / image.height
    const ctx = canvas.getContext("2d")
    const pixelRatio = window.devicePixelRatio

    if (ctx) {
      canvas.width = newCrop.width * pixelRatio * scaleX
      canvas.height = newCrop.height * pixelRatio * scaleY

      ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      ctx.imageSmoothingQuality = "high"

      ctx.drawImage(
        image,
        newCrop.x * scaleX,
        newCrop.y * scaleY,
        newCrop.width * scaleX,
        newCrop.height * scaleY,
        0,
        0,
        newCrop.width * scaleX,
        newCrop.height * scaleY
      )
    }
  }, [preview, completedCrop])

  const onLoad = useCallback((img) => {
    imgRef.current = img
  }, [])

  const onRemove = () => {
    setUpImg("")
  }

  const onBack = () => {
    setPreview(false)
  }

  const onSubmit = async () => {
    onGenerateDownload(previewCanvasRef.current, completedCrop)
  }

  const onGenerateDownload = (newCanvas: any, newCrop: any) => {
    if (!newCrop || !newCanvas) {
      return
    }

    newCanvas.toBlob(
      (blob: any) => {
        const previewUrl = window.URL.createObjectURL(blob)

        setFileNew(previewUrl)
        handler(false)
      },
      "image/jpeg",
      1
    )
  }

  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <div className="relative z-20 grid w-full max-w-full grid-cols-1 rounded-4 bg-white px-20 pb-20 pt-24 shadow-sm dark:shadow-none lg:w-450">
          <FilesUploadTop
            handler={handler}
            handlerBack={onBack}
            handlerRemove={onRemove}
            preview={preview}
            type={type}
            upImg={upImg}
          />
          <div className="mb-30 flex w-full justify-center sm:mb-40">
            {!upImg ? (
              <>
                <div className="grid w-full grid-cols-1 gap-20">
                  <DropzoneFile file={file} setFileNew={setUpImg} type={type} />
                  <div className="w-full text-14 text-grey-40">Recommend aspect ratio: {onAspectText()}</div>
                </div>
              </>
            ) : (
              <>
                <div className="relative flex w-full max-w-[450px] justify-center overflow-hidden rounded-4">
                  <div
                    className={`absolute top-0 left-0 bottom-0 flex w-full items-center justify-center bg-white ${
                      preview ? "z-10" : ""
                    }`}
                  >
                    <canvas
                      ref={previewCanvasRef}
                      className={`${type === UploadType.Story ? "border-1 border-grey-12" : ""} ${
                        type === UploadType.Avatar ? "rounded-full" : "rounded-4"
                      }`}
                      style={{
                        width: Math.ceil(completedCrop?.width ?? 0),
                        height: Math.ceil(completedCrop?.height ?? 0)
                      }}
                    />
                  </div>
                  <div className={`${preview ? "" : "relative"}`}></div>
                  <ReactCrop
                    className="max-w-full rounded-4"
                    crop={crop}
                    src={upImg}
                    onChange={(c: any) => setCrop(c)}
                    onComplete={(c: any) => setCompletedCrop(c)}
                    onImageLoaded={onLoad}
                  />
                </div>
              </>
            )}
          </div>
          <FilesUploadButtons
            handler={handler}
            handlerPreview={setPreview}
            handlerSubmit={onSubmit}
            preview={preview}
            upImg={upImg}
          />
        </div>
      </ModalWrapper>
    </>
  )
}

export default ModalUpload
