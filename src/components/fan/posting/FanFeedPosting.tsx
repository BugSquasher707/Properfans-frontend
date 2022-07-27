import { createPost } from "api/endpoints/fanPost"
import { insertCharacter } from "api/integration/editor"
import { toastError, toastSuccess } from "api/integration/toaster"
import FanPostImages from "components/fan/feed/FanPostImages"
import FanFeedPostingAdd from "components/fan/posting/FanFeedPostingAdd"
import FanFeedPostingArea from "components/fan/posting/FanFeedPostingArea"
import FanFeedPostingAttach from "components/fan/posting/FanFeedPostingAttach"
import FanFeedPostingRecord from "components/fan/posting/FanFeedPostingRecord"
import FanFeedPostingTag from "components/fan/posting/FanFeedPostingTag"
import FanFeedPostingTop from "components/fan/posting/FanFeedPostingTop"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { EditorState, convertToRaw } from "draft-js"
import { URL as URL2 } from "libs/constants"
import { SubscriptionTierType, UploadContentType } from "libs/enums"
import React, { useEffect, useState } from "react"
import { MdFileUpload } from "react-icons/md"
import { VscLoading, VscSmiley } from "react-icons/vsc"
import { useHistory } from "react-router"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import EmojiPickerMart from "utils/chat/popups/EmojiPickerMart"
import DropzoneFiles from "utils/dropzone/DropzoneFiles"
import ModalBack from "utils/modals/ModalBack"
import ModalClose from "utils/modals/ModalClose"
import AudioPlayer from "utils/video/AudioPlayer"
import VideoPlayer from "utils/video/VideoPlayer"

