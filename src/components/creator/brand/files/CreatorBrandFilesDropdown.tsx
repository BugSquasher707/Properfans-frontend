import ModalUpload from "components/modals/files/ModalUpload"
import ModalConfirmation from "components/modals/other/ModalConfirmation"
import { UploadType } from "libs/enums"
import { DropdownInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { IoMdTrash } from "react-icons/io"
import { MdEdit, MdFileUpload } from "react-icons/md"
import PopupWrapper from "utils/elements/PopupWrapper"

const CreatorBrandFilesDropdown = ({ file, type, setFileNew }: { file: string; type: UploadType; setFileNew: any }) => {
  const [open, setOpen] = useState(false)
  const [openConfirm, setOpenConfirm] = useState(false)
  const [openUpload, setOpenUpload] = useState(false)

  const [links, setLinks] = useState<DropdownInterface[]>([])

  useEffect(() => {
    const newLinks = [
      {
        link: setOpenUpload,
        param: true,
        title: "Upload New",
        icon: <MdFileUpload className="text-grey-40" />
      }
    ]

    if (file) {
      newLinks.push({
        link: setOpenConfirm,
        param: true,
        title: "Remove",
        icon: <IoMdTrash className="text-grey-40" />
      })
    }

    setLinks(newLinks)
  }, [file])

  const onRemove = () => {
    setOpenConfirm(false)
    setFileNew([])
  }

  const onNewFile = (newFile: File) => {
    setFileNew(newFile)
  }

  return (
    <>
      <div className="relative">
        <button
          className="relative flex h-26 w-26 items-center justify-center rounded-full bg-purple"
          onClick={() => setOpen(true)}
        >
          <MdEdit className="text-14 text-white" />
        </button>
        <PopupWrapper handler={setOpen} open={open}>
          <div
            className="absolute top-0 right-0 z-20 mt-10 w-[160px] cursor-pointer rounded-4 border-1 border-grey-12 bg-white px-6 py-4 shadow-md dark:shadow-none"
            onClick={() => setOpen(false)}
          >
            {links
              .filter((link: DropdownInterface, key: number) => key < 3)
              .map((link: DropdownInterface, key: number) => (
                <button
                  key={key}
                  className="group my-2 flex h-36 w-full items-center justify-start space-x-[10px] rounded-4 px-14 hover:bg-grey-6"
                  name={link.title}
                  onClick={() => link.link(link.param)}
                >
                  <div className="h-16 opacity-40 group-hover:opacity-100">{link.icon}</div>
                  <div className="text-14 font-bold text-black">{link.title}</div>
                </button>
              ))}
          </div>
        </PopupWrapper>
      </div>
      <ModalConfirmation
        data={{
          title: `Remove ${UploadType[type]}`,
          text: `This will require you to upload a new ${UploadType[type]}`,
          icon: <IoMdTrash className="text-48 text-purple" />
        }}
        action={onRemove}
        handler={setOpenConfirm}
        open={openConfirm}
      />
      <ModalUpload file={file} handler={setOpenUpload} open={openUpload} setFileNew={onNewFile} type={type} />
    </>
  )
}

export default CreatorBrandFilesDropdown
