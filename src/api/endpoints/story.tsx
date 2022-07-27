import { callGet, callPost } from "api/integration/calls"
import { REQ } from "libs/constants"

export const storyApi = async (token: string, id: string) => {
  return await callGet(REQ.STORY.GET.replace(":storyId", id), token)
}
export const storyMyApi = async (token: string, handle: string) => {
  return await callGet(REQ.STORY.GET_MY.replace(":handleId", handle), token)
}
export const storyAllApi = async (token: string) => {
  return await callGet(REQ.STORY.GET_All, token)
}
export const addStory = async (token: string, data: any) => {
  return await callPost(REQ.STORY.CREATE, data, token)
}
