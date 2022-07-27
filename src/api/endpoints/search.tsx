import { callGet } from "api/integration/calls"
import { REQ } from "libs/constants"

export const showAllUserClub = async (token: string, id: string) => {
  return await callGet(REQ.CLUB.SHOW.MY_CLUBS.replace(":userId", id), token)
}
