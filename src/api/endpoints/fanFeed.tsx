import { callGet } from "api/integration/calls"
import { REQ } from "libs/constants"

export const getFeed = async (token: string, id: string) => {
  return await callGet(`${REQ.FAN_FEED.GET_FEED.replace(":userId", id)}`, token)
}
