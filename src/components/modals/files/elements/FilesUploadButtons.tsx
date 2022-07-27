import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const FilesUploadButtons = ({
  upImg,
  preview,
  handlerPreview,
  handlerSubmit,
  handler
}: {
  upImg: string
  preview: boolean
  handlerPreview: any
  handlerSubmit: any
  handler: any
}) => {
  return (
    <>
      {upImg ? (
        <>
          <div className="grid w-full grid-cols-2 gap-12">
            {!preview ? (
              <ButtonPurple action={() => handlerPreview(true)} title={"Preview"} full />
            ) : (
              <ButtonPurple action={handlerSubmit} title={"Upload"} full />
            )}
            <button
              className="w-full text-center text-14 font-bold text-grey-40 hover:text-black"
              onClick={() => handler(false)}
            >
              Close
            </button>
          </div>
        </>
      ) : (
        <>
          <button
            className="w-full text-center text-14 font-bold text-grey-40 hover:text-black"
            onClick={() => handler(false)}
          >
            Close
          </button>
        </>
      )}
    </>
  )
}

export default FilesUploadButtons
