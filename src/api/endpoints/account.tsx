import { callGet, callPost, callPut } from "api/integration/calls"
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

export const usernameAvailable = async (token: string, username: string) => {
  return await callGet(REQ.USER.USERNAME.AVAILABLE.replace(":username", username), token)
}

export const tagAvailable = async (token: string, tag: string) => {
  return await callGet(REQ.USER.TAG.AVAILABLE.replace(":handle", tag), token)
}

export const userPersonalAccountInfo = async (token: string, data: any, userId: string) => {
  return await callPut(REQ.ACCOUNT.PERSONAL_INFORMATION.replace(":userDetailId", userId), data, token)
}

export const userPersonalPage = async (userId: any, data: any, token: string) => {
  return await callPut(REQ.ACCOUNT.PERSONAL_INFORMATION.replace(":userDetailId", userId), data, token)
}
