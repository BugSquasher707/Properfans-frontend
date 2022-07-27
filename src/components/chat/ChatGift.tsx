import { statusApi } from "api/endpoints/status"
import { toastError } from "api/integration/toaster"
import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import ChatGiftProducts from "components/chat/gift/ChatGiftProducts"
import ChatGiftProfile from "components/chat/gift/ChatGiftProfile"
import { useProps } from "contexts/PropsContext"
import { ERR, URL } from "libs/constants"
import { ChatGiftType } from "libs/enums"
import { MessageRoomInterface, TabInterface } from "libs/interfaces"
import React, { useState } from "react"
import NumberFormat from "react-number-format"
import { Link } from "react-router-dom"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"
import Tabs from "utils/tabs/Tabs"

const ChatGift = ({ room, handler }: { room: MessageRoomInterface; handler: any }) => {
  const { token, user, wallet } = useProps()

  const [amount, setAmount] = useState(0)
  const [type, setType] = useState(ChatGiftType.Propercoins)

  const [tabs] = useState<TabInterface[]>([
    {
      type: ChatGiftType.Propercoins,
      title: <>Gift Propercoins</>,
      action: setType
    }
  ])

  const onSubmit = async () => {
    if (amount === 0) {
      toastError("Select a package")
      return
    }

    const userId = room.users.filter((id: string) => id !== user.id)[0]

    if (!userId) {
      toastError(ERR.REFRESH)
      return
    }

    console.log(token)

    const result = await statusApi()

    if (result) {
      handler(amount)
      setAmount(0)
    }
  }

  return (
    <>
      <div className="popup lg:bottom-none fixed bottom-0 right-0 z-40 w-full max-w-[100vw] transform rounded-t-[10px] border-1 border-grey-12 bg-white p-14 shadow-md dark:shadow-none lg:absolute lg:top-[50px] lg:-right-0 lg:w-[340px] lg:translate-x-[10px] lg:rounded-4">
        <div className="absolute -top-1 right-28 hidden h-14 w-14 translate-x-[50%] translate-y-[-50%] rotate-45 transform border-t-1 border-l-1 border-grey-12 bg-white lg:flex"></div>
        <div className="mb-18 grid w-full grid-cols-[auto,1fr] items-center gap-12">
          <div className="text-12 font-bold text-black">Send a gift to</div>
          <Link to={URL.USERS.BASE.replace(":param", room.handle ? room.handle : "")}>
            <ChatGiftProfile room={room} />
          </Link>
        </div>
        <div className="mb-18 w-full">
          <Tabs tabs={tabs} type={type} />
        </div>
        <ChatGiftProducts amount={amount} balance={wallet.wallet} handler={setAmount} />
        <div className="mb-24 w-full border-b-1 border-grey-10"></div>
        <div className="mb-24 flex w-full items-center justify-between">
          <div className="text-12 font-bold text-grey-40">Available Balance</div>
          <div className="flex items-center justify-center space-x-[8px] text-14 font-bold text-black">
            <Propercoin className="h-16 w-16  fill-current text-purple" />
            <NumberFormat className="text-14" displayType={"text"} value={wallet.wallet} thousandSeparator />
          </div>
        </div>
        {amount <= 0 ? (
          <div className="mb-8 w-full">
            <ButtonPurple action={() => null} title={"Select Package"} small />
          </div>
        ) : (
          <div className="mb-8 w-full">
            <button
              className="center h-36 w-full select-none gap-10 rounded-4 bg-purple px-14 text-14 font-bold text-white active:ring-3 active:ring-purple-20 hover:bg-purple-dark"
              name={"Send"}
              onClick={onSubmit}
            >
              Send Gift <Propercoin className="h-16 w-16 fill-current text-white-40" /> {amount}
            </button>
          </div>
        )}
        <Link
          className="flex h-36 w-full items-center justify-center text-14 font-bold text-grey-40 hover:text-black"
          to={URL.FAN.SHOP}
        >
          Recharge Propercoins
        </Link>
      </div>
    </>
  )
}

export default ChatGift
