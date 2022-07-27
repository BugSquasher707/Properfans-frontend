import { callPost, callGet } from "api/integration/calls"
import { REQ_EGX } from "ellingsenx/libs/constants"
import { REQ } from "libs/constants"

export const authRefresh = async (token: string) => {
  return await callPost(REQ_EGX.AUTH.REFRESH, { token: token }, "")
}

export const authVerify = async (id: string) => {
  return await callGet(REQ.USER.VERIFY.replace(":userId", id))
}
