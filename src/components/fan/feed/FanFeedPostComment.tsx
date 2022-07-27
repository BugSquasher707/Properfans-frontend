import { deleteComment } from "api/endpoints/comment"
import ModalConfirmation from "components/modals/other/ModalConfirmation"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { FeedCommentInterface } from "libs/interfaces"
import React, { useState } from "react"
import { IoMdTrash } from "react-icons/io"
import { MdChat } from "react-icons/md"
import { Link } from "react-router-dom"
import Avatar from "utils/avatars/Avatar"

const FanFeedPostComment = ({
  comment,
  index,
  handler,
  handlerLoad,
  handlerPage
}: {
  comment: FeedCommentInterface
  index: number
  handler: any
  handlerLoad: any,
  handlerPage: any
}) => {
  const { token, user } = useProps()

  const [openConfirm, setOpenConfirm] = useState(false)

  const onRemove = async () => {
    if (comment.userId !== user.id) {
      return
    }

    const result = await deleteComment(comment.id, token)

    if (result.status) {
      handler(index)
      setOpenConfirm(false)
      handlerLoad()
      handlerPage()
    }
  }

  return (
    <>
      {comment && (
        <>
          <div className="grid w-full grid-cols-[auto,1fr] items-end gap-10">
            <Link
              className="h-32 w-32 overflow-hidden rounded-full"
              to={URL.USERS.BASE.replace(":param", comment.handle)}
            >
              {comment.avatar ? <img alt="" className="h-32 w-32" src={comment.avatar} /> : <Avatar />}
            </Link>
            <div className="flex w-full">
              <div className="grid grid-cols-1 gap-4 rounded-t-4 rounded-bl-4 bg-grey-3 py-8 px-14 text-12 font-semibold text-grey-40">
                <div className="flex items-center space-x-[6px]">
                  <Link className="w-full font-bold text-black" to={URL.USERS.BASE.replace(":param", comment.handle)}>
                    {comment.userName}
                  </Link>
                  <Wrapper open={comment.userId === user.id}>
                    <button
                      className="group flex h-18 w-18 items-center justify-center"
                      onClick={() => setOpenConfirm(true)}
                    >
                      <IoMdTrash className="text-16 text-grey-40 group-hover:text-black" />
                    </button>
                  </Wrapper>
                </div>
                <div className="font-semibold text-grey-40">{comment.comment}</div>
              </div>
            </div>
          </div>
          <Wrapper open={openConfirm}>
            <ModalConfirmation
              data={{
                title: "Remove comment",
                text: "Remove comment from post",
                icon: <MdChat className="text-48 text-purple" />
              }}
              action={onRemove}
              handler={setOpenConfirm}
              open={openConfirm}
            />
          </Wrapper>
        </>
      )}
    </>
  )
}

export default FanFeedPostComment
