import { modalCallPeople, modalCallText, modalCallTitle } from "api/integration/modals"
import { ReactComponent as Ava } from "assets/img/ava.svg"
import { ModalCallInterface } from "libs/interfaces"
import React from "react"
import { IoMdClose } from "react-icons/io"
import { MdLocalPhone } from "react-icons/md"
import Verified from "utils/icons/Verified"

const ModalCall = ({ data }: { data: ModalCallInterface }) => {
  return (
    <>
      <div className="relative z-20 flex max-w-full flex-wrap rounded-4 bg-white px-20 py-30 shadow-sm dark:shadow-none lg:w-[320px]">
        <div className="mb-20 w-full text-center text-14 font-bold text-grey-40 md:mb-30 lg:mb-50">
          {modalCallTitle(data)}
        </div>
        <div className="center mb-16 h-92 w-full">
          {data.group ? (
            <div className="flex last:mr-0">
              <Ava className="mr-[-30px] h-80 w-80 rounded-full border-4 border-white fill-current text-purple" />
              <Ava className="mr-[-30px] h-80 w-80 rounded-full border-4 border-white fill-current text-purple" />
              {data.people.length > 2 ? (
                <div className="center z-20 h-80 w-80 rounded-full bg-white">
                  <div className="center h-72 w-72 overflow-hidden rounded-full bg-grey-12 text-16 font-bold text-grey-40">
                    +{data.people.length - 2}
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          ) : (
            <>
              {data.people[0].icon ? (
                <div className="center relative h-92 w-92 rounded-full bg-purple">
                  <div className="absolute h-92 w-92 overflow-hidden rounded-full">
                    <img alt="" className="h-full" src={data.people[0].icon} />
                  </div>
                  <div className="relative h-84 w-84 overflow-hidden rounded-full bg-black"></div>
                </div>
              ) : (
                <Ava className="h-92 w-92 rounded-full fill-current text-purple" />
              )}
            </>
          )}
        </div>
        <div className="center mb-4 w-full gap-5">
          <div className="max-w-[calc(100%-22px)] text-center text-16 font-bold text-black">
            {modalCallPeople(data)}
          </div>
          {!data.group && data.people[0].verified ? <Verified size={16} /> : ""}
        </div>
        <div className="mb-20 w-full text-center text-14 text-grey-40 md:mb-40">{modalCallText(data)}</div>
        <div className="grid w-full grid-cols-2">
          {data.active ? (
            <>
              <div className="w-full">
                <div className="center mb-8 flex h-52 w-full">
                  <button className="center h-52 w-52 rounded-full bg-red shadow-md">
                    <MdLocalPhone className="rotate-[135deg] transform text-24 text-white" />
                  </button>
                </div>
                <div className="w-full text-center text-12 text-grey-40">Decline</div>
              </div>
              <div className="w-full">
                <div className="center mb-8 flex h-52 w-full">
                  <button className="center h-52 w-52 rounded-full bg-green shadow-md">
                    <MdLocalPhone className="text-24 text-white" />
                  </button>
                </div>
                <div className="w-full text-center text-12 text-grey-40">Accept</div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full">
                <div className="center mb-8 flex h-52 w-full">
                  <button className="center h-52 w-52 rounded-full bg-green shadow-md">
                    <MdLocalPhone className="text-24 text-white" />
                  </button>
                </div>
                <div className="w-full text-center text-12 text-grey-40">Redial</div>
              </div>
              <div className="w-full">
                <div className="center mb-8 flex h-52 w-full">
                  <button className="center h-52 w-52 rounded-full bg-grey-12 shadow-md">
                    <IoMdClose className="text-24 text-white" />
                  </button>
                </div>
                <div className="w-full text-center text-12 text-grey-40">Close</div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ModalCall
