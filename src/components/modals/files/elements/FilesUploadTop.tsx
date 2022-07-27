import { UploadType } from "libs/enums"
import React from "react"
import ModalBack from "utils/modals/ModalBack"
import ModalClose from "utils/modals/ModalClose"

const FilesUploadTop = ({
  type,
  upImg,
  preview,
  handlerBack,
  handlerRemove,
  handler
}: {
  type: UploadType
  upImg: string
  preview: boolean
  handlerBack: any
  handlerRemove: any
  handler: any
}) => {
  return (
    <>
      {!upImg ? (
        <>
          <div className="mb-30 grid w-full grid-cols-[1fr,auto] items-center gap-12 pl-42">
            <div className="w-full text-center text-16 font-bold text-black">Upload {UploadType[type]}</div>
            <ModalClose handler={handler} />
          </div>
        </>
      ) : (
        <div className="flex w-full justify-center">
          {!preview ? (
            <>
              <div className="mb-30 grid w-full max-w-[450px] grid-cols-[auto,1fr] items-center gap-12 pr-42">
                <ModalBack handler={handlerRemove} />
                <div className="w-full text-center text-16 font-bold text-black">Adjust {UploadType[type]}</div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-30 grid w-full max-w-[450px] grid-cols-[auto,1fr] items-center gap-12 pr-42">
                <ModalBack handler={handlerBack} />
                <div className="w-full text-center text-16 font-bold text-black">Preview {UploadType[type]}</div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default FilesUploadTop
