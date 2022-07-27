import { toastError } from "api/integration/toaster"

export const parseError = (error: any) => {
  let message = "Please try again later!"

  if (!error.response) {
    toastError(message)
    return
  }

  if (
    error.response.status &&
    (error.response.status === 404 || (error.response.status >= 500 && error.response.status < 600))
  ) {
    return
  }

  if (error && error.response && error.response.data) {
    message = error.response.data.message
  } else if (error) {
    message = error
  }

  if (message) {
    toastError(message)
  }
}
