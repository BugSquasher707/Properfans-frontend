import { callGet, callPost, callDelete } from "api/integration/calls"
import { REQ } from "libs/constants"

export const addComment = async (token: string, data: any) => {
  return await callPost(REQ.COMMENT.CREATE, data, token)
}

export const getComment = async (token: string, commentId: string) => {
    return await callGet(REQ.COMMENT.SHOW.replace(":commentId", commentId), token)
}

export const deleteComment = async (commentId: any, token: string) => {
    return await callDelete(
      REQ.COMMENT.DELETE.replace(":commentId", commentId),{},token)
  }

