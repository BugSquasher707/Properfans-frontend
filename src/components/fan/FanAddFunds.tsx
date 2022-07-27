import { ReactComponent as ProperCoin } from "assets/img/propercoin.svg"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import React, { useState } from "react"
import { BiCaretDown } from "react-icons/bi"
import { BsArrowRight } from "react-icons/bs"
import { RiArrowRightSLine } from "react-icons/ri"
import NumberFormat from "react-number-format"
import { Link } from "react-router-dom"

const FanAddFunds = () => {
  const { wallet } = useProps()

  const [options] = useState([
    {
      title: "Pay for propercoins",
      text: "Purchase preferred amount of propercoins with real-world currency via credit card, debit card or PayPal",
      link: URL.FAN.SHOP,
      sub: "Go to shop"
    },
    {
      title: "Get free propercoins",
      text: "It’s possible to earn propercoins completely for free, download apps on your mobile or complete surveys",
      link: URL.FAN.SHOP,
      sub: "Earn for free"
    }
  ])

  return (
    <>
      <div className="w-full">
        <div className="relative mb-20 w-full p-20 md:p-40 lg:p-60">
          <div className="absolute top-0 left-0 right-0 bottom-0 overflow-hidden rounded-4">
            <img
              alt=""
              className="absolute top-[50%] left-[0] min-h-full min-w-full translate-y-[-50%] transform rounded-4"
              src={"/gradients/gradient_shop.png"}
            />
          </div>
          <div className="relative w-full">
            <div className="mb-12 w-full text-center text-24 font-black text-white">Recharge with propercoins</div>
            <div className="mb-20 w-full text-center text-14 font-bold text-white-40 md:mb-40">
              Propercoins is the currency on the platform, this currency allows you to purchase subscription, make a
              donation or support your favorite creator with exclusive features
            </div>
            <div className="center mb-12 w-full">
              <div className="center h-60 w-220 max-w-full gap-10 rounded-4 bg-white shadow-md">
                <ProperCoin className="h-16 w-16 fill-current text-purple" />
                <div className="text-16 font-bold text-black">
                  <NumberFormat displayType={"text"} value={wallet.wallet} thousandSeparator />
                </div>
              </div>
            </div>
            <div className="mb-20 w-full text-center text-12 font-bold text-white-40">
              Current balance (1 USD equals to 100 propercoins)
            </div>
            <button className="center hidden w-full text-14 font-bold text-white">
              Learning more about propercoins
              <RiArrowRightSLine className="text-18 text-white-40" />
            </button>
          </div>
        </div>
        <div className="center mb-20 w-full">
          <button
            className="center h-38 w-38 cursor-pointer rounded-full border-1 border-grey-12 bg-white shadow-md dark:shadow-none"
            onClick={() => window.scrollTo(0, 0)}
          >
            <BiCaretDown className="text-18 text-grey-40" />
          </button>
        </div>
        <div className="grid w-full grid-cols-1 gap-12" id="links">
          {options.map((element: any, key: number) => (
            <Link
              key={key}
              className="group w-full rounded-4 border-1 border-grey-12 p-24 hover:border-2 hover:border-purple hover:p-[23px]"
              to={element.link}
            >
              <div className="between mb-20 w-full gap-20">
                <div className="flex items-center space-x-[10px] text-16 font-bold text-black">
                  <ProperCoin className="h-28 w-28 fill-current text-purple" />
                  {element.title}
                </div>
                <div className="hidden gap-12 text-14 font-bold text-purple group-hover:flex">
                  {element.sub}
                  <BsArrowRight className="text-16 text-purple" />
                </div>
              </div>
              <div className="w-full text-14 text-grey-40">{element.text}</div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}

export default FanAddFunds
