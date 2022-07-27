import { ThemeType } from "libs/enums"
import { UserInterface } from "libs/interfaces"

const defaultTheme = () => {
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? ThemeType.Dark : ThemeType.Light
}

export const themeUser = (authenticated: boolean, user: UserInterface) => {
  if (!authenticated || !user.isProfileComplete || (user.isProfileComplete && user.syncThemeOS)) {
    return defaultTheme()
  } else {
    return user.themeLight === true ? ThemeType.Light : ThemeType.Dark
  }
}
