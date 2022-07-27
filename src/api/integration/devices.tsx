export const getOperatingSystem = (window: any) => {
  let os = "Unknown"
  const app = window.navigator.appVersion
  const ua = window.navigator.userAgent

  if (app.indexOf("Win") !== -1) {
    os = "Windows"
  } else if (app.indexOf("Mac") !== -1) {
    os = "MacOS"
  } else if (app.indexOf("X11") !== -1) {
    os = "UNIX"
  } else if (app.indexOf("Linux") !== -1) {
    os = "Linux"
  } else if (app.indexOf("Android") !== -1) {
    os = "Android"
  } else if (ua.match(/iPad/i) || ua.match(/iPhone/i)) {
    os = "iOS"
  }

  return os
}

export const getBrowser = (window: any) => {
  let browser = "Unknown"
  const ua = window.navigator.userAgent

  if (ua.indexOf("Chrome") !== -1) {
    browser = "Google Chrome"
  } else if (ua.indexOf("Firefox") !== -1) {
    browser = "Mozilla Firefox"
  } else if (ua.indexOf("MSIE") !== -1) {
    browser = "Internet Exployer"
  } else if (ua.indexOf("Edge") !== -1) {
    browser = "Edge"
  } else if (ua.indexOf("Safari") !== -1) {
    browser = "Safari"
  } else if (ua.indexOf("Opera") !== -1) {
    browser = "Opera"
  }

  return browser
}
