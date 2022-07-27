import { ProductType } from "libs/enums"
import { PropercoinsCartInterface } from "libs/interfaces"
import React from "react"

const CartItemBottom = ({ product, light }: { product: PropercoinsCartInterface; light: boolean }) => {
  return (
    <>
      <div className={`w-full border-b-1 border-grey-6 ${light ? "hidden group-hover:flex" : ""}`}></div>
      <div className={`flex w-full items-center justify-between gap-12 ${light ? "hidden group-hover:flex" : ""}`}>
        <div className="grid grid-cols-1 gap-6">
          <div className="text-14 text-grey-40">Seller</div>
          <div className="text-14 font-bold text-black">
            {product.type === ProductType.Propercoins ? "Properfans" : ""}
          </div>
        </div>
        <div className="text-14 text-grey-40">Instant delivery</div>
      </div>
    </>
  )
}

export default CartItemBottom
