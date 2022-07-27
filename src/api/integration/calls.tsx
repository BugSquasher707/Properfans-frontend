import { parseError } from "api/integration/errors"
import axios from "axios"

export const callEndpoint = async (url: string, method: any, data: any, token?: string) => {
  const headers: any = {
    "Access-Control-Allow-Origin": "*",
    accept: "application/json",
    audience: window.location.origin,
    "Content-Type": "application/json"
  }

  if (token) {
    headers.Authorization = `Bearer ${token}`
  }

  const res = await axios({
    url: url,
    method: method,
    data: data,
    headers: headers
  })
    .then((res: any) => res.data)
    .catch((error: any) => parseError(error))

  return res
}

export const callDelete = async (url: string, data: any, token: string) => {
  return callEndpoint(url, "delete", data, token)
}

export const callGet = async (url: string, token?: string) => {
  return callEndpoint(url, "get", {}, token)
}

export const callPost = async (url: string, data: any, token: string) => {
  return callEndpoint(url, "post", data, token)
}

export const callPut = async (url: string, data: any, token: string) => {
  return callEndpoint(url, "put", data, token)
}
