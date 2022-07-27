import { callGet, callPost } from "api/integration/calls"
import { REQ } from "libs/constants"

export const avatarUpload = async (token: string, avatar: File, id: any) => {
  const data = new FormData()

  data.append("avatar", avatar, avatar.name)

  return await callPost(REQ.USER.AVATAR.UPLOAD.replace(":userDetailId", id), data, token)
}

export const bannerUpload = async (token: string, banner: File, id: any) => {
  const data = new FormData()

  data.append("banner", banner, banner.name)

  return await callPost(REQ.USER.BANNER.UPLOAD.replace(":userDetailId", id), data, token)
}

export const checkRole = async (token: string, accountId: string) => {
  return await callGet(REQ.USER.ROLE.replace(":userDetailId", accountId), token)
}

export const getUser = async (token: string, handle: string) => {
  return await callGet(REQ.USER.GET.HANDLE.replace(":handle", handle), token)
}

export const setupFinish = async (token: string, data: any) => {
  return await callPost(REQ.USER.GET.DETAILS, data, token)
}

export const tagAvailable = async (token: string, tag: string) => {
  return await callGet(REQ.USER.TAG.AVAILABLE.replace(":handle", tag), token)
}

export const usernameAvailable = async (token: string, username: string) => {
  return await callGet(REQ.USER.USERNAME.AVAILABLE.replace(":username", username), token)
}
