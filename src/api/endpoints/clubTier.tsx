import { callGet, callPost, callPut } from "api/integration/calls"
import { REQ } from "libs/constants"

export const createClubTier = async (data: any, token: string, id: any) => {
  return await callPost(REQ.CLUB.TIER.CREATE.replace(":clubId", id), data, token)
}

export const getAllClubTiers = async (token: string, id: any) => {
  return await callGet(REQ.CLUB.TIER.GET.BY_BRAND.replace(":brandId", id), token)
}

export const getSingleClubTier = async (token: string, brandId: any, tier: any) => {
  return await callGet(REQ.CLUB.TIER.GET.BY_TIER.replace(":tier", tier).replace(":brandId", brandId), token)
}

export const updateClubTier = async (token: string, brandId: any, tier: any, data: any) => {
  return await callPut(REQ.CLUB.TIER.UPDATE.replace(":tier", tier).replace(":brandId", brandId), data, token)
}
