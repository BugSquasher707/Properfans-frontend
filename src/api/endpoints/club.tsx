import { callGet, callPost, callPut } from "api/integration/calls"
import { REQ } from "libs/constants"

export const avatarClubUpload = async (token: string, avatar: File, id: any) => {
  const data = new FormData()
  data.append("avatar", avatar, avatar.name)
  return await callPut(REQ.CLUB.AVATAR.UPLOAD.replace(":clubId", id), data, token)
}

export const bannerClubUpload = async (token: string, banner: File, id: any) => {
  const data = new FormData()
  data.append("banner", banner, banner.name)
  return await callPut(REQ.CLUB.BANNER.UPLOAD.replace(":clubId", id), data, token)
}

export const createClub = async (data: any, token: string) => {
  return await callPost(REQ.CLUB.CREATE, data, token)
}

export const verifyClubHandle = async (token: string, tag: string) => {
  return await callGet(REQ.CLUB.HANDLE.AVAILABLE.replace(":handle", tag), token)
}

export const showAllUserClub = async (token: any, id: string) => {
  return await callGet(REQ.CLUB.SHOW.MY_CLUBS.replace(":userId", id), token)
}

export const updateClub = async (data: any, token: string, id: any) => {
  return await callPut(REQ.CLUB.UPDATE.replace(":clubId", id), data, token)
}

export const getClubByHandle = async (token: string, handle: string) => {
  return await callGet(REQ.CLUB.HANDLE.CLUB_SEARCH.replace(":handle", handle), token)
}

export const getClubActivites = async (token: string, clubId: string) => {
  return await callGet(REQ.CLUB.ACTIVITY.replace(":clubId", clubId), token)
}

export const getUserClubActivites = async (token: string, clubId: string, userId: string) => {
  return await callGet(REQ.CLUB.ACTIVITY_BY_USER.replace(":clubId", clubId).replace(":userId", userId), token)
}
