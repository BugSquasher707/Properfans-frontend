import { callGet, callPost, callDelete } from "api/integration/calls"
import { REQ } from "libs/constants"

export const checkClubFollower = async (token: string, clubId: any, userId: any) => {
  return await callGet(REQ.CLUB.FOLLOW.IS_FOLLOWER.replace(":clubId", clubId).replace(":userId", userId), token)
}

export const followClub = async (token: string, clubId: any, data: any) => {
    return await callPost(REQ.CLUB.FOLLOW.FOLLOW_CLUB.replace(":clubId", clubId), data, token)
}

export const unFollowClub = async (token: string, clubId: any, data: any) => {
    return await callDelete(REQ.CLUB.FOLLOW.UNFOLLOW_CLUB.replace(":clubId", clubId), data, token)
}
