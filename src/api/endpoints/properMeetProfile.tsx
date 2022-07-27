import { callGet, callPost } from "api/integration/calls"
import { REQ } from "libs/constants"

export const getAllProperMeetProfiles = async (token: string) => {
    return await callGet(REQ.PROPER_MEET_PROFILE.GET_ALL, token)
}

export const getSingleProperMeetProfile = async (token: string, handle: string) => {
  return await callGet(REQ.PROPER_MEET_PROFILE.GET_BY_HANDLE.replace(":handle", handle), token)
}

export const createProperMeetProfile = async (token: string, data: any) => {
  return await callPost(REQ.PROPER_MEET_PROFILE.CREATE, data, token)
}
