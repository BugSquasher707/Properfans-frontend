import { ReactComponent as ProperCoin } from "assets/img/propercoin.svg"
import CartItemBottom from "components/cart/CartItemBottom"
import { useProps } from "contexts/PropsContext"
import { PropercoinsCartInterface } from "libs/interfaces"
import React from "react"
import { MdAdd, MdRemove } from "react-icons/md"
import NumberFormat from "react-number-format"

const CartItem = ({
  product,
  handler,
  light,
  small,
  index
}: {
  product: PropercoinsCartInterface
  handler?: any
  light: boolean
  small: boolean
  index: number
}) => {
  const { cart, setCart } = useProps()

  const onArrows = (item: PropercoinsCartInterface, incr: number, key: number) => {
    if (item.count === 1 && incr === -1) {
      handler(item)
    } else {
      const newCart = [...cart]
      const newItem = { ...newCart[key] }

      newItem.count = newItem.count + incr
      newCart[key] = newItem

      setCart(newCart)
    }
  }

  return (
    <>
      <div
        className={`group grid w-full cursor-pointer grid-cols-1 gap-12 rounded-4 border-grey-6 bg-white p-16 hover:bg-grey-6 ${
          light ? "border-b-1" : "border-1"
        } ${small ? "h-74 !border-none" : ""}`}
      >
        <div
          className={`grid w-full items-center ${handler ? "grid-cols-[66px,1fr,16px]" : "grid-cols-[66px,1fr]"} ${
            small ? "!grid-cols-[46px,1fr,16px] gap-16" : "gap-18"
          }`}
        >
          <div className={`${small ? "h-46 w-46" : "h-66 w-66 rounded-4 p-7 group-hover:bg-grey-12"}`}>
            <img alt="" className="w-full" src={product.icon} />
          </div>
          <div className="grid w-full grid-cols-1 gap-4">
            <div className="flex items-center justify-start space-x-[8px]">
              <ProperCoin className="h-16 w-16 fill-current text-purple" />
              <div className="text-14 font-bold text-black">
                <NumberFormat displayType={"text"} value={parseInt(product.product)} thousandSeparator /> bundle,{" "}
                {product.count}x
              </div>
            </div>
            <div className="flex w-full items-center space-x-[10px] text-14 font-bold text-purple">
              {product.sale ? (
                <>
                  <div className="flex items-center space-x-[6px]">
                    <div className="text-14 font-bold text-purple">{product.price}</div>
                    <div className="h-4 w-4 rounded-full bg-grey-20"></div>
                    <div className="text-14 text-grey-40 line-through">{product.sale_price}</div>
                  </div>
                  <div className="flex h-20 items-center rounded-4 bg-purple px-6 text-12 font-bold text-white">%</div>
                </>
              ) : (
                <div className="text-14 font-bold text-purple">
                  <NumberFormat displayType={"text"} prefix={"$"} value={product.price} thousandSeparator />
                </div>
              )}
            </div>
          </div>
          {handler && !product.locked ? (
            <div className="grid grid-cols-1 gap-4">
              <button
                className={`flex items-center justify-center rounded-full bg-grey-20 hover:bg-purple ${
                  small ? "h-16 w-16" : "h-22 w-22"
                }`}
                name={"Close"}
                onClick={() => onArrows(product, 1, index)}
              >
                <MdAdd className="text-16 text-white" />
              </button>
              <button
                className={`flex items-center justify-center rounded-full bg-grey-20 hover:bg-purple ${
                  small ? "h-16 w-16" : "h-22 w-22"
                }`}
                name={"Close"}
                onClick={() => onArrows(product, -1, index)}
              >
                <MdRemove className="text-16 text-white" />
              </button>
            </div>
          ) : (
            ""
          )}
        </div>
        {!small ? <CartItemBottom light={light} product={product} /> : ""}
      </div>
    </>
  )
}

export default CartItem
