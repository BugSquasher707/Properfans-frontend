import { statusApi } from "api/endpoints/status"
import { getTotalCoins, getTotalUsd, parsePropercoinsIcon } from "api/integration/cart"
import { setterCart } from "api/integration/cookies"
import { roundNumber } from "api/integration/functions"
import { ReactComponent as ProperCoin } from "assets/img/propercoin.svg"
import CartButton from "components/cart/CartButton"
import CartItems from "components/cart/CartItems"
import Wrapper from "components/wrappers/Wrapper"
import { useProps } from "contexts/PropsContext"
import { URL } from "libs/constants"
import { OverlayType, ProductType } from "libs/enums"
import { OrderInterface, PropercoinsCartInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"
import { useCookies } from "react-cookie"
import { IoMdHeart } from "react-icons/io"
import NumberFormat from "react-number-format"
import { useHistory, useParams } from "react-router"
import { Link } from "react-router-dom"
import CheckGreen from "utils/elements/CheckGreen"
import ErrorRed from "utils/elements/ErrorRed"

interface Params {
  id: string
}

const FanOrder = ({ failure, success }: { failure: boolean; success: boolean }) => {
  const [cookies, setCookie] = useCookies(["cart"])

  const { cart, coupon, token, setCart, setOverlay } = useProps()

  const { id } = useParams<Params>()

  const history = useHistory()

  const [totalCoins, setTotalCoins] = useState(0)
  const [totalUsd, setTotalUsd] = useState(0)

  const [loading, setLoading] = useState(false)
  const [couponPercentage, setCouponPercentage] = useState(0)

  const [order, setOrder] = useState<OrderInterface>()
  const [visible, setVisible] = useState<PropercoinsCartInterface[]>([])

  const [mounted, setMounted] = useState(true)

  useEffect(() => {
    setMounted(true)
    setVisible(order && order.products ? onProducts(order.products) : cart)

    return () => {
      setMounted(false)
    }
  }, [order])

  useEffect(() => {
    setMounted(true)
    onLoad()
    onApply()

    return () => {
      setMounted(false)
    }
  }, [])

  useEffect(() => {
    const newTotalCoins = getTotalCoins(failure ? cart : visible)
    const newTotalUsd = getTotalUsd(failure ? cart : visible)

    setTotalCoins(roundNumber(newTotalCoins))
    setTotalUsd(roundNumber((newTotalUsd * (100 - couponPercentage)) / 100))
  }, [visible, couponPercentage])

  const onProducts = (products: any) => {
    return products.map((product: any) => ({
      count: product.quantity,
      price: product.unit_amount / 100,
      product: product.coins,
      id: product.price,
      type: ProductType.Propercoins,
      icon: parsePropercoinsIcon(product.coins),
      locked: true
    }))
  }

  const onLoad = async () => {
    if (!id) {
      return
    }

    if (success && cookies.cart) {
      setCart([])
      setterCart(setCookie, [])
    }

    const result = await statusApi()

    if (mounted) {
      if (result) {
        if (result.type === "subscription") {
          history.push(URL.SUBSCRIBE.SUCCESS.replace(":param", result.tag))
        } else {
          setOrder(result)
        }
      } else {
        setOverlay(OverlayType.NotFound)
      }
    }
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
      <div className="grid w-full grid-cols-1">
        <div className="mb-30 flex w-full justify-center">{failure ? <ErrorRed /> : <CheckGreen />}</div>
        <div className={`grid w-full grid-cols-1 gap-6 ${failure ? "mb-30" : " mb-40 md:mb-60"}`}>
          <div className="flex w-full items-center justify-center space-x-[6px] text-center text-24 font-bold text-black">
            {failure ? (
              "Your order has failed"
            ) : (
              <>
                <span className="text-center text-24 font-bold text-black">Thank you for your proper order</span>{" "}
                <IoMdHeart className="text-22 text-purple" />
              </>
            )}
          </div>
          <div className="flex w-full justify-center">
            <div className="w-[500px] text-center text-14 text-grey-40">
              {failure ? (
                "We have tried to process your order, sadly it has failed. If you wish to try again, please click the button “Process Order Again”"
              ) : (
                <>
                  We processed your order successfully, down below are listed all the details and summary. You can check
                  the order at{" "}
                  <Link className="font-bold text-purple" to={URL.ACCOUNT.BILLING}>
                    My Orders
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
        <Wrapper open={failure}>
          <div className="mb-30 flex w-full justify-center">
            <div className="w-[360px] max-w-full">
              <CartButton
                cart={cart}
                coupon={coupon}
                handler={setLoading}
                loading={loading}
                title={"Process order again"}
                token={token}
                totalCoins={totalCoins}
              />
            </div>
          </div>
        </Wrapper>
        <div className="flex w-full justify-center">
          <div className="w-[410px] rounded-4 border-1 border-grey-12 p-20 shadow-md dark:shadow-none">
            <div className="mb-30 grid w-full grid-cols-[1fr,auto] items-center gap-12 sm:mb-40">
              <div className="grid w-full grid-cols-1 gap-4">
                <div className="w-full text-14 text-grey-40">Summary</div>
                <div className="w-full text-14 font-bold text-black">
                  {failure ? (
                    "Order failed"
                  ) : (
                    <>
                      Order <span className="font-bold capitalize text-purple">{order ? order.state : "loading"}</span>
                    </>
                  )}
                </div>
              </div>
              <div className="flex h-44 w-72 items-center justify-center rounded-4 bg-grey-6">
                <ProperCoin className="h-24 w-24 fill-current text-purple" />
              </div>
            </div>
            <div className="mb-20 w-full text-14 font-bold text-grey-40">
              {failure ? "Items in cart" : "Purchased items"}
            </div>
            <div className="mb-30 w-full">
              <CartItems products={visible} title={"No products loaded"} />
            </div>
            <Wrapper open={order ? false : true}>
              <div className="grid w-full grid-cols-[auto,1fr] items-center justify-between gap-16">
                <div className="text-14 font-bold text-grey-40">Coupon applied</div>
                {couponPercentage === 0 ? (
                  <div className="w-full text-right text-14 font-bold text-black">No coupon applied</div>
                ) : (
                  <div className="grid w-full grid-cols-[1fr,auto] gap-6">
                    <div className="w-full text-right text-14 font-bold text-black">{failure ? coupon : ""}</div>
                    <div className="text-right text-14 font-bold text-purple">-{failure ? couponPercentage : 0}%</div>
                  </div>
                )}
              </div>
            </Wrapper>
            <div className="my-20 w-full border-b-1 border-dashed border-grey-10"></div>
            <div className="flex w-full items-center justify-between">
              <div className="text-14 font-bold text-black">Total</div>
              <div className="flex items-center space-x-[6px]">
                <NumberFormat
                  className="text-14 font-bold text-purple"
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
          </div>
        </div>
      </div>
    </>
  )
}

export default FanOrder
