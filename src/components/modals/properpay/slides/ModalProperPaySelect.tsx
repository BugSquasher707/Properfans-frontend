import { ProperPayMethodType } from "libs/enums"
import { ProperPayMethodInterface } from "libs/interfaces"
import React from "react"
import { IoMdRefresh } from "react-icons/io"

const ModalProperPaySelect = ({
  method,
  methods,
  handler
}: {
  method: ProperPayMethodType
  methods: ProperPayMethodInterface[]
  handler: any
}) => {
  return (
    <>
      <div className="w-full">
        <div className="mb-20 w-full text-14 text-grey-40">Summary</div>
        <div className="grid w-full grid-cols-1 gap-10">
          {methods.map((item: ProperPayMethodInterface, key: number) => (
            <div
              key={key}
              className={`w-full cursor-pointer rounded-4 border-1 p-20 ${
                item.type === method
                  ? "border-grey-12 bg-white shadow-md dark:shadow-none"
                  : "border-transparent bg-grey-3"
              }`}
              onClick={() => handler(item.type)}
            >
              <div className="mb-12 flex w-full items-center justify-between gap-12">
                <div className="flex items-center space-x-[10px] text-14 font-bold text-black">
                  <div className={`${item.type === method ? "odd:text-purple" : "odd:text-grey-40"}`}>{item.icon}</div>{" "}
                  {item.title}
                </div>
                <div className="w-16">
                  {item.type === method ? <IoMdRefresh className="animate-spin-slow text-20 text-grey-20" /> : ""}
                </div>
              </div>
              <div className="mb-16 w-full text-14 text-grey-40">{item.text}</div>
              <div className="flex w-full flex-wrap space-x-[8px]">
                {item.icons.map((icon: any, ke: number) => (
                  <div key={ke} className="h-32 w-32 overflow-hidden rounded-4 bg-grey-3"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ModalProperPaySelect
