import { cartCheckout } from "api/integration/cart"
import { PropercoinsCartInterface } from "libs/interfaces"
import React from "react"
import ButtonPurple from "utils/buttons/colors/ButtonPurple"

const CartButton = ({
  loading,
  totalCoins,
  cart,
  coupon,
  token,
  handler,
  title
}: {
  loading: boolean
  totalCoins: number
  cart: PropercoinsCartInterface[]
  coupon: string
  token: string
  handler: any
  title: string
}) => {
  return (
    <>
      {!loading ? (
        <ButtonPurple
          action={() => {
            handler(true)
            cartCheckout(totalCoins, cart, coupon, token)
          }}
          title={title}
          full
        />
      ) : (
        <div className="flex h-42 w-full cursor-pointer items-center justify-center gap-8 rounded-4 bg-purple">
          <div className="relative h-20 w-20 animate-spin overflow-hidden rounded-full bg-white-20">
            <div className="absolute h-10 w-10 bg-white"></div>
            <div className="absolute top-[50%] left-[50%] h-14 w-14 translate-x-[-50%] translate-y-[-50%] transform rounded-full bg-purple"></div>
          </div>
          <div className="text-14 font-bold text-white">Processing...</div>
        </div>
      )}
    </>
  )
}

export default CartButton
