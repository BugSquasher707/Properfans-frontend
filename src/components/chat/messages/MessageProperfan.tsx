import { ReactComponent as Subs } from "assets/img/subs.svg"
import { MessageContentInterface } from "libs/interfaces"
import React from "react"
import { IoMdHand } from "react-icons/io"
import AvatarDark from "utils/avatars/AvatarDark"

const MessageProperfan = ({ content, incoming }: { content: MessageContentInterface; incoming: boolean }) => {
  return (
    <>
      <div
        className={`relative w-[335px] max-w-full overflow-hidden rounded-t-6 py-10 px-14 ${
          incoming ? "rounded-br-6 bg-grey-3" : "rounded-bl-6 bg-purple"
        }`}
      >
        <div className="absolute top-0 left-0 h-full w-full">
          <img
            alt=""
            className="absolute top-[50%] left-[50%] min-h-full min-w-full translate-x-[-50%] translate-y-[-50%] transform"
            src={"/general/confetti.png"}
          />
        </div>
        <div className="relative w-full">
          <div
            className={`mb-10 w-full overflow-hidden overflow-ellipsis text-14 font-bold ${
              incoming ? "text-black-99" : "text-purple-light"
            }`}
          >
            A new properfan, welcome to the {content.content.name} properfans community
          </div>
          <div
            className={`mb-10 grid w-full grid-cols-[42px,1fr] items-center gap-14 rounded-4 p-14 ${
              incoming ? "bg-white shadow-sm" : "bg-purple-med"
            }`}
          >
            <div className="h-42 w-42">
              {content.content.icon ? (
                <img alt="" className="h-42 w-42 rounded-full" src={content.content.icon} />
              ) : (
                <AvatarDark dark={incoming} />
              )}
            </div>
            <div className="w-full">
              <div className="mb-4 grid w-full grid-cols-[auto,1fr] items-center gap-8">
                {incoming ? (
                  <img alt="" className="h-14 w-14" src={"/general/subs_big.png"} />
                ) : (
                  <Subs className="h-14 w-14 fill-current text-white" />
                )}
                <span
                  className={`w-full max-w-[calc(100%-24px)] truncate overflow-ellipsis text-14 font-bold ${
                    incoming ? "text-black" : "text-white"
                  }`}
                >
                  {content.content.name}
                </span>
              </div>
              <div className="flex w-full items-center space-x-[6px]">
                <div className={`text-14 ${incoming ? "text-grey-40" : "text-white-40"}`}>
                  Tier {content.content.tier}
                </div>
                <div className={`h-4 w-4 rounded-full ${incoming ? "bg-grey-20" : "bg-white-20"}`}></div>
                <div className={`text-14 ${incoming ? "text-grey-40" : "text-white-40"}`}>
                  Properfan {content.content.fan}
                </div>
              </div>
            </div>
          </div>
          <button
            className={`group flex w-full items-center justify-center gap-8 rounded-4 p-4 text-14 font-bold ${
              incoming ? "text-black hover:bg-grey-6" : "text-white hover:bg-white-10"
            }`}
            name={"Welcome"}
          >
            <IoMdHand
              className={`${incoming ? "text-grey-40 group-hover:text-black" : "text-white-40 group-hover:text-white"}`}
            />
            <span className="max-w-[calc(100%-40px)] overflow-hidden overflow-ellipsis">
              Welcome {content.content.name}
            </span>
          </button>
        </div>
      </div>
    </>
  )
}

export default MessageProperfan
