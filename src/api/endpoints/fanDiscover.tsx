import { callGet, callPost } from "api/integration/calls"
import { REQ } from "libs/constants"

export const getContentCategories = async (token: string) => {
  return await callGet(REQ.DISCOVER.GET_DISCOVER, token)
}

export const getCreatorsCategories = async (token: string, data:any) => {
    return await callPost(REQ.DISCOVER.GET_CREATORS, data, token)
}

export const getClubsCategories = async (token: string, data:any) => {
    return await callPost(REQ.DISCOVER.GET_CLUBS, data, token)
}
