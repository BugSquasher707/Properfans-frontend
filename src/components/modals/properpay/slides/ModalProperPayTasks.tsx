import { ProperPayMethodType, ProperPayStatusType } from "libs/enums"
import { ProperPayTaskInterface } from "libs/interfaces"
import QR from "qrcode.react"
import React, { useState } from "react"
import { FiCheck } from "react-icons/fi"
import { IoMdRefresh } from "react-icons/io"

const ModalProperPayTasks = ({ method }: { method: ProperPayMethodType }) => {
  const [tasks] = useState<ProperPayTaskInterface[]>([
    {
      title: "Knighthood",
      text: "Install and open app for 30 sec.",
      icon: "",
      link: "1234",
      status: ProperPayStatusType.Finished
    },
    {
      title: "Rebel Racing",
      text: "Install app and sign up",
      icon: "",
      link: "5678",
      status: ProperPayStatusType.Pending
    },
    {
      title: "Rebel Racing 2",
      text: "Install app and play for 30 seconds",
      icon: "",
      link: "9012",
      status: ProperPayStatusType.Finished
    }
  ])

  return (
    <>
      <div className="w-full">
        <div className="mb-10 w-full text-14 text-grey-40 sm:mb-20">Tasks</div>
        {
          {
            [ProperPayMethodType.Apps]: (
              <div className="mb-20 w-full rounded-4 bg-grey-3 p-16 text-14 text-grey-40">
                Scan <span className="font-bold text-black">QR codes of the apps</span>, download, install them and
                finish all of their steps
              </div>
            ),
            [ProperPayMethodType.Surveys]: (
              <div className="mb-20 w-full rounded-4 bg-grey-3 p-16 text-14 text-grey-40">
                Scan <span className="font-bold text-black">QR codes of the surveys</span> and complete them
              </div>
            )
          }[method]
        }
        <div className="w-full lg:max-h-[248px] lg:overflow-y-scroll">
          {tasks.map((task: ProperPayTaskInterface, key: number) => (
            <div
              key={key}
              className="grid w-full grid-cols-[auto,1fr,auto] items-center gap-12 border-b-1 border-grey-6 py-14"
            >
              <div className="flex h-52 w-32 items-start">
                <div className="h-32 w-full overflow-hidden rounded-4 bg-grey-3"></div>
              </div>
              <div className="w-full">
                <div className="mb-2 w-full text-12 font-bold text-black">{task.title}</div>
                <div className="mb-2 w-full text-12 text-grey-40">{task.text}</div>
                <div className="flex w-full items-center space-x-[8px]">
                  <div className="text-12 text-grey-40">Status:</div>
                  {task.status === ProperPayStatusType.Pending ? (
                    <div className="flex items-center space-x-[4px] text-12 font-bold text-grey-40">
                      <IoMdRefresh className="animate-spin-slow text-16 text-grey-40" />
                      Pending
                    </div>
                  ) : (
                    <div className="flex items-center space-x-[4px] text-12 font-bold text-green">
                      <FiCheck className="text-16 text-green" />
                      Finished
                    </div>
                  )}
                </div>
              </div>
              <QR size={60} value={task.link} />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ModalProperPayTasks
