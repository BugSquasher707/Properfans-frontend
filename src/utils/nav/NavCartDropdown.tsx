import { statusApi } from "api/endpoints/status"
import { cartCheckout, getTotalCoins, getTotalUsd } from "api/integration/cart"
import { roundNumber } from "api/integration/functions"
import { ReactComponent as ProperCoin } from "assets/img/propercoin.svg"
import CartItem from "components/cart/CartItem"
import ModalCartRemove from "components/modals/cart/ModalCartRemove"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { ProductType } from "libs/enums"
import { PropercoinsCartInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { FaTrash } from "react-icons/fa"
import { IoMdExpand } from "react-icons/io"
import NumberFormat from "react-number-format"
import { Link } from "react-router-dom"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const NavCartDropdown = ({ handler, maximize }: { handler: any; maximize: any }) => {
  const { coupon, cart, token, setCart } = useProps()

  const [modalRemove, setModalRemove] = useState(false)
  const [modalRemoveItem, setModalRemoveItem] = useState<PropercoinsCartInterface>()

  const [couponPercentage, setCouponPercentage] = useState(0)

  const [totalCoins, setTotalCoins] = useState(0)
  const [totalUsd, setTotalUsd] = useState(0)

  const [items, setItems] = useState(0)

  useEffect(() => {
    onApply()
  }, [])

  useEffect(() => {
    const newTotalCoins = getTotalCoins(cart)
    const newTotalUsd = getTotalUsd(cart)

    setTotalCoins(roundNumber(newTotalCoins))
    setTotalUsd(roundNumber((newTotalUsd * (100 - couponPercentage)) / 100))
  }, [cart, couponPercentage])

  useEffect(() => {
    modalRemoveItem ? setModalRemove(true) : setModalRemove(false)
  }, [modalRemoveItem])

  useEffect(() => {
    if (cart) {
      setItems(cart.map((item: PropercoinsCartInterface) => item.count).reduce((a: number, b: number) => a + b, 0))
    } else {
      setItems(0)
    }
  }, [cart])

  const emptyLoad = () => {
    setCart([])
  }

  const onApply = async () => {
    if (!coupon) {
      setCouponPercentage(0)
      return
    }

    console.log(token)

    const result = await statusApi()

    if (result) {
      setCouponPercentage(result.percent_off)
    }
  }

  return (
    <>
      <div className="fixed top-0 left-0 z-10 h-screen w-screen" onClick={() => handler(false)}></div>
      <div className="absolute right-[74px] z-20 w-[276px] translate-x-[50%] transform sm:right-[100px] sm:w-[340px] lg:right-[80px] xl:right-[10px]">
        <div className="relative mt-16 w-full rounded-4 border-1 border-grey-12 bg-white p-14 shadow-md dark:shadow-none">
          <div className="absolute -top-1 right-[74px] h-14 w-14 translate-x-[50%] translate-y-[-50%] rotate-45 transform rounded-1 border-l-1 border-t-1 border-grey-12 bg-white sm:right-[80px] lg:right-[100px] xl:right-[50%]"></div>
          <div className="between mb-12 w-full">
            <div className="flex items-center space-x-[10px]">
              <div className="select-none text-12 font-bold text-black">Your cart</div>
              <IoMdExpand className="cursor-pointer text-grey-40 hover:text-purple" onClick={() => maximize()} />
            </div>
            <div className="flex items-center space-x-[6px]">
              <div className="select-none text-12 text-grey-40">
                {items} {items === 1 ? "item" : "items"}
              </div>
              <div className="h-4 w-4 rounded-full bg-grey-20"></div>
              <Link
                className="select-none text-12 font-bold text-purple"
                to={URL.FAN.SHOP}
                onClick={() => handler(false)}
              >
                Shop
              </Link>
            </div>
          </div>
          {cart && cart.length > 0 ? (
            <div className="grid max-h-[230px] min-h-[160px] w-full  grid-cols-1 gap-4 overflow-y-scroll">
              {cart.map((product: PropercoinsCartInterface, key: number) => (
                <div key={key} className="w-full">
                  {
                    {
                      [ProductType.Propercoins]: (
                        <CartItem
                          handler={setModalRemoveItem}
                          index={key}
                          light={false}
                          product={product}
                          small={true}
                        />
                      )
                    }[product.type]
                  }
                </div>
              ))}
            </div>
          ) : (
            <div className="flex h-[160px] w-full items-center justify-center pt-20">
              <div className="text-center text-14 text-grey-40">
                Your cart is empty.
                <br /> Visit the{" "}
                <Link className="font-bold text-purple" to={URL.FAN.SHOP}>
                  Shop
                </Link>{" "}
                to order more <br />
                ProperCoins
              </div>
            </div>
          )}
          <div className="mt-14 mb-20 w-full border-b-1 border-grey-10"></div>
          <Wrapper open={couponPercentage > 0}>
            <div className="mb-8 w-full truncate overflow-ellipsis text-12 text-purple">
              Coupon applied, <span className="font-bold">{coupon}</span>:{" "}
              <span className="font-bold">-{couponPercentage}%</span>
            </div>
          </Wrapper>
          <div className="mb-14 flex w-full items-center justify-between">
            <div className="text-12 font-bold text-grey-40">Total</div>
            <div className="flex items-center space-x-[6px]">
              <NumberFormat
                className="text-14 font-bold text-black"
                displayType={"text"}
                prefix={"$"}
                value={totalUsd}
                thousandSeparator
              />
              <div className="h-4 w-4 rounded-full bg-grey-20"></div>
              <div className="flex items-center space-x-[6px] text-14 text-grey-40">
                <ProperCoin className="h-16 w-16 fill-current text-grey-40" />
                <NumberFormat displayType={"text"} value={totalCoins} thousandSeparator />
              </div>
            </div>
          </div>
          <ButtonPurple action={() => cartCheckout(totalCoins, cart, coupon, token)} title={"Checkout"} full small />
          <Wrapper open={cart.length > 0}>
            <button className="center group mt-8 h-36 w-full gap-8" onClick={() => emptyLoad()}>
              <FaTrash className="text-14 text-grey-40 group-hover:text-black" />
              <div className="text-14 font-bold text-grey-40 group-hover:text-black">Empty</div>
            </button>
          </Wrapper>
        </div>
      </div>
      {modalRemoveItem ? (
        <ModalCartRemove handler={setModalRemoveItem} item={modalRemoveItem} open={modalRemove} />
      ) : (
        ""
      )}
    </>
  )
}

export default NavCartDropdown
