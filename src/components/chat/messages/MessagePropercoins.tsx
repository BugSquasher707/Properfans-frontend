import { statusApi } from "api/endpoints/status"
import { parsePropercoinsIcon } from "api/integration/cart"
import { roundNumber } from "api/integration/functions"
import { toastError } from "api/integration/toaster"
import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import RibbonGrey from "assets/img/ribbon_grey.svg"
import RibbonPurple from "assets/img/ribbon_purple.svg"
import { useChat } from "contexts/ChatContext"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { MessageContentInterface } from "libs/interfaces"
import React, { useState } from "react"
import { IoMdHeart, IoMdShare } from "react-icons/io"
import { MdShoppingCart } from "react-icons/md"
import NumberFormat from "react-number-format"
import { Link } from "react-router-dom"

const MessagePropercoins = ({ content, incoming }: { content: MessageContentInterface; incoming: boolean }) => {
  const { chatId } = useChat()
  const { token } = useProps()

  const [thanks, setThanks] = useState(false)

  const onThank = async () => {
    if (!chatId) {
      toastError("No chat selected")
      return
    }

    const message = `Thanks for the donation, ${content.content.userName}!`

    if (!message) {
      return
    }

    console.log(token)

    const result = await statusApi()

    if (result) {
      setThanks(true)
    }
  }

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
            src={incoming ? RibbonGrey : RibbonPurple}
          />
        </div>
        <div className="relative w-full">
          <div className={`mb-10 w-full text-14 font-bold ${incoming ? "text-black" : "text-white"}`}>
            {incoming ? "You received a gift" : "You successfully gifted"}
          </div>
          <div className="mb-10 grid w-full grid-cols-1 items-center gap-16 sm:grid-cols-[70px,1fr]">
            <div
              className={`flex h-70 w-full items-center justify-center rounded-4 pl-4 sm:w-70 ${
                incoming ? "bg-white shadow-sm" : "bg-purple-med"
              }`}
            >
              <img alt="" className="h-46" src={parsePropercoinsIcon(content.content.coins)} />
            </div>
            <div className="w-full">
              <div className="sm-x-flow mb-4 grid w-full items-center justify-center gap-8 sm:grid-cols-[auto,1fr] sm:justify-start">
                <Propercoin className={`h-16 w-16 fill-current ${incoming ? "text-purple" : "text-white"}`} />
                <span className={`text-14 font-bold ${incoming ? "text-black" : "text-white"}`}>
                  <NumberFormat displayType={"text"} value={content.content.totalCoins} thousandSeparator /> Propercoins
                </span>
              </div>
              <div className="flex w-full items-center justify-center space-x-[6px] sm:justify-start">
                <NumberFormat
                  className={`text-14 ${incoming ? "text-grey-40" : "text-white-40"}`}
                  displayType={"text"}
                  prefix={"$"}
                  value={roundNumber(content.content.totalCoins / 100)}
                  thousandSeparator
                />
                <div className={`h-4 w-4 rounded-full ${incoming ? "bg-grey-20" : "bg-white-20"}`}></div>
                <div className={`text-14 ${incoming ? "text-grey-40" : "text-white-40"}`}>Non-refundable</div>
              </div>
            </div>
          </div>
          {incoming ? (
            <div className="grid w-full grid-cols-1 gap-12 sm:grid-cols-2">
              <button
                className="flex w-full items-center justify-center space-x-[8px] rounded-4 p-4 hover:bg-grey-6"
                name={"Share"}
              >
                <IoMdShare className="text-grey-20" />
                <span className="text-14 font-bold text-black"> Share Donation</span>
              </button>
              <button
                className="flex w-full items-center justify-center space-x-[8px] rounded-4 p-4 hover:bg-grey-6"
                name={"Thank"}
                onClick={() => (!thanks ? onThank() : null)}
              >
                <IoMdHeart className="text-grey-20" />
                <span className="text-14 font-bold text-black">{thanks ? "Message Sent" : "Thank Gifter"}</span>
              </button>
            </div>
          ) : (
            <Link
              className="flex w-full items-center justify-center gap-8 rounded-4 p-4 text-14 font-bold text-white hover:bg-white-10"
              to={URL.FAN.SHOP}
            >
              <MdShoppingCart className="text-white-40" />
              Recharge Propercoins
            </Link>
          )}
        </div>
      </div>
    </>
  )
}

export default MessagePropercoins
