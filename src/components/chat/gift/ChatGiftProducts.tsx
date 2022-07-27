import { toastError } from "api/integration/toaster"
import { ReactComponent as Propercoin } from "assets/img/propercoin.svg"
import ProperCoin1 from "assets/img/propercoins/propercoins_1.svg"
import ProperCoin2 from "assets/img/propercoins/propercoins_2.svg"
import ProperCoin3 from "assets/img/propercoins/propercoins_3.svg"
import ProperCoin4 from "assets/img/propercoins/propercoins_4.svg"
import ProperCoin5 from "assets/img/propercoins/propercoins_5.svg"
import { NumberIconInterface } from "libs/interfaces"
import React, { useState } from "react"
import NumberFormat from "react-number-format"

const ChatGiftProducts = ({ balance, amount, handler }: { balance: number; amount: number; handler: any }) => {
  const [products] = useState([
    {
      number: 100,
      icon: <img alt="" className="max-h-48 max-w-full" src={ProperCoin1} />
    },
    {
      number: 250,
      icon: <img alt="" className="max-h-48 max-w-full" src={ProperCoin2} />
    },
    {
      number: 500,
      icon: <img alt="" className="max-h-48 max-w-full" src={ProperCoin3} />
    },
    {
      number: 1000,
      icon: <img alt="" className="max-h-48 max-w-full" src={ProperCoin4} />
    },
    {
      number: 2000,
      icon: <img alt="" className="max-h-48 max-w-full" src={ProperCoin4} />
    },
    {
      number: 5000,
      icon: <img alt="" className="max-h-48 max-w-full" src={ProperCoin5} />
    }
  ])

  return (
    <>
      <div className="mb-18 grid w-full grid-cols-3 gap-6">
        {products.map((gift: NumberIconInterface, key: number) => (
          <button
            key={key}
            className={`rounded-4 border-1 bg-grey-3 px-10 pt-18 pb-10 ${
              gift.number === amount ? "border-purple" : "border-transparent"
            }`}
            name={"Gift"}
            onClick={() => (balance >= gift.number ? handler(gift.number) : toastError("Not enough Propercoins"))}
          >
            <div className="mb-14 flex h-48 w-full items-center justify-center">{gift.icon}</div>
            <div
              className={`t flex w-full items-center justify-center space-x-[4px] text-14 font-semibold ${
                gift.number === amount ? "font-bold text-purple" : "text-grey-40"
              }`}
            >
              <Propercoin
                className={`h-16 w-16 fill-current ${gift.number === amount ? "text-purple" : "text-grey-20"}`}
              />
              <NumberFormat className="text-14" displayType={"text"} value={gift.number} thousandSeparator />
            </div>
          </button>
        ))}
      </div>
    </>
  )
}

export default ChatGiftProducts
