import { callGet } from "api/integration/calls"
import { REQ_EGX } from "ellingsenx/libs/constants"

export const statusApi = async () => {
  return await callGet(REQ_EGX.STATUS)
}
