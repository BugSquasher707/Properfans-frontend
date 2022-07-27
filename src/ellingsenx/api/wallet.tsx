import { callGet, callPost } from "api/integration/calls"
import { URL_EGX } from "ellingsenx/libs/constants"

export const getWallet = async (token: any, id: string) => {
  return await callGet(`${URL_EGX.WALLET.GET}/?userId=${id}`, token)
}

export const updateWallet = async (token: any, data: any) => {
  return await callPost(URL_EGX.WALLET.UPDATE, data, token)
}
