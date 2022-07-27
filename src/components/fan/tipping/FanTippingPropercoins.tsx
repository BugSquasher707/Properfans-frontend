import { ReactComponent as ProperCoin } from "assets/img/propercoin.svg"
import FanTippingMessage from "components/fan/tipping/FanTippingMessage"
import React from "react"
import NumberFormat from "react-number-format"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const FanTippingPropercoins = ({
  amount,
  message,
  handlerAmount,
  handlerMessage,
  handlerEmoji,
  handlerSubmit
}: {
  amount: number
  message: string
  handlerAmount: any
  handlerMessage: any
  handlerEmoji: any
  handlerSubmit: any
}) => {
  return (
    <>
      <div className="w-full">
        <div className="mb-20 grid w-full grid-cols-1 gap-12">
          <div className="w-full text-14 text-grey-40">Tip amount*</div>
          <div className="grid h-42 w-full grid-cols-[auto,1fr] rounded-4 bg-grey-6 ">
            <div className="flex h-42 w-42 items-center justify-center">
              <ProperCoin className="h-16 w-16 fill-current text-grey-20" />
            </div>
            <input
              className="placeholder-grey-40:placeholder text-14 font-bold text-black"
              placeholder="Tip amount"
              type="number"
              value={amount > 0 ? amount : ""}
              onChange={(e) => handlerAmount(e.target.value)}
            />
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-12">
          <div className="w-full text-14 text-grey-40">Message</div>
          <FanTippingMessage handlerEmoji={handlerEmoji} handlerMessage={handlerMessage} message={message} />
        </div>
        <div className="my-24 w-full border-b-1 border-grey-10"></div>
        <div className="mb-24 flex w-full items-center justify-between space-x-[20px]">
          <div className="text-12 font-bold text-grey-40">Total</div>
          <div className="flex items-center space-x-[6px]">
            <div className="text-14 font-bold text-black">
              <NumberFormat displayType={"text"} prefix={"$"} value={amount / 100} thousandSeparator />
            </div>
            <div className="h-4 w-4 rounded-full bg-grey-20"></div>
            <div className="flex items-center space-x-[4px] text-14 text-grey-40">
              <ProperCoin className="h-16 w-16 fill-current text-grey-40" />
              <NumberFormat displayType={"text"} value={amount} thousandSeparator />
            </div>
          </div>
        </div>
        <div className="mb-20 w-full">
          <ButtonPurple
            action={handlerSubmit}
            icon={<ProperCoin className="h-16 w-16 fill-current text-white-40" />}
            pre={"Send Tip"}
            title={`${amount}`}
            full
          />
        </div>
        <div className="w-full text-center text-12 text-grey-40">
          Tips (also known as donations) are not eligible for refunds
        </div>
      </div>
    </>
  )
}

export default FanTippingPropercoins
