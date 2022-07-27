import { callPut, callPost, callDelete } from "api/integration/calls"
import { REQ } from "libs/constants"

export const onSend = async (token: string, data: any) => {
  return await callPost(REQ.FRIEND_REQUEST.REQUEST_SEND, data, token)
}

export const onCancel = async (requestId: any, token: string) => {
  return await callPut(REQ.FRIEND_REQUEST.CANCEL_REQUEST.replace(":requestId", requestId), {}, token)
}

export const onDeclineRequest = async (requestId: any, token: string) => {
  return await callPut(REQ.FRIEND_REQUEST.DECLINE_REQUEST.replace(":requestId", requestId), {}, token)
}

export const onAcceptRequest = async (requestId: any, token: string) => {
  return await callPut(REQ.FRIEND_REQUEST.ACCEPT_REQUEST.replace(":requestId", requestId), {}, token)
}

export const onRemoveFriend = async (userDetailId: any, friendId: any, token: string) => {
  return await callDelete(
    REQ.FRIEND_REQUEST.REMOVE_FRIEND.replace(":userDetailId", userDetailId).replace(":friendId", friendId),
    {},
    token
  )
}

export const onBlockUser = async (userId: string, data: any, token: string) => {
  return await callPut(REQ.FRIEND_REQUEST.BLOCK_USER.replace(":userDetailId", userId), data, token)
}

export const unBlockUser = async (userId: string, data: any, token: string) => {
  return await callPut(REQ.FRIEND_REQUEST.UNBLOCK_USER.replace(":userDetailId", userId), data, token)
}
