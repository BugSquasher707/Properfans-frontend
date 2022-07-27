export const EGX = process.env.REACT_APP_EGX ?? ""
export const EGX_WALLET = process.env.REACT_APP_SERVER_EGX ?? ""
export const SERVER_EGX = process.env.REACT_APP_SERVER_EGX ?? ""

/* --- Requests --- */
export const URL_EGX = {
  CONNECT: EGX + "/auth/connect/properfans",
  DASHBOARD: {
    BASE: EGX + "/dashboard",
    SETTINGS: {
      SECURITY: {
        DATA: EGX + "/dashboard/settings/security/data",
        HISTORY: EGX + "/dashboard/settings/security/history",
        PASSWORD: EGX + "/dashboard/settings/security/password",
        TWOFACTOR: EGX + "/dashboard/settings/security/twofactor"
      },
      THEME: EGX + "/dashboard/settings/theme"
    }
  },
  REGISTER: EGX + "/auth/register",
  WALLET: {
    GET: EGX_WALLET + "/wallet/getWallet",
    UPDATE: EGX_WALLET + "/wallet/updateWallet"
  }
}

/* --- Requests --- */
export const REQ_EGX = {
  STATUS: SERVER_EGX,
  AUTH: {
    REFRESH: SERVER_EGX + "/auth/refreshToken"
  }
}
