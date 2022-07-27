import { callGet, callPost } from "api/integration/calls"
import { REQ } from "libs/constants"

export const properWallet = async (token: string, userId: any, data: any) => {
  return await callPost(REQ.TIP.POST.replace(":userId", userId), data, token)
}

export const tipCreator = async (token: string, data: any) => {
    return await callPost(REQ.TIP.CREATE_TIP, data, token)
}

export const getTip = async (token: string, postId: any) => {
    return await callGet(REQ.TIP.GET_TIP.replace(":postId", postId), token)
}
