import ModalUsers from "components/modals/fan/ModalUsers"
import { REQ } from "libs/constants"
import { ModalUsersType } from "libs/enums"
import { FeedInterface } from "libs/interfaces"
import React from "react"
import ModalWrapper from "utils/modals/ModalWrapper"

const ModalLikes = ({ post, open, handler }: { post: FeedInterface; open: boolean; handler: any }) => {
  return (
    <>
      <ModalWrapper handler={handler} open={open}>
        <ModalUsers
          handler={handler}
          id={post.id}
          open={open}
          title={"Likes"}
          type={ModalUsersType.Likes}
          url={REQ.STATUS}
          urlSearch={""}
        />
      </ModalWrapper>
    </>
  )
}

export default ModalLikes
