import { statusApi } from "api/endpoints/status"
import { getCountryLabel } from "api/integration/country"
import { parseTimeAgo } from "api/integration/functions"
import { toastSuccess } from "api/integration/toaster"
import { useProps } from "contexts/PropsContext"
import { OsType } from "libs/enums"
import { DevicesInterface } from "libs/interfaces"
import React from "react"
import { MdDesktopWindows, MdPowerSettingsNew, MdSmartphone } from "react-icons/md"

const CreatorTabDevice = ({
  device,
  index,
  handlerRemove
}: {
  device: DevicesInterface
  index: number
  handlerRemove: any
}) => {
  const { token } = useProps()

  const onSignout = async (newToken: string) => {
    console.log(token, newToken)

    const result = await statusApi()

    if (result) {
      toastSuccess("Successfully signed out device")
      handlerRemove(index)
    }
  }

  return (
    <>
      <div className="grid w-full grid-cols-1 gap-10">
        <div className="w-full text-12 font-bold text-grey-40">{device.os}</div>
        <div className="grid w-full grid-cols-1 gap-14 rounded-4 border-1 border-grey-10 bg-grey-1 px-16 py-12">
          <div className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-16">
            <div className="flex h-22 w-22 items-center justify-center">
              {
                {
                  [OsType.Desktop]: <MdDesktopWindows className=" text-22 text-grey-20" />,
                  [OsType.Mobile]: <MdSmartphone className=" text-22 text-grey-20" />
                }[device.type]
              }
            </div>
            <div className="flex w-full items-center">
              <div className="grid w-full grid-cols-1 gap-2">
                <div className="w-full text-14 font-bold text-black">{getCountryLabel(device.country)}</div>
                <div className="w-full text-12 font-bold text-grey-40">used {parseTimeAgo(device.lastActive)} ago</div>
              </div>
            </div>
            <button
              className="group flex h-28 w-28 items-center justify-center rounded-4 hover:bg-purple"
              onClick={() => onSignout(device.id)}
            >
              <MdPowerSettingsNew className="text-18 text-grey-20 group-hover:text-white" />
            </button>
          </div>
          <div className="flex h-30 w-full items-center justify-between gap-12 rounded-4 bg-grey-3 px-10">
            <div className="text-12 text-grey-40">IP address</div>
            <div className="text-12 text-grey-40">{device.ip}</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatorTabDevice
