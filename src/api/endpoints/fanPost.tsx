import { callDelete, callGet, callPost } from "api/integration/calls"
import { REQ } from "libs/constants"

export const getSinglePost = async (token: string, id: string) => {
  return await callGet(REQ.POST.GET_SINGLE.replace(":postId", id), token)
}

export const getAllClubPosts = async (token: string, id: string) => {
  return await callGet(REQ.POST.CLUB_POSTS.replace(":brandId", id), token)
}

export const createPost = async (token: string, data: any) => {
  return await callPost(REQ.POST.CREATE, data, token)
}

export const deletePost = async (token: string, postId: any) => {
  return await callDelete(REQ.POST.DELETE.replace(":postId", postId), {}, token)
}

export const reportPost = async (token: string, data: any) => {
  return await callPost(REQ.POST.REPORT, data, token)
}

export const getLatestPost = async (token: string, brandId: string) => {
  return await callGet(REQ.POST.LATEST_POST.replace(":brandId", brandId), token)
}
