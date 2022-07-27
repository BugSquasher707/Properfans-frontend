import { callGet ,callPut } from "api/integration/calls"
import { REQ } from "libs/constants"

export const likePost = async (token: string, data:any, postId: string) => {
    return await callPut(REQ.PROP.LIKE.replace(":postId", postId), data, token)
}

export const unLikePost = async (token: string, data:any, postId: string) => {
    return await callPut(REQ.PROP.UNLIKE.replace(":postId", postId), data, token)
}

export const checkPostLike = async (token: string, postId: string, userId: string) => {
    return await callGet(REQ.POST.CHECK_LIKE.replace(":postId", postId).replace(":userId", userId) , token)
}
