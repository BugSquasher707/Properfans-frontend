import { toastError } from "api/integration/toaster"
import { REGEX } from "libs/constants"

export const checkUsername = (username: string, log: boolean) => {
  if (username.length < 4 || username.length > 50) {
    if (log) {
      toastError("Enter a username between 4 and 50 characters")
    }
    return false
  }

  if (!username.match(REGEX.NAME)) {
    if (log) {
      toastError("Enter a name only with letters, numbers and special characters (!@#$%^&*()?]*$)")
    }
    return false
  }

  return true
}

export const checkTag = (tag: string, log: boolean) => {
  if (tag.length < 3 || tag.length > 15) {
    if (log) {
      toastError("Enter a tag between 3 and 15 characters")
    }
    return false
  }

  if (!tag.match(REGEX.TAG)) {
    if (log) {
      toastError(
        "Enter a tag only with lowercase letters or an under score (_), no uppercase or special characters or numbers"
      )
    }
    return false
  }

  return true
}
