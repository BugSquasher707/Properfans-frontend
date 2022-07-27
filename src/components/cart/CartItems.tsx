import CartItem from "components/cart/CartItem"
import ModalCartRemove from "components/modals/cart/ModalCartRemove"
import { ProductType } from "libs/enums"
import { PropercoinsCartInterface } from "libs/interfaces"
import React, { useEffect, useState } from "react"

const CartItems = ({ products, title }: { products: PropercoinsCartInterface[]; title: string }) => {
  const [modalRemove, setModalRemove] = useState(false)
  const [modalRemoveItem, setModalRemoveItem] = useState<PropercoinsCartInterface>()

  useEffect(() => {
    modalRemoveItem ? setModalRemove(true) : setModalRemove(false)
  }, [modalRemoveItem])

  return (
    <>
      {products && products.length > 0 ? (
        <div className="grid w-full grid-cols-1 gap-10">
          {products.map((product: PropercoinsCartInterface, key: number) => (
            <div key={key} className="w-full">
              {
                {
                  [ProductType.Propercoins]: (
                    <CartItem handler={setModalRemoveItem} index={key} light={false} product={product} small={false} />
                  )
                }[product.type]
              }
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full pt-20 text-center text-14 font-bold text-grey-40">{title}</div>
      )}
      {modalRemoveItem ? (
        <ModalCartRemove handler={setModalRemoveItem} item={modalRemoveItem} open={modalRemove} />
      ) : (
        ""
      )}
    </>
  )
}

export default CartItems
