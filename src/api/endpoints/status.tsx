import { callGet, callPost } from "api/integration/calls"
import { REQ } from "libs/constants"

export const statusApi = async () => {
  return await callGet(REQ.STATUS)
}

export const applicationApplied = async (accountId: any) => {
  return await callGet(REQ.APPLICATION.APPLIED.replace(":accountId", accountId))
}

export const applicationApi = async (token: string, data: any) => {
  return await callPost(REQ.APPLICATION.APPLY, data, token)
}

export const totalUsers = async () => {
  return await callGet(REQ.APPLICATION.TOTAL_USERS)
}
