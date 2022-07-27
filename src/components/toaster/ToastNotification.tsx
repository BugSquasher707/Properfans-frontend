import { capitalizeString } from "api/integration/functions"
import ToastWrapper from "components/toaster/ToastWrapper"
import { NotificationType } from "libs/enums"
import React from "react"
import { FiAlertTriangle, FiCheckCircle, FiInfo } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { useHistory } from "react-router"

const ToastNotification = ({
  message,
  title,
  url,
  type
}: {
  message: string
  title: string
  url?: string
  type: NotificationType
}) => {
  const history = useHistory()

  const onCssBg = () => {
    let newCss

    switch (type) {
      case NotificationType.Error:
        newCss = "bg-toast-error hover:bg-toast-error-2 active:bg-toast-error-3"
        break
      case NotificationType.Info:
        newCss = "bg-toast-info hover:bg-toast-info-2 active:bg-toast-info-3"
        break
      case NotificationType.Success:
        newCss = "bg-toast-success hover:bg-toast-success-2 active:bg-toast-success-3"
        break
      case NotificationType.Warning:
        newCss = "bg-toast-warning hover:bg-toast-warning-2 active:bg-toast-warning-3"
        break
      case NotificationType.System:
        newCss = "bg-gradient-to-r from-purple to-blue"
        break
    }

    return newCss
  }

  const onCssIcon = () => {
    let newCss

    switch (type) {
      case NotificationType.Error:
        newCss = "text-toast-error-3 group-hover:text-toast-error group-active:text-toast-error"
        break
      case NotificationType.Info:
        newCss = "text-toast-info-3 group-hover:text-toast-info group-active:text-toast-info"
        break
      case NotificationType.Success:
        newCss = "text-toast-success-3 group-hover:text-toast-success group-active:text-toast-success"
        break
      case NotificationType.System:
        newCss = "text-white"
        break
      case NotificationType.Warning:
        newCss = "text-toast-warning-3 group-hover:text-toast-warning group-active:text-toast-warning"
        break
    }

    return newCss
  }

  return (
    <>
      <ToastWrapper>
        <div
          className={`light-r group grid w-full grid-cols-[auto,1fr,auto] items-start gap-12 rounded-4 p-16 ${
            type === NotificationType.System ? "pb-16" : "pb-[21px]"
          } ${onCssBg()}`}
          onClick={() => (url ? history.push(url) : null)}
        >
          <div className="flex h-24 w-20 items-start justify-center">
            {
              {
                [NotificationType.Error]: <FiAlertTriangle className={`text-18 ${onCssIcon()}`} />,
                [NotificationType.Info]: <FiInfo className={`text-18 ${onCssIcon()}`} />,
                [NotificationType.Success]: <FiCheckCircle className={`text-18 ${onCssIcon()}`} />,
                [NotificationType.System]: <FiInfo className={`text-18 ${onCssIcon()}`} />,
                [NotificationType.Warning]: <FiAlertTriangle className={`text-18 ${onCssIcon()}`} />
              }[type]
            }
          </div>
          <div className="flex w-full items-center">
            <div className="grid w-full grid-cols-1 gap-2">
              <div
                className={`w-full text-14 font-bold capitalize ${
                  type === NotificationType.System
                    ? "text-white"
                    : "text-black group-hover:text-white group-active:text-white"
                }`}
              >
                {title}
              </div>
              <div
                className={`w-full break-words text-12 font-bold ${
                  type === NotificationType.System
                    ? "text-white-40"
                    : "text-grey-40 group-hover:text-white group-active:text-white"
                }`}
              >
                {typeof message === "string" ? capitalizeString(message) : "Internal error"}
              </div>
            </div>
          </div>
          <div className="flex h-24 w-20 items-start justify-center">
            <MdClose className={`text-18 ${onCssIcon()}`} />
          </div>
        </div>
      </ToastWrapper>
    </>
  )
}

export default ToastNotification
