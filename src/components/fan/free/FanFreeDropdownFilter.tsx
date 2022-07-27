import { BooleanInterface, TitleIconInterface } from "libs/interfaces"
import React from "react"
import { FiCheck } from "react-icons/fi"
import { ImSortAmountDesc, ImSortAmountAsc } from "react-icons/im"
import PopupWrapper from "utils/elements/PopupWrapper"

const FanFreeDropdownFilter = ({
  open,
  handler,
  sort,
  handlerSort,
  payout,
  handlerPayout,
  devices,
  handlerDevices
}: {
  open: boolean
  handler: any
  sort: string
  handlerSort: any
  payout: number
  handlerPayout: any
  devices: BooleanInterface[]
  handlerDevices: any
}) => {
  const sorts = [
    { title: "Higest Payout", icon: <ImSortAmountDesc className="text-14" /> },
    { title: "Lowest Payout", icon: <ImSortAmountAsc className="text-14" /> }
  ]

  const toggleDevice = (key: number) => {
    const newDevices = [...devices]
    const newDevice = { ...newDevices[key] }

    newDevice.active = !newDevice.active
    newDevices[key] = newDevice

    handlerDevices(newDevices)
  }

  return (
    <>
      <PopupWrapper handler={handler} open={open}>
        <div className="absolute top-50 left-0 z-20 w-full rounded-4 border-1 border-grey-12 bg-white p-12 shadow-md dark:shadow-none">
          <div className="mb-10 w-full text-12 text-grey-40">Sort By</div>
          {sorts.map((cat: TitleIconInterface, key: number) => (
            <button
              key={key}
              className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-12 rounded-4 px-14 py-10 hover:bg-grey-6"
              onClick={() => (sort === cat.title ? handlerSort("") : handlerSort(cat.title))}
            >
              <div className="flex h-20 w-20 items-center justify-center first:text-20 first:text-grey-40">
                {cat.icon}
              </div>
              <div className="w-full text-left text-14 font-bold text-black">{cat.title}</div>
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-4 ${
                  sort === cat.title ? "bg-purple" : "border-1 border-grey-12 shadow-sm"
                }`}
              >
                <FiCheck className={`text-14 text-white ${sort === cat.title ? "flex" : "hidden"}`} />
              </div>
            </button>
          ))}
          <div className="my-12 w-full border-b-1 border-grey-10"></div>
          <div className="mb-10 w-full text-12 text-grey-40">Devices</div>
          {devices.map((cat: BooleanInterface, key: number) => (
            <button
              key={key}
              className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-12 rounded-4 px-14 py-10 hover:bg-grey-6"
              onClick={() => toggleDevice(key)}
            >
              <div className="flex h-20 w-20 items-center justify-center first:text-20 first:text-grey-40">
                {cat.icon}
              </div>
              <div className="w-full text-left text-14 font-bold text-black">{cat.title}</div>
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-4 ${
                  cat.active ? "bg-purple" : "border-1 border-grey-12 shadow-sm"
                }`}
              >
                <FiCheck className={`text-14 text-white ${cat.active ? "flex" : "hidden"}`} />
              </div>
            </button>
          ))}
          <div className="my-12 w-full border-b-1 border-grey-10"></div>
          <div className="mb-10 w-full text-12 text-grey-40">Minimal Payout</div>
          <input
            className="input h-42 font-semibold focus:border-purple"
            placeholder={"Payout..."}
            value={payout ? payout : ""}
            onChange={(e) => handlerPayout(parseInt(e.target.value))}
          />
        </div>
      </PopupWrapper>
    </>
  )
}

export default FanFreeDropdownFilter
