import { statusApi } from "api/endpoints/status"
import { getTotalCoins, getTotalUsd } from "api/integration/cart"
import { openLink, roundNumber } from "api/integration/functions"
import { ReactComponent as ProperCoin } from "assets/img/propercoin.svg"
import CartButton from "components/cart/CartButton"
import CartCoupon from "components/cart/CartCoupon"
import CartItems from "components/cart/CartItems"
import { useProps } from "contexts/PropsContext"
import { PropercoinsCartInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FaStripe, FaTrash } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import NumberFormat from "react-number-format"
import InputFieldApply from "utils/inputs/InputFieldApply"

const Cart = ({ handler }: { handler: any }) => {
  const { cart, coupon, token, setCart, setCoupon } = useProps()

  const [items, setItems] = useState(0)
  const [couponInput, setCouponInput] = useState("")
  const [couponError, setCouponError] = useState(false)
  const [couponPercentage, setCouponPercentage] = useState(0)

  const [totalCoins, setTotalCoins] = useState(0)
  const [totalUsd, setTotalUsd] = useState(0)

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    onLoad()
    setLoading(false)
  }, [])

  useEffect(() => {
    if (cart.length > 0) {
      setItems(cart.map((item: PropercoinsCartInterface) => item.count).reduce((a: number, b: number) => a + b, 0))
    } else {
      setItems(0)
    }
  }, [cart])

  useEffect(() => {
    if (couponInput !== coupon) {
      onClearApplied()
    }
  }, [couponInput])

  useEffect(() => {
    const newTotalCoins = getTotalCoins(cart)
    const newTotalUsd = getTotalUsd(cart)

    setTotalCoins(roundNumber(newTotalCoins))
    setTotalUsd(roundNumber((newTotalUsd * (100 - couponPercentage)) / 100))
  }, [cart, couponPercentage])

  const onApply = async () => {
    if (!couponInput) {
      setCouponPercentage(0)
      return
    }

    const result = await statusApi()

    if (result) {
      if (result.id && result.percent_off) {
        setCoupon(result.id)
        setCouponPercentage(result.percent_off)

        setCouponError(false)
      } else {
        setCouponError(true)
      }
    }
  }

  const onClearApplied = () => {
    setCoupon("")
  }

  const onLoad = () => {
    if (coupon) {
      onApply()
    }
  }

  const emptyLoad = () => {
    setCart([])
  }

  return (
    <>
      <div className="center fixed top-0 left-0 bottom-0 right-0 z-50 flex w-full p-14 md:p-20">
        <div
          className="light-r fixed top-0 left-0 z-10 h-full w-full cursor-pointer bg-black opacity-50 dark:opacity-80"
          onClick={() => handler(false)}
        ></div>
        <div className="fixed top-0 right-0 bottom-0 z-10 w-[440px] max-w-full border-l-1 border-grey-3 bg-white p-20 sm:p-40">
          <div className="mb-30 flex w-full flex-wrap justify-between">
            <div className="text-14 font-bold text-black">Your cart</div>
            <div className="center gap-20">
              <div className="text-14 text-grey-40">
                {items} {items === 1 ? "item" : "items"}
              </div>
              <button className="center h-20 w-20" name={"Close"} onClick={() => handler(false)}>
                <IoMdClose className="text-24 text-grey-40 hover:text-black" />
              </button>
            </div>
          </div>
          <div className="scoller -mx-20 mb-40 flex h-[calc(100%-370px)] w-[calc(100%+40px)] flex-wrap items-start overflow-y-auto px-20 sm:-mx-40 sm:w-[calc(100%+80px)] sm:px-40">
            <CartItems products={cart} title={"Your cart is empty"} />
          </div>
          <div className="w-full">
            <InputFieldApply
              applied={coupon ? true : false}
              button={onApply}
              data={{ title: "Enter coupon" }}
              handler={setCouponInput}
              remove={onClearApplied}
              value={couponInput}
            />
            <CartCoupon couponApplied={coupon} couponError={couponError} couponPercentage={couponPercentage} />
            <div className="mb-30 mt-12 w-full border-b-1 border-grey-10"></div>
            <div className="mb-20 flex w-full items-center justify-between gap-10">
              <div className="text-14 text-grey-40">Total</div>
              <div className="flex items-center justify-center gap-12">
                <NumberFormat
                  className="text-16 font-bold text-black"
                  displayType={"text"}
                  prefix={"$"}
                  value={totalUsd}
                  thousandSeparator
                />
                <div className="h-6 w-6 rounded-full bg-grey-20"></div>
                <div className="flex items-center space-x-[6px] text-16 text-grey-40">
                  <ProperCoin className="h-16 w-16 fill-current text-grey-40" />
                  <NumberFormat className="text-16" displayType={"text"} value={totalCoins} thousandSeparator />
                </div>
              </div>
            </div>
            <div className="mb-4 w-full">
              <CartButton
                cart={cart}
                coupon={coupon}
                handler={setLoading}
                loading={loading}
                title={"Checkout"}
                token={token}
                totalCoins={totalCoins}
              />
            </div>
            <button className="center group mb-2 h-50 w-full gap-8" name={"Empty cart"} onClick={() => emptyLoad()}>
              <FaTrash className="text-14 text-grey-40 group-hover:text-black" />
              <div className="text-14 font-bold text-grey-40 group-hover:text-black">Empty</div>
            </button>
            <button
              className="center group w-full gap-5"
              name={"Cashout"}
              onClick={(e) => openLink(e, "https://stripe.com/")}
            >
              <div className="text-14 text-grey-40 group-hover:text-black">All payments secured via</div>
              <FaStripe className="text-40 text-grey-40 group-hover:text-black" />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cart