const FanFeedPosting = ({ modal, handler }: { modal?: boolean; handler?: any }) => {
  const { brand, brandActive, token, user } = useProps()

  const history = useHistory()

  const [count, setCount] = useState(0)
  const [max] = useState(280)

  const [editorState, setEditorState] = useState(() => EditorState.createEmpty())
  const [message, setMessage] = useState("")

  const [open, setOpen] = useState(modal ?? false)
  const [tagsEnabled] = useState(false)
  const [openEmoji, setOpenEmoji] = useState(false)
  const [tags, setTags] = useState([])
  const [tier, setTier] = useState(SubscriptionTierType.Tier0)

  const [images, setImages] = useState<string[]>([])
  const [files, setFiles] = useState<File[]>([])

  const [drop, setDrop] = useState(false)
  const [record, setRecord] = useState(false)

  const [content, setContent] = useState(UploadContentType.None)

  const [posted, setPosted] = useState(false)
  const [posting, setPosting] = useState(false)
  const [postId, setPostId] = useState("")

  useEffect(() => {
    const blocks = convertToRaw(editorState.getCurrentContent()).blocks
    const newMessage = convertToRaw(editorState.getCurrentContent())
    const value = blocks.map((block) => (!block.text.trim() && "\n") || block.text).join("\n")

    setMessage(JSON.stringify(newMessage))

    setCount(value.trim().length)
  }, [editorState])

  useEffect(() => {
    if (!(files && files.length > 0)) {
      setImages([])
      return
    }

    if (content === UploadContentType.Pictures && images.length !== files.length) {
      setImages(files.map((file: File) => URL.createObjectURL(file)))
    } else {
      setImages([])
    }
  }, [content, files])

  useEffect(() => {
    if (drop) {
      setRecord(false)
    }
  }, [drop])

  useEffect(() => {
    if (record) {
      setFiles([])
      setDrop(false)
    }
  }, [record])

  const onSubmit = async () => {
    if (posting) {
      return
    }

    if (!(tier >= 0 && brandActive && brandActive.id)) {
      toastError("Select a brand")
      return
    }

    if (!(files.length > 0 || count > 0)) {
      toastError("Enter a message to post")
      return
    }

    setPosting(true)

    const data = new FormData()

    files.forEach((file: File) => {
      data.append("media", file)
    })

    data.append("message", message)
    data.append("tier", `${tier}`)
    data.append("brand", brandActive.id)
    data.append("user", user.id)

    if (content === UploadContentType.Pictures) {
      data.append("type", "image")
    }
    if (content === UploadContentType.Video) {
      data.append("type", "video")
    }
    if (content === UploadContentType.Audio) {
      data.append("type", "audio")
    }

    const result = await createPost(token, data)

    if (result.data) {
      onReset()

      setPostId(result.data.id)
      setPosted(true)
      toastSuccess("Post uploaded successfully")
    }

    setPosting(false)
  }

  const onReset = () => {
    setEditorState(() => EditorState.createEmpty())
    setTier(SubscriptionTierType.Tier0)
    setFiles([])
    setMessage("")

    setOpen(false)
    setDrop(false)
    setRecord(false)
    setOpenEmoji(false)
    setTags([])
  }

  const onAdd = (file: File) => {
    setFiles((old) => [...old, file])
    setRecord(false)
  }

  const onDelete = (index: number) => {
    setFiles(files.filter((file: File, key: number) => key !== index))
  }

  const onMove = (index: number, place: number) => {
    const newFiles = [...files]

    const b = newFiles[index]
    newFiles[index] = newFiles[index + place]
    newFiles[index + place] = b

    setFiles(newFiles)
  }

  const addEmoji = (emoji: string) => {
    setEditorState(insertCharacter(emoji, editorState))
  }

  const onNoBrand = () => {
    toastError("Create a club before posting content is possible")
  }

  const onBack = () => {
    setPosted(false)
    setPostId("")
  }

  return (
    <>
      {!posted ? (
        <div className={`w-full ${modal ? "" : "hidden lg:flex"}`}>
          {brandActive.id ? (
            <div
              className={`grid w-full grid-cols-1 rounded-4 border-1 ${
                open ? "border-grey-12 shadow-md dark:shadow-none" : "cursor-pointer border-white bg-grey-3 p-18"
              }`}
              onClick={() => (brand ? setOpen(true) : onNoBrand())}
            >
              <div className={`grid w-full grid-cols-1 gap-16 ${open ? "p-12 xs:p-16" : ""}`}>
                <Wrapper open={open}>
                  {brandActive ? <FanFeedPostingTop brand={brandActive} handler={setTier} tier={tier} /> : ""}
                </Wrapper>
                <FanFeedPostingArea editorState={editorState} open={open} setEditorState={setEditorState} />
                {files && files.length > 0 ? (
                  <>
                    {
                      {
                        [UploadContentType.None]: "",
                        [UploadContentType.Audio]: <AudioPlayer audio={URL.createObjectURL(files[0])} />,
                        [UploadContentType.Pictures]: (
                          <FanPostImages handlerDelete={onDelete} handlerMove={onMove} images={images} upload />
                        ),
                        [UploadContentType.Video]: (
                          <>
                            <VideoPlayer pre={false} video={URL.createObjectURL(files[0])} />
                          </>
                        )
                      }[content]
                    }
                  </>
                ) : (
                  ""
                )}
                <Wrapper open={open && drop}>
                  <DropzoneFiles
                    content={content}
                    files={files}
                    handler={setFiles}
                    handlerContent={setContent}
                    multiple
                  />
                </Wrapper>
                <Wrapper open={open && record}>
                  <FanFeedPostingRecord
                    handler={setRecord}
                    handlerAdd={onAdd}
                    video={content === UploadContentType.Video}
                  />
                </Wrapper>
                <Wrapper open={files && files.length > 0}>
                  <button
                    className="hover:text-grey-black w-full text-center text-12 font-bold text-grey-40"
                    onClick={() => setFiles([])}
                  >
                    Clear all attachments
                  </button>
                </Wrapper>
                <Wrapper open={open && tagsEnabled}>
                  <FanFeedPostingTag handler={setTags} tags={tags} />
                </Wrapper>
              </div>
              <Wrapper open={open}>
                <div className="mb-[-1px] flex items-center justify-between space-x-[8px] rounded-b-4 bg-grey-3 p-12 xs:space-x-[12px] xs:p-18">
                  <FanFeedPostingAttach handlerContent={setContent} handlerDrop={setDrop} handlerRecord={setRecord} />
                  <div className="flex items-center space-x-[12px]">
                    <div className={`text-12 font-bold ${count > max ? "text-red" : "text-grey-40"}`}>
                      {count} / {max}
                    </div>
                    <div className="relative">
                      <button
                        className="center group h-36 w-36 flex-none rounded-4 bg-grey-3 hover:bg-grey-6"
                        name={"Emoji"}
                        onClick={() => setOpenEmoji(!openEmoji)}
                      >
                        <VscSmiley className="text-grey-20 group-hover:text-black" />
                      </button>
                      <EmojiPickerMart add={addEmoji} handler={setOpenEmoji} open={openEmoji} />
                    </div>
                    <ButtonPurple
                      icon={
                        posting ? (
                          <VscLoading className="animate-spin text-white-40" />
                        ) : (
                          <MdFileUpload className="text-16 text-white-40" />
                        )
                      }
                      action={onSubmit}
                      title={"Post"}
                      small
                      square
                    />
                  </div>
                </div>
              </Wrapper>
            </div>
          ) : (
            <FanFeedPostingAdd />
          )}
        </div>
      ) : (
        <>
          {modal ? (
            <div className="grid w-full grid-cols-1 gap-20 p-20">
              <div className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-12">
                <ModalBack handler={onBack} />
                <div className="w-full text-center text-16 font-bold text-black">Posted</div>
                <ModalClose handler={handler} />
              </div>
              <div className="w-full text-14 text-grey-40">
                Your post has been uploaded successfully, click here to check it out!
              </div>
              <ButtonPurple
                action={() => {
                  if (handler) {
                    handler(false)
                  }

                  history.push(URL2.FAN.POST.replace(":id", postId))
                }}
                title={"Check post"}
                full
              />
            </div>
          ) : (
            <ButtonPurple
              action={() => {
                if (handler) {
                  handler(false)
                }

                history.push(URL2.FAN.POST.replace(":id", postId))
              }}
              title={"Check post"}
              full
            />
          )}
        </>
      )}
    </>
  )
}

export default FanFeedPosting
